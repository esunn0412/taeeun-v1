import type { Project } from "@/types";
import Image from "next/image";
import Skill from "@/components/ui/Skill";

const projects: Project[] = [
  {
    title: "WOW Centreville",
    description:
      "Full-stack ordering platform for local business, streamlining order management and online payment.",
    technologies: ["TypeScript", "Tailwind CSS", "Django", "Stripe", "Figma"],
    image: "/wow.png",
    url: "https://wowcentreville.com/",
  },
  {
    title: "Rendezvous",
    description:
      "Pinterest and Reddit-inspired full-stack featuring CRUD operations, user authentication, and deployed on AWS via Docker.",
    technologies: ["Docker", "AWS EC2", "Bootstrap", "Django", "HTML/CSS"],
    image: "/ren.png",
  },
  {
    title: "Good Hangul",
    description:
      "Korean grammar error correction platform powered by the finetuned sLLM research model: nllb-200-ko-gec-3.3B. Built a Chrome Extension that automatically detects inputs and displays correction retrieved from koGEC API.",
    technologies: [
      "Flask",
      "Python",
      "Docker",
      "Typescript",
      "PyTorch",
      "Pocketbase DB",
    ],
    image: "/goodhangul.png",
    url: "https://goodhangul.sionic.ai/blog",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-16">
      <h2 className="text-2xl tracking-widest mb-4">
        What I&apos;ve Worked On
      </h2>

      <div>
        {projects.map((project, index) => (
          <div
            key={`proj-${index}`}
            className="flex flex-col md:flex-row gap-6 m-0 px-4 py-8 rounded-lg group border border-transparent transition-all duration-300"
          >
            <div className="w-full md:w-80 flex-shrink-0">
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                width={400}
                height={300}
                className="w-full h-auto object-fit rounded-lg group-hover:scale-105 transition-all duration-300"
              />
            </div>

            <div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <h3 className="text-2xl font-semibold white group-hover:text-blue-300 transition-all duration-200">
                    {project.title}
                  </h3>
                </a>
              ) : (
                <h3 className="text-2xl font-semibold white group-hover:text-blue-300 transition-all duration-200">
                  {project.title}
                </h3>
              )}
              <p className="mt-2 text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-4 mt-4">
                {project.technologies.map((tech, index) => (
                  <Skill key={`skill-${index}`} name={tech} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
