"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { OverviewProps } from "@/utils/typings";
import { fetchOverviewData } from "@/utils/fetchSanityData";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import Skill from "@/components/Skill";
import { fetchSkillsData } from "@/utils/fetchSanityData";
import { SkillsProps } from "@/utils/typings";

function AboutMe() {
  const [content, setContent] = useState<null | OverviewProps>(null);
  const [skillsContent, setSkillsContent] = useState<null | SkillsProps[]>(
    null
  );
  useEffect(() => {
    const fetchData = async () => {
      const skillsData = await fetchSkillsData();
      const data = await fetchOverviewData();
      setSkillsContent(skillsData);
      setContent(data[0]);
    };
    fetchData();
  }, []);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
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
    <>
      <section
        id="about"
        className="w-full flex bg-gray-100 dark:bg-dark flex-col items-center justify-center max-w-7xl mx-auto relative pt-10 px-8 md:px-10 py-5"
      >
        <div className="w-full h-16 flex items-center justify-center dark:bg-dark absolute top-0 left-0">
          <div className="w-full h-16 flex items-center justify-center dark:bg-dark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 2880 320" /* Doubled width for a longer wave */
              className="w-full h-full"
            >
              <path
                d="M0,160 C240,200 480,120 720,160 C960,200 1200,120 1440,160 C1680,200 1920,120 2160,160 C2400,200 2640,120 2880,160"
                fill="none"
                className="stroke-black dark:stroke-gold" /* Black in light mode, gold in dark mode */
                strokeWidth="10"
              ></path>
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-14 mt-8 md:mt-14 w-full p-5 md:px-16 z-10 place-content-center">
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h3 className="capitalize ml-7 text-xl text-dark dark:text-gray-100 font-bold tracking-wider">
              Get to know me!
            </h3>
            <p className="text-sm/7 tracking-wider md:text-[15px]/8 dark:text-gray-200 text-dark/80 text-left mt-5 font-semibold max-w-2xl">
              {content?.longDesc}
            </p>
            <div className="flex items-center space-x-2 mt-4">
              <Link href="#contact">
                <button className="w-40 py-3 font-medium rounded-sm bg-dark dark:bg-[#FFD700] text-gold dark:text-dark dark:font-bold">
                  Let's Talk
                </button>
              </Link>
              <Link href="#contact">
                <button className="h-12 w-14 p-2 flex items-center justify-center font-medium rounded-sm bg-dark dark:bg-gold text-gold dark:text-dark">
                  <EnvelopeIcon className="w-6 h-6 " />
                </button>
              </Link>
            </div>
          </motion.div>
          <div className="flex flex-col w-full max-w-4xl px-2">
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="capitalize ml-7 text-xl text-dark dark:text-gray-100 font-bold tracking-wider"
            >
              Skills
            </motion.h3>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className="flex gap-x-6 gap-y-4 items-center mt-7 flex-wrap"
            >
              {skillsContent?.map((skill, indx) => (
                <motion.div key={indx} variants={showFromDown} className="flex">
                  <Skill skill={skill} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
