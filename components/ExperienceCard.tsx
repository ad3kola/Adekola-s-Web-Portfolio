'use client'
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import {motion} from 'framer-motion'

function ExperienceCard() {
  return (
    <div className="flex flex-col w-[500px] md:w-[650px] flex-shrink-0 rounded-sm bg-neutral-900 p-8 md:px-14">
      <motion.div initial={{opacity: 0, y: -200}} whileInView={{opacity: 1, y: 0}} transition={{duration: 2}} className ='relative h-40 w-40 rounded-full mx-auto'>
      <Image
        src={"/assets/facebook-logo.png"}
        alt="company-logo"
        fill
        className="mx-auto rounded-full object-center object-contain"
        />
        </motion.div>
      <div className="mt-4 flex flex-col w-full p-1 space-y-2">
        <h2
          className="font-bold text-xl tracking-wide text-gray-100 uppercase w-full"
        >
          CEO OF PAPAFAM
        </h2>
        <h4 className="font-normal text-base  text-gray-400 uppercase w-full tracking-[5px]">
          SOFTWARE ENGINEER
        </h4>
        <div className="flex items-center space-x-3">
          <Image
            src={"/assets/facebook-logo.png"}
            alt="company-logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <Image
            src={"/assets/facebook-logo.png"}
            alt="company-logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <Image
            src={"/assets/facebook-logo.png"}
            alt="company-logo"
            width={30}
            height={30}
            className="object-cover"
          />
          <Image
            src={"/assets/facebook-logo.png"}
            alt="company-logo"
            width={30}
            height={30}
            className="object-cover"
          />
        </div>
        <h4 className="mt-1 font-medium text-sm text-gray-300 capitalize w-full tracking-tight">
          Wed Dec 30 2020 - Present
        </h4>
        <ul className="flex flex-col space-y-3 mt-1">
          <li className="tracking-wide text-[13px]/5 font-medium text-gray-300 list-none flex items-start space-x-2">
            <CheckBadgeIcon className="h-5 w-5 flex-shrink-0 text-gray-300 mr-2" />
            Lorem ipsum dolor sit, amet consectetur
            adipisicing.
          </li>
          <li className="tracking-wide text-[13px]/5 font-medium text-gray-300 list-none flex items-start space-x-2">
            <CheckBadgeIcon className="h-5 w-5 flex-shrink-0 text-gray-300 mr-2" />
            Lorem ipsum dolor sit, amet g.
          </li>
          <li className="tracking-wide text-[13px]/5 font-medium text-gray-300 list-none flex items-start space-x-2">
            <CheckBadgeIcon className="h-5 w-5 flex-shrink-0 text-gray-300 mr-2" />
            Lorem ipsum dolor sit, amet consectetur
            adipisicing.
          </li>
          <li className="tracking-wide text-[13px]/5 font-medium text-gray-300 list-none flex items-start space-x-2">
            <CheckBadgeIcon className="h-5 w-5 flex-shrink-0 text-gray-300 mr-2" />
            Lorem ipsum dolor sit, amet consectetu.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
