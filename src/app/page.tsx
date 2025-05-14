"use client";

import Navbar from "@/components/Navbar";
import { About, Experience, Projects } from "@/components/sections";
import Divider from "@/components/ui/Divider";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, ie and opera
  }, []);

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
