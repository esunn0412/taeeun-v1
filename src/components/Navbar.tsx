const Navbar = () => {
  return (
    <nav className="tracking-widest flex justify-between items-center py-6 px-10 fixed top-0 left-0 right-0 z-50 bg-opacity-90 backdrop-blur-sm">
      <a className="cursor-pointer font-bold" href="#">
        Taeeun Kim
      </a>
      <div className="cursor-pointer flex gap-12">
        <a className="hover:text-gray-400" href="#">
          About
        </a>
        <a className="hover:text-gray-400" href="#experience">
          Experience
        </a>
        <a className="hover:text-gray-400" href="#projects">
          Projects
        </a>
      </div>
      <div>Korean</div>
    </nav>
  );
};

export default Navbar;
