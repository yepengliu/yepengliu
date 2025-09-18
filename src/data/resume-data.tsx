import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  // JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, GoogleScholar, X } from "@/components/icons";

export const RESUME_DATA = {
  website: "Yepeng's Homepage",
    
  name: "Yepeng Liu",
  initials: "YL",
  location: "Gainesville, Florida, USA",
  locationLink: "https://maps.app.goo.gl/TjqGZppaxcaNvu5r9",
  email: "yepeng.liu@ufl.edu",
  about: "      ",
  
  summary: "Hi, I'm Yepeng. I'm currently a second-year Ph.D. student in Electrical and Computer Engineering at the University of Florida. I'm very fortunate to be advised by Prof. Yuheng Bu. My current research mainly focuses on improving the safety, robustness, and reliability of AI models towards their deployment in the real world, especially the Trustworthy Generative Models. Should you be interested in my research or wish to explore collaboration opportunities, please don't hesitate to drop me an email!",

  avatarUrl: "https://raw.githubusercontent.com/yepengliu/yepengliu/main/me.jpg",
  // avatarUrl: "https://anonymous.4open.science/api/repo/yepengliu-website-E6CF/file/me.jpg",
  
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
        name: "GoogleScholar",
        url: "https://scholar.google.com/citations?user=I7nvVHgAAAAJ&hl=en",
        icon: GoogleScholar,
      },
      {
        name: "X",
        url: "https://x.com/yepengliu",
        icon: X,
      },
    ],
  },

  
  work: [
    {
      company: "Adaptive Text Watermark for Large Language Models",
      link: "https://arxiv.org/abs/2401.13927",
      badges: [],
      title: "Yepeng Liu,Yuheng Bu",
      description: "Proceedings of ICML 2024",
      paper: "[paper]",
      paperlink: "https://arxiv.org/abs/2401.13927",
      code: "[code]",
      codelink: "https://github.com/yepengliu/adaptive-text-watermark",
    },
    {
      company: "Image Watermarks are Removable Using Controllable Regeneration from Clean Noise",
      link: "https://arxiv.org/abs/2410.05470",
      badges: [],
      title: "Yepeng Liu,Yiren Song,Hai Ci,Yu Zhang,Haofan Wang,Mike Zheng Shou,Yuheng Bu",
      description: "Proceedings of ICLR 2025",
      paper: "[paper]",
      paperlink: "https://arxiv.org/abs/2410.05470",
      code: "[code]",
      codelink: "https://github.com/yepengliu/CtrlRegen",
    },
    {
      company: "Theoretically Grounded Framework for LLM Watermarking: A Distribution-Adaptive Approach",
      link: "https://arxiv.org/abs/2410.02890",
      badges: [],
      title: "Haiyun He*,Yepeng Liu*,Ziqiao Wang,Yongyi Mao,Yuheng Bu",
      description: "Proceedings of NeurIPS 2025",
      paper: "[paper]",
      paperlink: "https://arxiv.org/abs/2410.02890",
      code: "[code]",
      codelink: "https://github.com/yepengliu/DAWA",
    },
    {
      company: "Dataset Protection via Watermarked Canaries in Retrieval-Augmented LLMs",
      link: "https://arxiv.org/abs/2502.10673",
      title: "Yepeng Liu,Xuandong Zhao,Dawn Song,Yuheng Bu",
      description: "arXiv 2025",
      paper: "[paper]",
      paperlink: "https://arxiv.org/abs/2502.10673",
      code: "[code will be released soon]",
      codelink: "",
    },
    {
      company: "In-Context Watermarks for Large Language Models",
      link: "https://arxiv.org/abs/2505.16934",
      title: "Yepeng Liu,Xuandong Zhao,Christopher Kruegel,Dawn Song,Yuheng Bu",
      description: "arXiv 2025",
      paper: "[paper]",
      paperlink: "https://arxiv.org/abs/2505.16934",
      code: "[code will be released soon]",
      codelink: "",
    },
  ],
  skills: [
    "NeurIPS (24', 25'), ICLR (24',25'), ICML (25'), AAAI (25'), AISTATS (24')",
  ],
} as const;
