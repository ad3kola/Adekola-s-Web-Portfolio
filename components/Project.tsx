"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectsProps } from "@/utils/typings";
import { urlFor } from "@/sanity.cli";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

type Props = {
  project: ProjectsProps;
  projectNo: number;
  totalProjects: number;
};

function Project({ project, projectNo, totalProjects }: Props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const showFromDown = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div
      className={`flex flex-col ${projectNo % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"}  items-center space-y-2 md:space-y-0 flex-shrink-0 text-black p-2 w-full`}
    >
      <motion.div
        initial={{ opacity: 0.2, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full h-[300px] md:h-[400px] relative"
      >
        {project?.projectImage && (
          <Image
            src={urlFor(project?.projectImage).url()}
            alt="project-image"
            fill
            className="object-contain object-center"
          />
        )}
      </motion.div>
      <motion.div
        initial={{ opacity: 0.2, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center text-center max-w-4xl w-full px-3 md:px-6"
      >
        <h3 className="text-xl uppercase tracking-wide font-black text-dark dark:text-gray-200">
          {project?.project}
        </h3>
        {project?.softwares && (
          <motion.div
            viewport={{ once: true }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            className="flex py-2 items-center mt-2 mx-auto justify-center space-x-2"
          >
            {project?.softwares?.map((software, indx) => (
              <motion.div key={indx} variants={showFromDown} className="flex">
                <Image
                  key={indx}
                  src={urlFor(software).url()}
                  alt="software"
                  className="rounded-full object-contain"
                  width={30}
                  height={30}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
        <h4 className="text-[13px]/6 line-clamp-6 text-center text-dark/80 dark:text-gray-200 font-medium tracking-wider mt-1">
          {project?.overview}
        </h4>
        <motion.div
          viewport={{ once: true }}
          className="flex items-center justify-center space-x-3 mt-3"
        >
          <a href={`${project?.githubURL}`} target="_blank">
            <motion.button
              initial={{ x: -50, opacity: 0.2 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-40 flex items-center justify-center font-medium py-3 rounded-sm bg-dark dark:bg-gold dark:text-dark dark:font-bold text-white hover:scale-105 cursor-pointer border-none outline-none duration-200 ease-in-out"
            >
              Open Github
              <ArrowUpRightIcon className="w-[14px] h-[14px] text-gray-200 dark:text-dark ml-2" />
            </motion.button>
          </a>
          <a href={`${project?.projectlink}`} target="_blank">
            <motion.button
              initial={{ x: 50, opacity: 0.2 }}
              viewport={{ once: true }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className=" w-40 flex items-center justify-center font-medium py-3 rounded-sm bg-purple-600 text-white hover:scale-105 cursor-pointer border-none outline-none duration-200 ease-in-out"
            >
              Go to Site{" "}
              <ArrowUpRightIcon className="w-[14px] h-[14px] text-gray-200 dark:text-dark ml-2" />
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
