import Image from "next/image";
import Skill from "@/components/ui/Skill";
import { FaLink, FaGithub } from "react-icons/fa";
import ProjectData from "@/data/ProjectData";

const Projects = () => {
  return (
    <section id="projects" className="container mx-auto py-16">
      <h2 className="text-2xl tracking-widest mb-4">
        What I&apos;ve Worked On
      </h2>

      <div>
        {ProjectData.map((project, index) => (
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
              <h3 className="text-2xl font-semibold white group-hover:text-[var(--highlight)] transition-all duration-200 flex items-baseline gap-4">
                {project.title}
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLink className="text-base" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-base" />
                  </a>
                )}
              </h3>
              <p className="mt-2 text-[var(--description)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                {project.technologies.map((tech, index) => (
                  <Skill key={`proj-skill-${index}`} name={tech} />
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
