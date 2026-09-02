import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
            <div className="flex items-start justify-between gap-x-8">
              <div className="flex min-h-[12rem] flex-1 flex-col justify-between">
                <h1 className="text-4xl font-bold leading-none">{RESUME_DATA.name}</h1>

                <div className="space-y-1.5">
                  <p className="max-w-md items-center text-pretty font-mono text-sm text-muted-foreground">
                    <span className="inline-flex gap-x-1.5 align-baseline leading-none">
                      <Mail className="size-3" />
                      {RESUME_DATA.email}
                    </span>
                  </p>

                  <p className="max-w-md items-center text-pretty font-mono text-sm text-muted-foreground">
                    <a
                      className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                      href={RESUME_DATA.locationLink}
                      target="_blank"
                    >
                      <GlobeIcon className="size-3" />
                      {RESUME_DATA.location}
                    </a>
                  </p>

                  <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
                    {RESUME_DATA.contact.social.map((social) => (
                      <Button
                        key={social.name}
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={social.url}>
                          <social.icon className="size-6" />
                        </a>
                      </Button>
                    ))}
                  </div>
                </div>
              </div>

              <Avatar className="aspect-[4/5] h-48 w-auto shrink-0 overflow-hidden rounded-xl">
                <AvatarImage
                  className="object-cover"
                  src={RESUME_DATA.avatarUrl}
                />
                <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
              </Avatar>
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
