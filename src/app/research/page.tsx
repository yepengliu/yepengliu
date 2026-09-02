import type { Metadata } from "next";

import { PublicationList } from "@/components/publication-list";
import { RESUME_DATA } from "@/data/resume-data";

export const metadata: Metadata = {
  title: "Research",
};

export default function ResearchPage() {
  return (
    <>
      <PublicationList publications={RESUME_DATA.publications} />

      {/* Services（审稿）暂时关闭，想打开就取消注释：
      <Section className="pt-8">
        <h2 className="text-xl font-bold">Services</h2>
        <p className="text-pretty text-justify font-mono text-sm text-muted-foreground print:text-[12px]">
          {RESUME_DATA.services}
        </p>
      </Section>
      */}
    </>
  );
}
