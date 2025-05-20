"use client";
import { Globe } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 backdrop-blur-sm py-6">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 tracking-widest transform-all duration-300 ease-in-out">
        <a
          href="#"
          className="cursor-pointer font-bold flex group transition-transform duration-200 ease-out hover:scale-105"
        >
          {"Taeeun Kim".split("").map((char, i) => (
            <span
              key={i}
              className="inline-block transition-colors duration-200 ease out group-hover:text-[var(--highlight)]"
              style={{
                transitionDelay: `${i * 50}ms`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </a>

        <div className="cursor-pointer flex gap-12">
          <a className="hover:text-[var(--highlight)]" href="#">
            {t("navbar.title")}
          </a>
          <a className="hover:text-[var(--highlight)]" href="#experience">
            {t("navbar.experience")}
          </a>
          <a className="hover:text-[var(--highlight)]" href="#projects">
            {t("navbar.projects")}
          </a>
        </div>
        <div className="flex items-center gap-8">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              <Globe className="focus:select-none cursor-pointer transition-transform duration-250 hover:scale-110" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col gap-2 mt-4 items-center focus:select-none">
              <DropdownMenuItem
                onClick={() => changeLanguage("en")}
                className={`focus:outline-none hover:outline-none cursor-pointer hover:scale-110 transition-transform duration-200 ${
                  i18n.language === "en" ? "text-[var(--highlight)]" : ""
                }`}
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => changeLanguage("ko")}
                className={`focus:outline-none hover:outline-none cursor-pointer hover:scale-110 transition-transform duration-200 ${
                  i18n.language === "ko" ? "text-[var(--highlight)]" : ""
                }`}
              >
                한국어
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
