import { GitHubIcon, GoogleScholar, LinkedInIcon, X } from "@/components/icons";

export const PROFILE = {
  name: "Yepeng Liu",
  initials: "YL",
  email: "yepengliu@ucsb.edu",
  location: "Santa Barbara, CA, USA",
  locationLink: "https://maps.app.goo.gl/PzanfcBVWB6FHqnX6",

  // public/avatar.jpg 由 assets/avatar-source.jpg 生成（scripts/make_avatar.py）：
  // 左右延展了背景（缩放 1.15），让人像在圆形头像里小一点。换照片时重新跑一次脚本。
  avatarUrl: "/avatar.jpg",

  social: [
    {
      name: "GoogleScholar",
      url: "https://scholar.google.com/citations?user=I7nvVHgAAAAJ&hl=en",
      icon: GoogleScholar,
    },
    {
      name: "GitHub",
      url: "https://github.com/yepengliu",
      icon: GitHubIcon,
    },
    {
      name: "X",
      url: "https://x.com/yepengliu",
      icon: X,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yepeng-liu-2951b2197",
      icon: LinkedInIcon,
    },
  ],

  // 目前 Services 那一节是注释掉的（见 src/app/research/page.tsx），
  // 想重新打开时这行文案在这里
  services:
    "NeurIPS (24', 25'), ICLR (24',25'), ICML (25'), AAAI (25'), AISTATS (24')",
} as const;
