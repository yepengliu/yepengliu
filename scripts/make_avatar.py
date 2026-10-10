"""从竖版照片生成网站用的正方形头像 public/avatar.jpg。

左右两侧按边缘颜色延展背景，让人像在圆形头像里显得小一点；
延展太多肩膀会出现生硬的横条，1.15 左右比较自然。

用法（在项目根目录）:
    python3 scripts/make_avatar.py
    python3 scripts/make_avatar.py --zoom 1.2 --pos-y 0.3

需要 Pillow: pip install pillow
"""
import argparse

from PIL import Image, ImageFilter

parser = argparse.ArgumentParser()
parser.add_argument("--src", default="assets/avatar-source.jpg")
parser.add_argument("--out", default="public/avatar.jpg")
parser.add_argument("--zoom", type=float, default=1.15, help="正方形边长 / 原图宽度；1.0 = 不缩小人像")
parser.add_argument("--pos-y", type=float, default=0.35, help="纵向取景：0 顶部，0.5 居中，1 底部")
parser.add_argument("--size", type=int, default=400, help="输出边长（像素）")
args = parser.parse_args()

im = Image.open(args.src).convert("RGB")
W, H = im.size
side = min(round(W * args.zoom), H)
pad_left = (side - W) // 2
pad_right = side - W - pad_left
top = round((H - side) * args.pos_y)
band = im.crop((0, top, W, top + side))

canvas = Image.new("RGB", (side, side))
canvas.paste(band, (pad_left, 0))
if side > W:
    # 每一行取最靠边 40 列的平均色向外延展，再轻微模糊消掉逐行噪点
    for x0, x1, dst, width in ((0, 40, 0, pad_left), (W - 40, W, pad_left + W, pad_right)):
        edge = band.crop((x0, 0, x1, side)).resize((1, side), Image.BOX)
        strip = edge.resize((width, side), Image.NEAREST).filter(ImageFilter.GaussianBlur(6))
        canvas.paste(strip, (dst, 0))
    # 接缝两侧再做一次窄带模糊，避免出现竖线
    for sx in (pad_left, pad_left + W):
        seam = canvas.crop((sx - 12, 0, sx + 12, side)).filter(ImageFilter.GaussianBlur(4))
        canvas.paste(seam, (sx - 12, 0))

canvas.resize((args.size, args.size), Image.LANCZOS).save(args.out, quality=88, optimize=True)
print(f"{args.src} ({W}x{H}) -> {args.out} ({args.size}x{args.size}), zoom={args.zoom}, pos_y={args.pos_y}")
