import { Section } from "@/components/ui/section";

const paragraph =
  "text-pretty text-justify font-mono text-sm text-muted-foreground print:text-[12px]";

export default function Page() {
  return (
    <Section>
      <p className={paragraph}>
        Hi, I&#39;m Yepeng. I&#39;m currently a third-year Ph.D. student in
        Computer Science at the{" "}
        <a
          href="https://www.ucsb.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          University of California, Santa Barbara
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
        .
      </p>

      <p className={paragraph}>My research interests broadly lie in:</p>

      <p className={`${paragraph} pl-5`}>
        (1) improving the <em>safety</em>, <em>robustness</em>, and{" "}
        <em>reliability</em> of AI systems for real-world deployment, such as
        AI-generated content detection and agent safety;
      </p>

      <p className={`${paragraph} pl-5`}>
        (2) developing <em>LLM post-training</em> methods, such as{" "}
        <em>reinforcement learning</em> and <em>on-policy distillation</em>, 
        to improve model capabilities such as instruction-following and reasoning;
      </p>

      <p className={`${paragraph} pl-5`}>
        (3) studying <em>recursive self-improvement (RSI)</em>, particularly the
        use of AI to automate and accelerate research and scientific discovery.
      </p>

      <p className={paragraph}>
        Should you be interested in my research or wish to explore collaboration
        opportunities, please don&#39;t hesitate to drop me an email!
      </p>
    </Section>
  );
}
