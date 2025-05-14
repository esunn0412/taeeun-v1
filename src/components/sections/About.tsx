import Tagline from "../Tagline";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
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
  {
    platform: "Instagram",
    url: "https://www.instagram.com/taeeun.k__/",
    icon: "instagram",
  },
  {
    platform: "Resume",
    url: "/resume.pdf",
    icon: "resume",
  },
];

const iconMap: Record<string, IconType> = {
  mail: LuMail,
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
  resume: FiFileText,
};

const About = () => {
  return (
    <section
      id="about"
      className="relative h-screen flex flex-row justify-center items-center tracking-wide"
    >
      <div className="space-y-4 flex-1">
        <h1 className="text-7xl m-0 mb-2">Taeeun Kim</h1>
        <p className="pl-2 text-md text-gray-400">
          Atlanta, United States | Seoul, Korea
        </p>
        <Tagline />
      </div>

      <p className="flex-1 mt-4 text-gray-300 max-w-xl">
        I’m a student developer and AI researcher who firmly believes that even
        the most advanced AI is meaningless without a platform or application
        that brings it to life for real users. I strive to bridge that gap,
        leveraging AI to build experiences that has tangible impact on the
        general public.
        <br />
        <br />
        I&apos;m currently a rising junior at Emory University, studying
        Mathematics and Computer Science. As Co-Hackathon Director and Project
        Lead at{" "}
        <a
          href="https://www.linkedin.com/company/project-emory"
          className="text-[var(--highlight)]"
        >
          Project Emory
        </a>
        , I organized{" "}
        <a
          href="https://www.linkedin.com/posts/project-emory_emoryhacks2025-hackathon-techinnovation-activity-7311186895395332096-R-uR/"
          className="text-[var(--highlight)]"
        >
          Emory&apos;s first-ever CS Hackathon
        </a>{" "}
        with an amazing team and led a student team to build a website for a
        local business. Now, as Vice President of Project Emory, I’m focused on
        building a community of curious, driven, and collaborative students, to
        support and encourage everyone on their journey.
        <br />
        <br /> In my free time, I am honing my muay thai and kickboxing skills,
        singing and playing guitar, cafe hopping for a good cup of latte, crying
        to great movies, or eating good food with good people.
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
