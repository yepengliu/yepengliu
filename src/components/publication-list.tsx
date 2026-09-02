import { Fragment } from "react";

import { RESUME_DATA, type Publication } from "@/data/resume-data";

/** 按年份倒序分组，组内保持数据文件里的手排顺序 */
function groupByYear(publications: readonly Publication[]) {
  const years = Array.from(new Set(publications.map((p) => p.year))).sort(
    (a, b) => b - a,
  );

  return years.map((year) => ({
    year,
    items: publications.filter((p) => p.year === year),
  }));
}

/**
 * 每个名字包在 whitespace-nowrap 里，名字之间的空格留在外面——
 * 这样折行只会发生在逗号之后，不会把 "Mike Zheng Shou" 从中间切开。
 */
function AuthorList({ authors }: { authors: readonly string[] }) {
  return (
    <>
      {authors.map((author, index) => {
        const isLast = index === authors.length - 1;
        const isEqualContribution = author.endsWith("*");
        const name = isEqualContribution ? author.slice(0, -1) : author;

        return (
          <Fragment key={author}>
            <span className="whitespace-nowrap">
              {name === RESUME_DATA.name ? (
                <strong className="underline underline-offset-2">{name}</strong>
              ) : (
                name
              )}
              {isEqualContribution && <sup>*</sup>}
              {!isLast && ","}
            </span>
            {!isLast && " "}
          </Fragment>
        );
      })}
    </>
  );
}

function PublicationEntry({ publication }: { publication: Publication }) {
  const { title, authors, venue, paperlink, codelink, codeNote } = publication;

  return (
    <div className="space-y-1.5">
      <h3 className="text-sm font-semibold leading-snug">
        <a className="hover:underline" href={paperlink}>
          {title}
        </a>
      </h3>

      <p className="font-mono text-sm leading-snug text-gray-500 print:text-[12px]">
        <AuthorList authors={authors} />
      </p>

      <p className="font-mono text-sm leading-none text-gray-500 print:text-[12px]">
        {venue}
      </p>

      <p className="flex gap-x-2 font-mono text-sm leading-none text-gray-500 print:text-[12px]">
        <a className="hover:underline" href={paperlink}>
          [paper]
        </a>
        {codelink ? (
          <a className="hover:underline" href={codelink}>
            [code]
          </a>
        ) : codeNote ? (
          <span>[{codeNote}]</span>
        ) : null}
      </p>
    </div>
  );
}

export function PublicationList({
  publications,
}: {
  publications: readonly Publication[];
}) {
  return (
    <div className="space-y-8">
      {groupByYear(publications).map(({ year, items }) => (
        <section key={year} className="space-y-4">
          <h2 className="font-mono text-sm font-semibold tracking-widest text-foreground">
            {year}
          </h2>

          <div className="space-y-5">
            {items.map((publication) => (
              <PublicationEntry
                key={publication.title}
                publication={publication}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
