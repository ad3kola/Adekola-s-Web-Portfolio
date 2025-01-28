"use client";
import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import ScrollPositionY from "@/utils/functions/scrollHeight";
import { Progress } from "./ui/progress";

function Navbar() {
  const currentPath = usePathname();
const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
const currentHeight = ScrollPositionY(); // Assuming ScrollPositionY returns a number
const percent = ((currentHeight / totalHeight) * 100).toFixed(0);

console.log(percent);  // This will give you the scroll percentage
console.log("totalHeight:", typeof totalHeight, "currentHeight:", typeof currentHeight, "percent:", typeof percent);


  // const scrollPositionY = useScrollPosition().toFixed(0);
  
    // Explicitly type maxWebHeight as a number
    // const maxWebHeight: number = document.documentElement.scrollHeight - window.innerHeight;
  
    // Calculate the percentage of scroll position relative to the total height
    // const scrollPositionYPercent = maxWebHeight > 0 ? (scrollPositionY / maxWebHeight) * 100 : 0;

  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5, y: 300 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed p-5 bottom-0 w-full flex items-center justify-center z-50">
      <div className="flex dark:border dark:border-gold items-center gap-2 px-6 p-3 mx-auto rounded-full bg-dark font-bold animate-levitate text-gray-200 dark:text-gold relative overflow-hidden">
        {navLinks.map(({ Icon, path, name }) => (
          <Link
            key={path}
            className={`${
              currentPath == path && "bg-gray-200 dark:bg-gold dark:hover:bg-gold hover:text-dark text-dark rounded-full"
            } dark:hover:bg-gold hover:bg-gray-200 hover:text-dark dark:hover:text-white rounded-full p-3 transition-all ease-in`}
            href={`${path}`}
          >
            <Icon className="w-6 h-6 " />
          </Link>
        ))}
        <span
  className={`bg-white dark:bg-gold absolute bottom-0 left-0 rounded h-1`}
  style={{ width: `${percent}%` }}
/>

        </div>
    </motion.header>
  );
}

export default Navbar;
