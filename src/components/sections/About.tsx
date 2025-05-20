import Tagline from "../Tagline";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";
import { FiFileText } from "react-icons/fi";
import { SocialLink } from "@/types";
import { Trans, useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative h-screen flex flex-row justify-center items-center tracking-wide"
    >
      <div className="space-y-4 flex-1">
        <h1 className="text-7xl m-0 mb-2">Taeeun Kim</h1>
        <p className="pl-2 text-md text-[var(--description)]">
          {t("about.location")}
        </p>
        <Tagline />
      </div>

      <p className="flex-1 mt-4 text-[var(--description)] max-w-xl">
        {t("about.description")}
        <br />
        <br />
        <Trans
          i18nKey="about.education"
          components={{
            projectLink: (
              <a
                href="https://www.linkedin.com/company/project-emory"
                className="text-[var(--highlight)]"
              />
            ),
            hackathonLink: (
              <a
                href="https://www.linkedin.com/posts/project-emory_emoryhacks2025-hackathon-techinnovation-activity-7311186895395332096-R-uR/"
                className="text-[var(--highlight)]"
              />
            ),
          }}
        />
        <br />
        <br /> {t("about.interests")}
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
                {Icon && (
                  <Icon className="size-6 hover:text-[var(--description)] hover:scale-110 transition-transform duration-200" />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
