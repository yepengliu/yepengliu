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
                  </div>

                  <h4 className="font-mono text-sm leading-none print:text-[12px] text-gray-500">
                    {work.title}
                  </h4>

                  <h4 className="font-mono text-sm leading-none print:text-[12px] text-gray-500">
                    {work.description}
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
            "Reviewer: Neurips 2024" 
          </div>
        </Section>

      </section>
        


    </main>
  );
}
