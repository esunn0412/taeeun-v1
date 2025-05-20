"use client";

import Navbar from "@/components/Navbar";
import { About, Experience, Projects } from "@/components/sections";
import Divider from "@/components/ui/Divider";
// import { useEffect, useRef } from "react";
import { useEffect } from "react";

export default function Home() {
  // const lastScroll = useRef(0);
  // useEffect(() => {
  //   const navbar = document.querySelector("nav");

  //   const handleScroll = () => {
  //     const currentScroll = window.scrollY;
  //     if (currentScroll > lastScroll.current && navbar) {
  //       navbar.style.transform = "translateY(-100%)";
  //     } else if (navbar) {
  //       navbar.style.transform = "translateY(0)";
  //     }
  //     lastScroll.current = currentScroll;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement("div");
    cursor.className = "cursor-blur";
    document.body.appendChild(cursor);

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup function to remove event listeners
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cursor.remove();
    };
  }, []);

  useEffect(() => {
    document.body.scrollTop = 0; // for safari
    document.documentElement.scrollTop = 0; // for chrome, firefox, ie and opera

    document.querySelectorAll("nav a").forEach((anchor) => {
      anchor.addEventListener(
        "click",
        function (this: HTMLAnchorElement, e: Event) {
          e.preventDefault();
          const href = this.getAttribute("href");
          if (href) {
            if (href === "#") {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            } else {
              const element = document.querySelector(href);
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }
          }
        }
      );
    });

    // Cleanup function to remove event listeners
    return () => {
      document.querySelectorAll("nav a").forEach((anchor) => {
        anchor.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <div>
      <Navbar />
      <main className="max-w-screen-lg mx-auto px-4 mb-24 tracking-wide scroll-smooth">
        <About />

        <Divider />

        <Experience />

        <Divider />

        <Projects />

        <Divider />
        <div className="text-center text-[var(--description)] mt-4">
          made with tomatoes by Taeeun Kim © 2025
        </div>
      </main>
      <style jsx global>{`
        .cursor-blur {
          position: fixed;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(var(--background-rgb), 0) 0%,
            rgba(var(--background-rgb), 1) 50%
          );

          backdrop-filter: invert(30%);
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: -1;
          transition: all 0.03s;
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
}
