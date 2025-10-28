import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { File } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { usePreloader } from "../preloader";
import { BlurIn, BoxReveal } from "../reveal-animations";
import ScrollDownIcon from "../scroll-down-icon";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { config } from "@/data/config";
import Image from "next/image"; // Make sure this import is here!

const HeroSection = () => {
  const { isLoading } = usePreloader();

  return (
    <section id="hero" className={cn("relative w-full h-screen")}>
  <div className="grid md:grid-cols-[60%_40%]">
        <div
          className={cn(
            "h-[calc(100dvh-3rem)] md:h-[calc(100dvh-4rem)] z-[2]",
            "col-span-1",
            "flex flex-col justify-start md:justify-center items-center md:items-start",
            "pt-28 sm:pt-0 sm:pb-32 md:p-24 md:pl-72 lg:p-40 xl:p-48"
          )}
        >
          {!isLoading && (
            <>
              <div className="w-full max-w-[640px] ml-auto">
                    {/* --- 3. YOUR PHOTO --- */}
                    <Image
                      src="/assets/sameer_photo.jpg" // This matches your file in /public
                      alt="Sameer Shaikh profile photo"
                      width={150}
                      height={150}
                      className="rounded-full mb-4"
                    />

                {/* --- "Hi, I am" text --- */}
                <BlurIn delay={0.7}>
                  <p
                    className={cn(
                      "md:self-start mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl whitespace-nowrap bg-clip-text "
                    )}
                  >
                    Hi, I am
                    <br className="md:hidden" />
                  </p>
                </BlurIn>

                {/* --- Your name from config.ts --- */}
                <BlurIn delay={1}>
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <h1
                        className={cn(
                          "font-thin text-6xl text-transparent text-slate-800 ml-1 text-left",
                          "cursor-default text-edge-outline font-display sm:text-7xl md:text-9xl "
                        )}
                      >
                        {config.author.split(" ")[0]}
                        <br className="md:block hiidden" />
                        {config.author.split(" ")[1]}
                      </h1>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="dark:bg-white dark:text-black"
                    >
                      theres something waiting for you in devtools
                    </TooltipContent>
                  </Tooltip>
                </BlurIn>

                {/* --- 1. YOUR NEW TEXT --- */}
                <BlurIn delay={1.2}>
                  <div
                    className={cn(
                      "md:self-start md:mt-4 font-thin text-md text-slate-500 dark:text-zinc-400 ml-3",
                      "cursor-default font-display sm:text-xl md:text-xl bg-clip-text "
                    )}
                  >
                    <p>Data Science | Web Dev | AI-ML</p>
                    <p>Presentation | Communication | Public Speaking</p>
                  </div>
                </BlurIn>

              </div>
              <div className="mt-8 flex flex-col gap-3">
                <Link
                  href={
                    "https://drive.google.com/file/d/1ePM-xSheekbFJVJxrbhaN2b0iA7ha8WV/view?usp=sharing" // <-- PASTE YOUR OWN RESUME LINK HERE
                  }
                  target="_blank"
                  className="flex-1"
                >
                  <BoxReveal delay={2} width="100%">
                    <Button className="flex items-center gap-2 w-full">
                      <File size={24} />
                      {/* --- 2. YOUR "MY RESUME" TEXT --- */}
                      <p>My Resume</p>
                    </Button>
                  </BoxReveal>
                </Link>
                <div className="flex gap-3">
                  <Tooltip delayDuration={300}>
                    <TooltipTrigger asChild>
                      <Link href={"#contact"}>
                        <Button
                          variant={"outline"}
                          className="block w-full overflow-hidden"
                        >
                          Hire Me
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>pls 🥹 🙏</p>
                    </TooltipContent>
                  </Tooltip>
                  <Link
                    href={config.social.github}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiGithub size={24} />
                    </Button>
                  </Link>
                  <Link
                    href={config.social.linkedin}
                    target="_blank"
                  >
                    <Button variant={"outline"}>
                      <SiLinkedin size={24} />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="grid col-span-1"></div>
      </div>
      <div className="absolute bottom-10 left-[50%] translate-x[-50%]">
        <ScrollDownIcon />
      </div>
    </section>
  );
};

export default HeroSection;