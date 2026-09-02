"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

const TABS = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
] as const;

/**
 * About / Research 之间的切换。两个 tab 就是页面标题本身——
 * 所以字号和字重跟原来的 h2 一致，下面的内容区不再重复标题。
 */
export function SiteNav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-x-6">
      {TABS.map((tab) => {
        const isActive = pathname === tab.href;

        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "border-b-2 pb-1 font-mono text-base uppercase tracking-wider transition-colors",
              isActive
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
