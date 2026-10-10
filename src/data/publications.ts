export type Publication = {
  title: string;
  /**
   * 作者名单，一个人一个字符串。渲染时每个名字整体不换行，
   * 逗号后才允许折行，所以人名不会被从中间切开。
   * 名字末尾加 "*" 表示同等贡献，会渲染成上标。
   * 跟 PROFILE.name 相同的名字自动加粗并加下划线，不用手动标。
   */
  authors: string[];
  /** 原样显示的发表信息，带年份，例如 "ICML 2026" / "arXiv 2025" */
  venue: string;
  /** 只用来分组，跟 venue 里的年份可以不同（例如 2025 年的工作发在 2026 年的会） */
  year: number;
  paperlink: string;
  /** 有 codelink 就显示 [code] */
  codelink?: string;
  /** 没有 codelink 时的替代说明，渲染成 [xxx]；两个都不填就不显示 */
  codeNote?: string;
};

export const PUBLICATIONS: Publication[] = [
  {
    title:
      "Learning to Follow In-Context Watermark Instructions via Self-Distillation",
    authors: [
      "Yepeng Liu",
      "Tianyi Chen",
      "Xuandong Zhao",
      "Dawn Song",
      "Yuheng Bu",
    ],
    venue: "NeurIPS 2026",
    year: 2026,
    paperlink: "https://arxiv.org/abs/2608.29030",
    codelink: "https://github.com/yepengliu/ICW-IF",
  },
  {
    title: "ConvexBench: Can LLMs Recognize Convex Functions?",
    authors: [
      "Yepeng Liu",
      "Yu Huang",
      "Yu-Xiang Wang",
      "Yingbin Liang",
      "Yuheng Bu",
    ],
    venue: "ICML 2026",
    year: 2026,
    paperlink: "https://www.arxiv.org/abs/2602.01075",
    codelink: "https://github.com/yepengliu/ConvexBench",
  },
  {
    title: "Auditing Agent Harness Safety",
    authors: [
      "Chengzhi Liu",
      "Yichen Guo",
      "Yepeng Liu",
      "Yuzhe Yang",
      "Qianqi Yan",
      "Xuandong Zhao",
      "Wenyue Hua",
      "Sheng Liu",
      "Sharon Li",
      "Yuheng Bu",
      "Xin Eric Wang",
    ],
    venue: "arXiv 2026",
    year: 2026,
    paperlink: "https://arxiv.org/abs/2605.14271",
    codelink: "https://github.com/UCSB-AI/HarnessAudit",
  },
  {
    title: "In-Context Watermarks for Large Language Models",
    authors: [
      "Yepeng Liu",
      "Xuandong Zhao",
      "Christopher Kruegel",
      "Dawn Song",
      "Yuheng Bu",
    ],
    venue: "ICLR 2026",
    year: 2025,
    paperlink: "https://arxiv.org/abs/2505.16934",
    codelink: "https://github.com/yepengliu/In-Context-Watermarks",
  },
  {
    title:
      "Image Watermarks are Removable Using Controllable Regeneration from Clean Noise",
    authors: [
      "Yepeng Liu",
      "Yiren Song",
      "Hai Ci",
      "Yu Zhang",
      "Haofan Wang",
      "Mike Zheng Shou",
      "Yuheng Bu",
    ],
    venue: "ICLR 2025",
    year: 2025,
    paperlink: "https://arxiv.org/abs/2410.05470",
    codelink: "https://github.com/yepengliu/CtrlRegen",
  },
  {
    title:
      "Theoretically Grounded Framework for LLM Watermarking: A Distribution-Adaptive Approach",
    authors: [
      "Haiyun He*",
      "Yepeng Liu*",
      "Ziqiao Wang",
      "Yongyi Mao",
      "Yuheng Bu",
    ],
    venue: "NeurIPS 2025",
    year: 2025,
    paperlink: "https://arxiv.org/abs/2410.02890",
    codelink: "https://github.com/yepengliu/DAWA",
  },
  {
    title:
      "Dataset Protection via Watermarked Canaries in Retrieval-Augmented LLMs",
    authors: ["Yepeng Liu", "Xuandong Zhao", "Dawn Song", "Yuheng Bu"],
    venue: "EMNLP Findings 2026",
    year: 2025,
    paperlink: "https://arxiv.org/abs/2502.10673",
    codelink: "https://github.com/yepengliu/CanaryTrace",
  },
  {
    title:
      "Position: LLM Watermarking Should Align Stakeholders' Incentives for Practical Adoption",
    authors: [
      "Yepeng Liu",
      "Xuandong Zhao",
      "Dawn Song",
      "Gregory W. Wornell",
      "Yuheng Bu",
    ],
    venue: "ACL Findings 2026",
    year: 2025,
    paperlink: "https://arxiv.org/abs/2510.18333",
  },
  {
    title: "Adaptive Text Watermark for Large Language Models",
    authors: ["Yepeng Liu", "Yuheng Bu"],
    venue: "ICML 2024",
    year: 2024,
    paperlink: "https://arxiv.org/abs/2401.13927",
    codelink: "https://github.com/yepengliu/adaptive-text-watermark",
  },
  {
    title: "TrojText: Test-time Invisible Textual Trojan Insertion",
    authors: ["Qian Lou", "Yepeng Liu", "Bo Feng"],
    venue: "ICLR 2023",
    year: 2023,
    paperlink: "https://arxiv.org/abs/2303.02242",
    codelink: "https://github.com/yepengliu/TrojText",
  },
  {
    title: "TrojLLM: A Black-box Trojan Prompt Attack on Large Language Models",
    authors: [
      "Jiaqi Xue",
      "Mengxin Zheng",
      "Ting Hua",
      "Yilin Shen",
      "Yepeng Liu",
      "Ladislau Bölöni",
      "Qian Lou",
    ],
    venue: "NeurIPS 2023",
    year: 2023,
    paperlink:
      "https://proceedings.neurips.cc/paper_files/paper/2023/hash/cf04d01a0e76f8b13095349d9caca033-Abstract-Conference.html",
    codelink: "https://github.com/UCF-ML-Research/TrojLLM",
  },
];
