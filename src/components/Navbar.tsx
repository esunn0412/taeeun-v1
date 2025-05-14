const Navbar = () => {
  return (
    <nav className="transform-all duration-300 ease-in-out tracking-widest flex justify-between items-center py-6 px-10 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
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
      <div>Korean</div>
    </nav>
  );
};

export default Navbar;
