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
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import SlideShow from "@/components/slide-show"; // <-- ADDED THIS

// --- TYPE DEFINITION (You can ignore this) ---
export type Skill = {
  title: string;
  icon: ReactNode;
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
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
// (Make sure to put your slideshow images in this folder)
const BASE_PATH = "/assets/my-projects"; 

// --- 2. YOUR LIST OF PROJECTS ---

const projects: Project[] = [
  // --- PROJECT 1: THIS PORTFOLIO ---
  {
    id: "portfolio",
    category: "Web Development",
    title: "My 3D Portfolio",
    src: "/assets/logo-dark.svg", 
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
    src: "/assets/my-projects/bionic-arm.png", 
    live: "#", 
    github: "https://github.com/sameerwork0207/your-bionic-arm-repo", // CHANGE THIS LINK
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
            A description of your bionic arm project. What sensors did it
            use? What was its purpose? Explain it here.
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
    src: "/assets/my-projects/medpred.png", 
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
          {/* 1. Put 'medpred-1.png' and 'medpred-2.png' in '/public/assets/my-projects/'
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
    src: "/assets/my-projects/vision-paddle.png", 
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
    src: "/assets/my-projects/movie-rec.png", 
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
    src: "/assets/logo-dark.svg", 
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
            My work is always ongoing. Click the "Visit Website" button to
            see all my public repositories.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
        </div>
      );
    },
  },
];

export default projects;