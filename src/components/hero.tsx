import { GlobeIcon, Mail } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar";
import { PROFILE } from "@/data/profile";

/** 头像、名字、联系方式、社交图标。放在 layout 里两页共用，切换 tab 时不会重新渲染 */
export function Hero() {
  return (
    <div className="flex flex-col items-center text-center">
      <Avatar className="size-[104px] shrink-0 overflow-hidden rounded-full shadow-[0_3px_14px_rgba(0,0,0,0.24)]">
        <AvatarImage className="object-cover" src={PROFILE.avatarUrl} />
        <AvatarFallback>{PROFILE.initials}</AvatarFallback>
      </Avatar>

      <h1 className="mt-6 text-4xl font-bold leading-none">{PROFILE.name}</h1>

      <div className="mt-4 flex flex-col items-center gap-y-1.5 font-mono text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-x-1.5">
          <Mail className="size-3" />
          {PROFILE.email}
        </span>
        <a
          className="inline-flex items-center gap-x-1.5 hover:underline"
          href={PROFILE.locationLink}
          target="_blank"
        >
          <GlobeIcon className="size-3" />
          {PROFILE.location}
        </a>
      </div>

      <div className="mt-4 flex gap-x-5 print:hidden">
        {PROFILE.social.map((social) => (
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
  );
}
