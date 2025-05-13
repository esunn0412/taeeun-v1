"use client";

import { useEffect, useState } from "react";

const words = ["Technical.", "Tactical.", "Tomatoes."];

const Tagline = () => {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    let typingInterval: NodeJS.Timeout;

    if (isTyping) {
      // Typing effect
      typingInterval = setInterval(() => {
        if (charIndex < words[wordIndex].length) {
          setDisplayText((prev) => prev + words[wordIndex][charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          // Done typing current word
          setIsTyping(false);
          if (wordIndex < words.length - 1) {
            // Prepare to type next word with a space
            setDisplayText((prev) => prev + " ");
          }
          clearInterval(typingInterval);

          // Wait a bit after typing is complete before moving to next word
          setTimeout(() => {
            setWordIndex((prev) => prev + 1);
            setCharIndex(0);
            setIsTyping(true);
          }, 500);

          if (wordIndex == words.length - 2) {
            setTimeout(() => {}, 10000);
          }
        }
      }, 100); // Adjust speed of typing here
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [wordIndex, charIndex, isTyping]);

  return (
    <div>
      <p className="pl-2 text-xl">
        {displayText}
        <span className="inline-block w-1 h-5 ml-1 bg-[var(--background)] animate-pulse">
          &nbsp;
        </span>
      </p>
    </div>
  );
};

export default Tagline;
