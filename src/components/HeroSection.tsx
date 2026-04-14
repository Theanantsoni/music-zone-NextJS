"use client";
import { Button } from "./ui/moving-border";

import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";

function HeroSection() {
  return (
    <div className="relative h-[40rem] w-full overflow-hidden flex items-center justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>

        <p className="mt-4 text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today.
        </p>

        <div className="mt-4">
          <Link href="/courses">
            <Button borderRadius="1.75rem" 
              className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
