import Navbar from "@/components/Navbar";
import { About, Experience, Projects } from "@/components/sections";
import Divider from "@/components/ui/Divider";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto px-4 mb-24 tracking-wide">
        <About />

        <Divider />

        <Experience />

        <Divider />

        <Projects />

        <Divider />
        <div className="text-center text-gray-400 mt-4">
          made with tomatoes by Taeeun Kim © 2025
        </div>
      </main>
    </div>
  );
}
