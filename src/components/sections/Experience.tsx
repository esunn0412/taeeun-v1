import type { ExperienceType } from "@/types";
import { FaLink } from "react-icons/fa";
import Skill from "../ui/Skill";

const experiences: ExperienceType[] = [
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

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-16">
      <h2 className="text-2xl tracking-widest mb-12">My Experience</h2>
      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div
            key={`exp-${index}`}
            className="flex flex-col md:flex-row gap-6 m-0 group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[var(--highlight)] transition-all duration-200 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-[var(--background)]"></div>
              </div>
              {index !== experiences.length - 1 && (
                <div className="absolute top-6 bottom-0 w-0.5 bg-[var(--highlight)]/30"></div>
              )}
            </div>

            <div className="pb-12 flex flex-row">
              <div className="flex-1">
                <h3 className=" text-gray-300">{exp.period}</h3>
              </div>
              <div className="flex-3">
                <a href={exp.url} target="_blank" rel="noopener noreferrer">
                  <h3 className="text-xl font-semibold white group-hover:text-[var(--highlight)] transition-all duration-200">
                    {exp.title} • {exp.company}
                  </h3>
                  <p className="mt-2 text-gray-300">{exp.description}</p>
                </a>
                {exp.links && (
                  <div className="flex flex-wrap gap-6 mt-4">
                    {exp.links.map((link, index) => (
                      <a
                        key={`link-${index}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-[var(--highlight)] transition-all duration-200 flex items-center"
                      >
                        <FaLink className="text-xs mr-2" />
                        {link.name}
                      </a>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-4 mt-4">
                  {exp.technologies.map((tech, index) => (
                    <Skill key={`exp-skill-${index}`} name={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
