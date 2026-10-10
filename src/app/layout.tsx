import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FadeIn } from "@/components/fade-in";
import { SiteNav } from "@/components/site-nav";
import { RESUME_DATA } from "@/data/resume-data";
import { GlobeIcon, Mail } from "lucide-react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: RESUME_DATA.name,
    template: `%s · ${RESUME_DATA.name}`,
  },
  description:
    "Yepeng Liu is a Ph.D. student in Computer Science at UC Santa Barbara, working on the safety, robustness and reliability of AI models, especially watermarking for large generative models.",
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
          <div className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
            {/* hero：两个页面共用，切换 tab 时不会重新渲染 */}
            <div className="flex flex-col items-center text-center">
              <Avatar className="size-[104px] shrink-0 overflow-hidden rounded-full shadow-[0_3px_14px_rgba(0,0,0,0.24)]">
                <AvatarImage
                  className="object-cover"
                  src={RESUME_DATA.avatarUrl}
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>

              <h1 className="mt-6 text-4xl font-bold leading-none">{RESUME_DATA.name}</h1>

              <div className="mt-4 flex flex-col items-center gap-y-1.5 font-mono text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-x-1.5">
                  <Mail className="size-3" />
                  {RESUME_DATA.email}
                </span>
                <a
                  className="inline-flex items-center gap-x-1.5 hover:underline"
                  href={RESUME_DATA.locationLink}
                  target="_blank"
                >
                  <GlobeIcon className="size-3" />
                  {RESUME_DATA.location}
                </a>
              </div>

              <div className="mt-4 flex gap-x-5 print:hidden">
                {RESUME_DATA.contact.social.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    aria-label={social.name}
                    className="text-[#86868b] transition-colors hover:text-foreground"
                  >
                    <social.icon className="size-5" />
                  </a>
                ))}
              </div>
            </div>

            <SiteNav />

            <FadeIn>{children}</FadeIn>

            {/*
              访问统计：放在 layout 里，两个页面只算一次。
              ClustrMaps 已于 2026 年停止服务（整个域名无响应），这里换成了它的
              继任者 MapMyVisitors，站点 ID 是新注册账号下的 1c7zb。
              数据面板：https://mapmyvisitors.com/web/1c7zb
              图片是隐藏的——只为触发统计请求，不在页面上显示地图。
            */}
            <div className="h-0 w-0 overflow-hidden">
              <a href="https://mapmyvisitors.com/web/1c7zb" title="Visit tracker">
                {/* eslint-disable-next-line @next/next/no-img-element -- 统计像素必须是原生 img，next/image 会代理它导致统计失效 */}
                <img alt="" src="https://mapmyvisitors.com/map.png?d=TMMxdAPBTzzG0ll-0Fxtmqyu0mgiYqHERABhPpMnhMI&cl=ffffff" />
              </a>
            </div>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
