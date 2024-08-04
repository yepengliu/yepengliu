import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  website: "Yepeng's Homepage",
    
  name: "Yepeng Liu",
  initials: "YL",
  location: "Gainesville, Florida, USA",
  locationLink: "https://maps.app.goo.gl/TjqGZppaxcaNvu5r9",
  email: "yepeng.liu@ufl.edu",
  about: "      ",
  
  summary: "Hi, I'm Yepeng. I'm currently a second-year Ph.D. student in Electrical and Computer Engineering at University of Florida. I'm very fortuante to be advised by Prof. Yuheng Bu.",
  
  avatarUrl: "https://previews.dropbox.com/p/thumb/ACXswrKrDfuzhLa2EjjL4pJkNfNQyc8o_sHmAwqEWICvdmXPCYsAqC9w7HxUVtFIgat3VOUcdjEwb7AdGW3-N7IJHY1J_fY8m_NffoexKLmre-x10RM-4oS6V9MaNhTXT9OA3CWTaNrnWqtfqjZxJsdTK49lhPZbst8QjicpnYDttFGkHktnP7oUsdGmSrURGSWTQOMEu-qZx3V2Qi7HONbA1Jx0UQYisL-hayNovbhIbMWui6cQXTMTzYbT6eB6HABZGqOavsL5XZ1Db-fn6PlWyOBW9GKZPQbA0MULmdgrPyT5WriSfIm7h1SYAIHtEXMdTBqWlhVe-u_n382ZGFByd1wGylu4ek0ejh170TS_gA/p.jpeg",
  
  personalWebsiteUrl: "",
  
  contact: {
    email: "",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/yepengliu",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yepeng-liu-2951b2197",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://scholar.google.com/citations?user=I7nvVHgAAAAJ&hl=en",
        icon: XIcon,
      },
    ],
  },

  
  work: [
    {
      company: "Adaptive Text Watermark for Large Language Models",
      link: "https://arxiv.org/abs/2401.13927",
      badges: ["Code"],
      title: "Yepeng Liu, Yuheng Bu",
      description: "Proceedings of ICML 2024",
    },
    {
      company: "TrojText: Test-time Invisible Textual Trojan Insertion",
      link: "https://arxiv.org/abs/2303.02242",
      badges: ["[Code]"],
      title: "Qian Lou, Yepeng Liu, Bo Feng",
      description: "Proceedings of ICLR 2023",
    },
    {
      company: "TrojLLM: A Black-box Trojan Prompt Attack on Large Language Models",
      link: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/cf04d01a0e76f8b13095349d9caca033-Abstract-Conference.html",
      badges: [],
      title: "Jiaqi Xue, Mengxin Zheng, Ting Hua, Yilin Shen, Yepeng Liu, Ladislau Bölöni, Qian Lou",
      description:
        "Proceedings of Neurips 2024",
    },
    {
      company: "MG-ViT: A Multi-Granularity Method for Compact and Efficient Vision Transformers",
      link: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/daeef96627a461ec43b7567b2930cfde-Abstract-Conference.html",
      badges: [],
      title: "Yu Zhang, Yepeng Liu, Duoqian Miao, Qi Zhang, Yiwei Shi, Liang Hu",
      description:
        "Proceedings of Neurips 2024",
    },
    {
      company: "MLIP: Efficient Multi-Perspective Language-Image Pretraining with Exhaustive Data Utilization",
      link: "https://arxiv.org/abs/2406.01460",
      badges: [],
      title: "Yu Zhang, Qi Zhang, Zixuan Gong, Yiwei Shi, Yepeng Liu, Duoqian Miao, Yang Liu, Ke Liu, Kun Yi, Wei Fan, Liang Hu, Changwei Wang",
      description: "Proceedings of ICML 2024",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "GraphQL",
    "Relay",
    "WebRTC",
  ],
  projects: [
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "Personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers, and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description: "Howdy is a place for joining communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
