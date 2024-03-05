"use client";
import { ProjectsProps } from "@/utils/typings";
import { useState, useEffect } from "react";
import Image from "next/image";
import Project from "@/components/Project";
import { fetchProjectsData } from "@/utils/fetchSanityData";

function Projects() {
  const [content, setContent] = useState<
    null | ProjectsProps[]
  >(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchProjectsData();
      setContent(data);
    };
    fetchData();
  }, []);
  return (
    <section id='projects' className="relative w-full bg-gray-50 flex flex-col items-center p-5 mt-10">
      <h3 className="capitalize ml-7 text-2xl text-center text-dark font-bold tracking-wider capitailze">
        Projects
      </h3>
      <p className ='text-3xl mt-2 font-bold text-dark tracking-wider text-center'>Featuring my top builds and creations till date</p>
      <div className="absolute top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 h-80 md:h-[400px] w-full bg-purple-800/20 -skew-y-12 -z-10" />
      <div className="p-5 md:py-8 h-full mt-5 flex flex-col items-center space-y-12 max-w-7xl w-full">
        {content?.map((project, indx) => (
          <Project key={indx} projectNo={indx} totalProjects={content?.length} project={project} />
        ))}
      </div>
    </section>
  );
}
export default Projects;