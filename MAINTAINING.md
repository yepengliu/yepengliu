# 维护说明

网站：https://www.yepengliu.com （Vercel 托管，push 到 `main` 自动部署）

> 注意：这个仓库和 GitHub 用户名同名，`README.md` 会显示在 GitHub 个人主页上，
> 所以维护说明写在这里而不是 README。

## 目录结构

```
src/
  app/
    layout.tsx            页面骨架：头部 + About/Research 切换 + 内容 + 访问统计
    page.tsx              About 页正文
    research/page.tsx     Research 页
    globals.css           全局样式、颜色变量
  components/
    hero.tsx              头像、名字、联系方式、社交图标
    site-nav.tsx          About / Research 分段控件
    publication-list.tsx  论文列表（按年份分组）
    fade-in.tsx           切换页面时的淡入
    visitor-tracker.tsx   MapMyVisitors 访问统计
    avatar.tsx            圆形头像（图片加载失败时显示姓名缩写）
    icons.tsx             社交图标
  data/
    profile.ts            名字、邮箱、地址、头像、社交链接
    publications.ts       论文列表
  lib/utils.ts
public/avatar.jpg          网站用的头像（由脚本生成）
assets/avatar-source.jpg   头像原图（不对外公开）
scripts/make_avatar.py     从原图生成头像
```

## 常见修改

- **加论文、改 venue、加代码链接**：`src/data/publications.ts`。数组顺序就是页面上的顺序，`year` 决定分在哪个年份组。
- **改 About 文字**：`src/app/page.tsx`
- **改邮箱、地址、社交链接**：`src/data/profile.ts`
- **换头像**：用新照片替换 `assets/avatar-source.jpg`，然后运行 `python3 scripts/make_avatar.py`（需要 `pip install pillow`）。

## 本地预览与部署

```bash
corepack yarn install
corepack yarn dev      # http://localhost:3000
corepack yarn build    # 上线前检查；不要在 dev 运行时 build，会冲掉 dev 的 .next 缓存
git push               # 推到 main 后 Vercel 自动部署
```
