import { FaLink } from "react-icons/fa";
import Skill from "../ui/Skill";
import ExperienceData from "@/data/ExperienceData";

const Experience = () => {
  return (
    <section id="experience" className="container mx-auto py-16">
      <h2 className="text-2xl tracking-widest mb-12">My Experience</h2>
      <div className="space-y-12">
        {ExperienceData.map((exp, index) => (
          <div
            key={`exp-${index}`}
            className="flex flex-col md:flex-row gap-6 m-0 group"
          >
            <div className="relative flex flex-col items-center">
              <div className="w-6 h-6 rounded-full bg-white group-hover:bg-[var(--highlight)] transition-all duration-200 flex items-center justify-center z-10">
                <div className="w-3 h-3 rounded-full bg-[var(--background)]"></div>
              </div>
              {index !== ExperienceData.length - 1 && (
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
