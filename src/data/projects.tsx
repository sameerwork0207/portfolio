import {
  TypographyH3,
  TypographyP,
} from "@/components/ui/typography";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiPython,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiGithub,
} from "react-icons/si";
import { ReactNode } from "react";
import type { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SlideShow from "@/components/slide-show"; // <-- ADDED THIS

// Import local images from `src/my-projects` so Next.js can resolve them
import portfolioSameer from "@/my-projects/portfolio-sameer.png";
import bionicArmImg from "@/my-projects/bionic-arm.png";
import medpredImg from "@/my-projects/medpred.png";
import visionPaddleImg from "@/my-projects/vision-paddle.png";
import movieRecImg from "@/my-projects/movie-Recommendation.png";

// --- TYPE DEFINITION (You can ignore this) ---
export type Skill = {
  title: string;
  icon: ReactNode;
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string | StaticImageData;
  screenshots?: string[];
  skills: { frontend: Skill[]; backend?: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

// --- HELPER COMPONENT FOR "Visit" and "Github" BUTTONS ---
const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

// --- 1. DEFINES ALL POSSIBLE SKILLS ---
const PROJECT_SKILLS = {
  react: { title: "React", icon: <SiReact /> },
  nextjs: { title: "Next.js", icon: <SiNextdotjs /> },
  ts: { title: "TypeScript", icon: <SiTypescript /> },
  tailwind: { title: "Tailwind CSS", icon: <SiTailwindcss /> },
  python: { title: "Python", icon: <SiPython /> },
  numpy: { title: "Numpy", icon: <SiNumpy /> },
  pandas: { title: "Pandas", icon: <SiPandas /> },
  opencv: { title: "OpenCV", icon: <SiOpencv /> },
  github: { title: "GitHub", icon: <SiGithub /> },
};

// --- THE BASE PATH FOR YOUR PROJECT SCREENSHOTS ---
// Serve images from the `public/assets` folder so Next.js can find them.
// Put your images in `public/assets/` (or a subfolder) and reference them
// via `${BASE_PATH}/your-image.png`.
const BASE_PATH = "/assets";

// --- 2. YOUR LIST OF PROJECTS ---

const projects: Project[] = [
  // --- PROJECT 1: THIS PORTFOLIO ---
  {
    id: "portfolio",
    category: "Web Development",
    title: "My 3D Portfolio",
  src: portfolioSameer,
    live: "#", 
    github: "https://github.com/sameerwork0207/portfolio",
    skills: {
      frontend: [
        PROJECT_SKILLS.react,
        PROJECT_SKILLS.nextjs,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.tailwind,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            My Personal Portfolio
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            The very website you are on right now! A fully responsive 3D
            interactive portfolio built with Next.js, Spline, and Vercel.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  // --- PROJECT 2: BIONIC ARM ---
  {
    id: "bionic-arm",
    category: "Robotics & Hardware",
    title: "Bionic Arm",
  src: bionicArmImg,
    live: "#", 
    github: "https://github.com/sameerwork0207/Bionic-Arm", // CHANGE THIS LINK
    skills: {
      frontend: [PROJECT_SKILLS.python], 
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            A Muscle/Iot controlled Bionic Arm
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            A bionic arm ehich could be attcahed to people who have lost their arm, 
            very cost effective than the options available in market currently
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  // --- PROJECT 3: MEDPRED (EXAMPLE) ---
  {
    id: "medpred",
    category: "Machine Learning",
    title: "MedPred Disease Prediction",
  src: medpredImg,
    live: "#",
    github: "https://github.com/sameerwork0207/MedPred", // CHANGE THIS LINK
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.pandas,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            MedPred = Machine Learning for Health
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            A machine learning model trained to predict diseases based on
            symptoms. This project involved data cleaning, model training, and
            evaluation.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <p className="font-mono mb-2">
            This model was trained on a large dataset and can predict...
          </p>
          
          {/* --- SLIDESHOW EXAMPLE --- */}
          {/* 1. Put 'medpred-1.png' and 'medpred-2.png' in '/my-projects/'
            2. Uncomment the <SlideShow> block below
          */}
          {/*
          <SlideShow
            images={[
              `${BASE_PATH}/medpred-1.png`,
              `${BASE_PATH}/medpred-2.png`,
            ]}
          />
          */}
        </div>
      );
    },
  },

  // --- PROJECT 4: VISION PADDLE ---
  {
    id: "vision-paddle",
    category: "Computer Vision",
    title: "Vision Paddle Game",
  src: visionPaddleImg,
    live: "#",
    github: "https://github.com/sameerwork0207/VisionPaddle", // CHANGE THIS LINK
    skills: {
      frontend: [PROJECT_SKILLS.python, PROJECT_SKILLS.opencv],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Hand-Tracking Paddle Game
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            A classic paddle ball game controlled entirely by your hand
            movements, using computer vision (OpenCV) to track your hand on
            camera.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  // --- PROJECT 5: MOVIE RECOMMENDATION ---
  {
    id: "movie-rec",
    category: "Machine Learning",
    title: "Movie Recommendation System",
  src: movieRecImg,
    live: "#",
    github: "https://github.com/sameerwork0207/Movie-Rec-System", // CHANGE THIS LINK
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.numpy,
        PROJECT_SKILLS.pandas,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Content-Based Movie Recommender
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            A content-based filtering system that recommends movies to users
            based on genres, cast, and plot summaries.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },

  // --- PROJECT 6: MORE PROJECTS LINK ---
  {
    id: "more-projects",
    category: "My GitHub",
    title: "More Projects",
    src: "/logo-dark.svg", 
    live: "https://github.com/sameerwork0207?tab=repositories", // Direct link to your GitHub repos
    github: "https://github.com/sameerwork0207",
    skills: {
      frontend: [PROJECT_SKILLS.github],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            See All My Work
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            My work is always ongoing. Click the &quot;Visit Website&quot; button to
            see all my  repositories.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects; 