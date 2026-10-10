import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

import { FadeIn } from "@/components/fade-in";
import { Hero } from "@/components/hero";
import { SiteNav } from "@/components/site-nav";
import { VisitorTracker } from "@/components/visitor-tracker";
import { PROFILE } from "@/data/profile";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: PROFILE.name,
    template: `%s · ${PROFILE.name}`,
  },
  description:
    "Yepeng Liu is a Ph.D. student in Computer Science at UC Santa Barbara, working on the safety, robustness and reliability of AI models, especially watermarking for large generative models.",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
          <div className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">
            <Hero />
            <SiteNav />
            <FadeIn>{children}</FadeIn>
            <VisitorTracker />
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
