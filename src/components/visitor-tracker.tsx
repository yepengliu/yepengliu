/**
 * 访问统计：放在 layout 里，两个页面只算一次。
 * ClustrMaps 已于 2026 年停止服务（整个域名无响应），这里换成了它的
 * 继任者 MapMyVisitors，站点 ID 是新注册账号下的 1c7zb。
 * 数据面板：https://mapmyvisitors.com/web/1c7zb
 * 图片是隐藏的——只为触发统计请求，不在页面上显示地图。
 */
export function VisitorTracker() {
  return (
    <div className="h-0 w-0 overflow-hidden">
      <a href="https://mapmyvisitors.com/web/1c7zb" title="Visit tracker">
        {/* eslint-disable-next-line @next/next/no-img-element -- 统计像素必须是原生 img，next/image 会代理它导致统计失效 */}
        <img
          alt=""
          src="https://mapmyvisitors.com/map.png?d=TMMxdAPBTzzG0ll-0Fxtmqyu0mgiYqHERABhPpMnhMI&cl=ffffff"
        />
      </a>
    </div>
  );
}
