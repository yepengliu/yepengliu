"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const TABS = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
] as const;

/** About / Research 切换，做成苹果的分段控件：灰色胶囊底，当前项是浮起的白色胶囊 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex justify-center">
      <div className="inline-flex rounded-full bg-[rgba(118,118,128,0.12)] p-0.5">
        {TABS.map((tab) => {
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "rounded-full px-[22px] py-1.5 text-[13px] font-medium tracking-[-0.01em] transition",
                isActive
                  ? "bg-white shadow-[0_3px_8px_rgba(0,0,0,0.12),0_3px_1px_rgba(0,0,0,0.04)]"
                  : "hover:opacity-60",
              )}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
