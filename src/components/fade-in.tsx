"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * hero 固定不动、只有下半部分随路由切换，瞬间替换会显得"跳"。
 * key 跟着 pathname 变 → 每次切换重新挂载 → 淡入动画重新播放。
 */
export function FadeIn({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-in fade-in duration-200">
      {children}
    </div>
  );
}
