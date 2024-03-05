"use client";
import { navLinks } from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/NavLink";
import { motion } from "framer-motion";
import { useState } from "react";
import { Fragment } from "react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
function Navbar() {
  const [openNav, setOpenNav] = useState<boolean>(false);
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5, y: -300 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 w-full z-30 bg-dark px-4 md:px-10 lg:px-16 text-gray-200"
    >
      <div className="flex relative items-center w-full justify-between py-3 space-x-5">
        <div className="flex flex-shrink-0 space-x-3 items-center">
          <Image
            src={"/assets/my-profile-picture.jpeg"}
            alt="my-image"
            width={50}
            height={50}
            className="object-contain rounded-full"
          />
          <span className="text-base text-gray-100 tracking-wider font-black">
            ADEKOLA ADEDEJI
          </span>
        </div>
        {!openNav ? (
          <div
            onClick={() => setOpenNav(true)}
            className="inline-flex md:hidden px-2 py-1 border border-gray-200 rounded-md cursor-pointer"
          >
            <Bars3BottomRightIcon className="w-5 h-5" />
          </div>
        ) : (
          <div
            onClick={() => setOpenNav(false)}
            className="inline-flex md:hidden px-2 py-1 border border-gray-200 rounded-md cursor-pointer"
          >
            <XMarkIcon className="w-5 h-5" />
          </div>
        )}
        <ul className="flex-1 items-center justify-end space-x-5 lg:space-x-8 md:flex hidden">
          {navLinks.map((link, id) => (
            <Link key={link.name} href={`${link.path}`}>
              <li className="text-base lg:text-lg whitespace-nowrap capitalize text-right">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <ul
        className={`${openNav ? "left-0" : "-left-full"} absolute duration-300 transition-all ease-in-out md:hidden flex flex-col w-full top-[74px] right-0 bg-dark`}
      >
        {navLinks.map(({name, Icon, path}) => (
          <Link key={name} href={`${path}`}>
            <li className="text-base w-full lg:text-lg border-b p-4 uppercase hover:bg-gray-100 hover:text-dark duration-200 ease-in-out transition text-right flex items-center justify-between">
              <Icon className ='w-6 h-6 ml-3' />
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar;
