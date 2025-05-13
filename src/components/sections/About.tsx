import Tagline from "../Tagline";
import { Mail, Github, Linkedin, type LucideIcon } from "lucide-react";
import { SocialLink } from "@/types";

const links: SocialLink[] = [
  {
    platform: "Email",
    url: "mailto:taeeunk320@gmail.com",
    icon: "mail",
  },
  {
    platform: "GitHub",
    url: "https://github.com/esunn0412",
    icon: "github",
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/taeeunnkim/",
    icon: "linkedin",
  },
];

const iconMap: Record<string, LucideIcon> = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
};

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-row justify-center items-center tracking-wide"
    >
      <div className="space-y-4 flex-1">
        <h1 className="text-7xl m-0 mb-1">Taeeun Kim</h1>
        <p className="pl-2 text-lg text-gray-400">
          Atlanta, United States | Seoul, Korea
        </p>
        <Tagline />
        {/* <SocialLinks links={socialLinks} /> */}
      </div>

      <p className="flex-2 mt-4 text-gray-300 max-w-xl">
        I am an aspiring software engineer and AI enthusiast. I am a rising
        Junior in Emory University studying Mathematics and Computer Science.
      </p>
      <div className="absolute bottom-12 left-0 container mx-auto">
        <div className="flex gap-4 pt-4">
          {links.map((link) => {
            const Icon = iconMap[link.icon.toLowerCase()];

            return (
              <a
                key={link.platform}
                href={link.url}
                target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                {Icon && <Icon className="h-6 w-6 hover:text-gray-300" />}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
