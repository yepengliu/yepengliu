import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CommandMenu } from "@/components/command-menu";
import { Metadata } from "next";
import { Section } from "@/components/ui/section";
import { Mail, GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RESUME_DATA } from "@/data/resume-data";
import { ProjectCard } from "@/components/project-card";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      <section id="hero" className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">

        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">

            <h1 className="text-5xl font-bold">{RESUME_DATA.name}</h1>

            <div style={{ height: '60px' }}></div> 
            
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>

            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                target="_blank"
              >
                <Mail className="size-3" />
                {RESUME_DATA.email}
              </a>
            </p>
            
            <p className="max-w-md items-center text-pretty font-mono text-xs text-muted-foreground">
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

            <Avatar className="flex shrink-0 overflow-hidden w-52 h-65">
              <AvatarImage src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
          
{/*           <img src="https://previews.dropbox.com/p/thumb/ACUIj2cEAEC5_jPRe1SZqOOnBVwBa1TmSSsXNEflTIj8Hh-hP3r2cOb64d3Vn4uCJKd1ah_jcdBbtfmZ4144DzugTc85paLrlUmkk-bb109ZBO7-xvgumj1KFBhAGj5W7H7gXmbCoZFnxae6tOzu4EaOGkHjH4zed8qqZVmVMdEwYuFwGGi8U70F7ImmW1wP2hLcqsacM5DRcHObhU_TN6g41ekS5I_ro5vvV0I9C0uz_oxmdEQDQcrK0SXWsjy-X5CPYD799okxM3J1_eAhu_7XlegnZSr_16KqwbTXxwUN3e3i_C19fBAJCev4zeBAHB2MOtC887EOKQIrfDfkHHO5MaGrxon9RS_wQ9FSEeeaVQ/p.jpeg" alt="YL" className="w-24 h-30 object-cover" /> */}
            
        </div>
        
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px] text-justify">
            {RESUME_DATA.summary}
          </p>
        </Section>
        
        <Section>
          <h2 className="text-xl font-bold">Selected Publications</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                      <span className="inline-flex gap-x-1">
                        {work.badges.map((badge) => (
                          <Badge
                            variant="secondary"
                            className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                            key={badge}
                          >
                            {badge}
                          </Badge>
                        ))}
                      </span>
                    </h3>
                    <div className="text-sm tabular-nums text-gray-500">
                      {work.start} - {work.end ?? "Present"}
                    </div>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px]">
                    {work.title}
                  </h4>
                </CardHeader>
                <CardContent className="mt-2 text-xs print:text-[10px]">
                  {work.description}
                </CardContent>
              </Card>
            );
          })}
        </Section>
        
        <Section>
          <h2 className="text-xl font-bold">Services</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => {
              return (
                <Badge className="print:text-[10px]" key={skill}>
                  {skill}
                </Badge>
              );
            })}
          </div>
        </Section>

      </section>
        


    </main>
  );
}
