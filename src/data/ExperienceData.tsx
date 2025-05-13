import type { ExperienceType } from "@/types";

const ExperienceData: ExperienceType[] = [
  {
    title: "Django Backend Engineer Intern",
    company: "Park My Ride",
    period: "Jan, 2025 - May, 2025",
    description:
      "Develop core backend logic for a valet-driving app, managing database interactions, authentication, and CI/CD pipelines. Collaborate with front-end developers in a Scrum environment, applying quality assurance practices in a team of four.",
    technologies: ["Django", "Python", "AWS Lightsail", "PostgresSQL", "Git"],
    url: "https://parkmyride.io/",
  },
  {
    title: "Student Research Assistant",
    company: "NLP Suite",
    period: "Aug, 2024 - Jan, 2025",
    description:
      "Enhanced the NLP-Suite tool by integrating Stanford CoreNLP, Stanza, WordNet, and MALLET within Docker. Optimized file handling and operations, cutting database analyzer processing time by 150% with efficient algorithms.",
    technologies: ["Pandas", "NumPy", "Matplotlib", "Docker", "Git"],
    url: "https://github.com/NLP-Suite",
  },
  {
    title: "ML Research Intern",
    company: "Sionic AI",
    period: "Aug, 2024 - Jan, 2025",
    description:
      "Researched hard negative mining (HNM) strategies to improve contrastive learning for the company's RAG pipeline. Boosted BGE-M3 fine-tuning by 4.87 points on Korean MTEB retrieval task with a positive-aware HNM strategy.",
    technologies: [
      "Python",
      "PyTorch",
      "FlagEmbedding",
      "FAISS",
      "Pandas",
      "Git",
    ],
    url: "https://www.sionic.ai/",
    links: [{ name: "Report", url: "/hnm.pdf" }],
  },
  {
    title: "ML Research Summer Intern",
    company: "Sionic AI",
    period: "May, 2024 - Aug, 2024",
    description:
      "Fine-tuned Meta's pretrained NLLB models, achieving an 85.73 BLEU score in Korean grammar error correction tasks, outperforming SOTA models GPT-4 (75.03) and HCX-3 (71.24); presented findings at PACLIC 38.",
    technologies: ["PyTorch", "Python", "Pandas", "Docker", "Git"],
    url: "https://www.sionic.ai/",
    links: [
      { name: "Paper", url: "/paclic.pdf" },
      {
        name: "KoGEC Model",
        url: "https://huggingface.co/sionic-ai/nllb-200-ko-gec-3.3B",
      },
    ],
  },
];

export default ExperienceData;
