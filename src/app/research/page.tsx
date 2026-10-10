import type { Metadata } from "next";

import { PublicationList } from "@/components/publication-list";
import { PUBLICATIONS } from "@/data/publications";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <>
      <PublicationList publications={PUBLICATIONS} />

      {/* Services（审稿）暂时关闭，想打开就取消注释，并 import { PROFILE } from "@/data/profile"：
      <div className="flex flex-col gap-y-3 pt-8">
        <h2 className="text-xl font-bold">Services</h2>
        <p className="text-pretty text-justify font-mono text-sm text-muted-foreground print:text-[12px]">
          {PROFILE.services}
        </p>
      </div>
      */}
    </>
  );
}
