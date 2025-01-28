"use client";
import { ProjectsProps } from "@/utils/typings";
import { useState, useEffect } from "react";
import Image from "next/image";
import Project from "@/components/Project";
import { fetchProjectsData } from "@/utils/fetchSanityData";

function Projects() {
  const [content, setContent] = useState<null | ProjectsProps[]>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectsData();
      setContent(data);
    };
    fetchData();
  }, []);
  return (
    <section
      id="projects"
      className="relative w-full bg-gray-100 dark:bg-dark flex flex-col items-center p-5 mt-8"
    >
<div className="w-full h-16 flex items-center justify-center mt-10 rotate-180">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-full">
    <path
      fill="currentColor"
      className="text-black dark:text-gold" // Black in light mode, gold in dark mode
      d="M0,32 C240,80 480,0 720,32 C960,64 1200,32 1440,64 L1440,0 L0,0 Z"
    ></path>
  </svg>
</div>


      <h3 className="capitalize text-2xl text-center text-dark dark:text-gray-200 font-bold tracking-wider capitailze mt-24">
        Projects
      </h3>
      <p className="text-3xl mt-2 font-bold text-dark dark:text-gold tracking-wider text-center">
        Featuring my top builds and creations till date
      </p>
      <div className="p-5 md:py-8 h-full mt-5 flex flex-col items-center space-y-12 max-w-7xl w-full mx-auto">
        {content?.map((project, indx) => (
          <Project
            key={indx}
            projectNo={indx}
            totalProjects={content?.length}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}
export default Projects;
