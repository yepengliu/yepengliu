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
import Script from "next/script";

export const metadata: Metadata = {
  title: `${RESUME_DATA.website}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-12 md:p-16">
      
      <section id="hero" className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4">

        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">

            <div style={{ height: '30px' }}></div> 
            <h1 className="text-3xl font-bold">{RESUME_DATA.name}</h1>
            <div style={{ height: '60px' }}></div> 
            
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground print:text-[12px]">
              {RESUME_DATA.about}
            </p>

            <p className="max-w-md items-center text-pretty font-mono text-sm text-muted-foreground">
              <a
                className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
                target="_blank"
              >
                <Mail className="size-3" />
                {RESUME_DATA.email}
              </a>
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

            <Avatar className="flex shrink-0 overflow-hidden w-41.6 h-52">
              <AvatarImage src={RESUME_DATA.avatarUrl} />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
            </Avatar>
             
        </div>

{/*         Summary Section */}
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px] text-justify">
            {/*             {RESUME_DATA.summary} */}
            Hi, I&#39;m Yepeng. I&#39;m currently a second-year Ph.D. student in Electrical and Computer Engineering at the{" "}
          <a
            href="https://www.ufl.edu/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            University of Florida
          </a>
          . I&#39;m very fortunate to be advised by Prof.{" "}
          <a
            href="https://buyuheng.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Yuheng Bu
          </a>
          . My current research mainly focuses on improving the safety, robustness, and reliability of AI models towards their deployment in the real world, especially watermarking Large Generative Models. 
            Should you be interested in my research or wish to explore collaboration opportunities, please don&#39;t hesitate to drop me an email!
          </p>
        </Section>

{/*         Selected Publications Section */}
        <Section>
          <h2 className="text-xl font-bold">Selected Publications</h2>
          {RESUME_DATA.work.map((work) => {
            return (
              <Card key={work.company}>
                <CardHeader>
                  <div className="flex items-center justify-between gap-x-2 text-sm">
                    <h4 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                      <a className="hover:underline" href={work.link}>
                        {work.company}
                      </a>

                    {/*                       <span className="inline-flex gap-x-1">
                                            {work.badges.map((badge) => (
                                              <Badge
                                                variant="secondary"
                                                className="align-middle text-xs print:text-[8px] print:leading-tight print:px-1 print:py-0.5"
                                                key={badge}
                                              >
                                                {badge}
                                              </Badge>
                                            ))}
                                          </span> */}
                    </h4>
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px] text-gray-500">
                    {work.title}
                  </h4>

                  <h4 className="font-mono text-sm leading-none print:text-[12px] text-gray-500">
                    {work.description}
                  </h4>

                  <h4 className="font-mono text-sm leading-none print:text-[12px] text-gray-500">
{/*                     {work.paper | work.code} */}
                    <a className="hover:underline" href={work.paperlink}>
                        {work.paper}
                    </a>
                    <a className="hover:underline" href={work.codelink}>
                        {work.code}
                    </a>
                  </h4>
                  

                  <div style={{ height: '10px' }}></div> 
  
                </CardHeader>
              </Card>
            );
          })}
        </Section>
        
        <Section>
          <h2 className="text-xl font-bold">Services</h2>
          <div className="flex flex-wrap gap-1">
            <p className="text-pretty font-mono text-sm text-muted-foreground print:text-[12px] text-justify">
              {"NeurIPS(24',25'), ICLR(24',25'), ICML(25'), AAAI(25'), AISTATS(24')"}
            </p>
          </div>
        </Section>

        <Section>
          <div className="flex flex-wrap gap-1">
            <div style={{ height: '0px', width:'0px' }}>
              <a href="https://clustrmaps.com/site/1c1nl"  title="Visit tracker"><img src="//www.clustrmaps.com/map_v2.png?d=fiRDJr8JDGrYvBJLgeh6fusHvo5IWMdBa6ABX9b7984&cl=ffffff" /></a>
            </div> 
          </div>
        </Section>

      </section>
        


    </main>
  );
}
