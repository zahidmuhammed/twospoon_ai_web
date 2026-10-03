export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What happens during a discovery call?",
    answer:
      "The discovery call is a working session where we review how work moves through your organization — across teams, systems, and decision points. From there we identify what to build, what systems it needs to integrate with, and what a realistic delivery timeline looks like.",
  },
  {
    question: "How long does an engagement take?",
    answer:
      "Most builds go from kickoff to production in 4–10 weeks. Larger programs or multi-system rollouts can take longer; we align on scope and milestones during discovery before any code is written.",
  },
  {
    question: "How much involvement is required from our team?",
    answer:
      "We embed with the teams who own the workflow. Expect a dedicated point of contact, regular working sessions, and direct access to engineers—enough involvement to keep context sharp, without adding operational overhead.",
  },
  {
    question: "How does pricing work?",
    answer:
      "Pricing is scoped to the engagement—typically fixed fees for defined builds with clear milestones. After discovery we outline options based on scope, integrations, and timeline.",
  },
  {
    question: "Do you stick around after launch?",
    answer:
      "Yes. We support handoff, monitoring, and iteration as your systems evolve, and can stay engaged for expansion work as new workflows come online.",
  },
  {
    question: "Do you build AI systems?",
    answer:
      "Yes. We ship production-grade AI systems inside your stack—integrated with your data, security model, and existing tools—not prototypes that stall after demo day.",
  },
  {
    question: "How do you handle security and compliance?",
    answer:
      "Everything runs on your cloud, against your data, within your security model. We design for your compliance requirements from architecture through deployment and observability.",
  },
];
