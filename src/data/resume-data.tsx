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
  
  avatarUrl: "https://previews.dropbox.com/p/thumb/ACXpMCZcwbizz3LR0Rz_8TrGOtbW_HuQLM06aIfMZssn0SAYPx9sbuFiWln0zBmV3HSGPr_HjN-3N2J9Pyz8X9CGFk8RUkeVE0S7I8dfcUkzYCI_-hi53q8FZAePP_sRP6M80nzvnwhS34zE3IRR4_Wus9GFoHPyMJmHieKOJTOF5RZ6MpUSAiDENUBtdyodN_99qqLQDmwccamB0vikPDUmqoAqSECEx73yUDt1zaKy6pFme4FbeHcFsPy1tYujp8fzy76Dj8TL_0nsW8KQ5lCBM_SuASw3ZrRnt7-7tlcYK98GSMq8OpvliUMW-GOpA8oO-wy4duJSWOQ8jmKkSRsAC5-MPwfoe8os8OU42jus1RO_s4ptZ7xlpcfer9Bnlo4/p.jpeg",
  
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
      badges: [],
      title: "Yepeng Liu, Yuheng Bu",
      description: "Proceedings of ICML 2024",
    },
    {
      company: "TrojText: Test-time Invisible Textual Trojan Insertion",
      link: "https://arxiv.org/abs/2303.02242",
      badges: [],
      title: "Qian Lou, Yepeng Liu, Bo Feng",
      description: "Proceedings of ICLR 2023",
    },
    {
      company: "TrojLLM: A Black-box Trojan Prompt Attack on Large Language Models",
      link: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/cf04d01a0e76f8b13095349d9caca033-Abstract-Conference.html",
      badges: [],
      title: "Jiaqi Xue, Mengxin Zheng, Ting Hua, Yilin Shen, Yepeng Liu, Ladislau Bölöni, Qian Lou",
      description:
        "Proceedings of NeurIPS 2024",
    },
    {
      company: "MG-ViT: A Multi-Granularity Method for Compact and Efficient Vision Transformers",
      link: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/daeef96627a461ec43b7567b2930cfde-Abstract-Conference.html",
      badges: [],
      title: "Yu Zhang, Yepeng Liu, Duoqian Miao, Qi Zhang, Yiwei Shi, Liang Hu",
      description:
        "Proceedings of NeurIPS 2024",
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
    "NeurIPS 2024",
  ],
} as const;
