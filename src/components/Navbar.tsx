import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Globe } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
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
            About
          </a>
          <a className="hover:text-[var(--highlight)]" href="#experience">
            Experience
          </a>
          <a className="hover:text-[var(--highlight)]" href="#projects">
            Projects
          </a>
        </div>
        <div className="flex items-center gap-8">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Globe className="focus:outline-none focus:select-none cursor-pointer transition-transform duration-250 hover:scale-110" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="flex flex-col items-center border-none mt-2 gap cursor-pointer">
              <DropdownMenuItem className="text-lg hover:outline-none">
                KOR
              </DropdownMenuItem>
              <DropdownMenuItem className="text-lg hover:outline-none">
                ENG
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
