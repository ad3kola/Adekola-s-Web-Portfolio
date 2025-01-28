"use client";
import { socialLinks } from "@/utils/data";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OverviewProps } from "@/utils/typings";
import { fetchOverviewData } from "@/utils/fetchSanityData";
import Image from "next/image";
import { urlFor } from "@/sanity.cli";
import profile_pic from "@/public/assets/my-progile-pic.png";

function Main() {
  const [content, setContent] = useState<null | OverviewProps>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchOverviewData();
      setContent(data[0]);
    };
    fetchData();
  }, []);

  const roles = ["WEB DEVELOPER", "FRONT-END DEVELOPER", "WEB DESIGNER"];

  return (
    <section className="bg-zinc-50 dark:bg-dark relative w-full mx-auto flex flex-col justify-center p-4 h-screen">
      
      <div className="flex flex-col w-full text-center items-center justify-center -mt-20 max-w-5xl mx-auto z-30">
        <div className="rounded-full shadow overflow-hidden relative h-64 w-64">
          <Image
            alt=""
            src={profile_pic}
            className="object-cover w-full h-full"
            fill={true}
          />
        </div>
        <h3 className="text-3xl/[50px] font-extrabold tracking-[3px] dark:text-zinc-50 uppercase mt-4">
          <span className="font-bold block">
            Hi, <span className="hidden md:inline-flex">NICE TO MEET YOU!</span>{" "}
            <span className="inline-flex md:hidden">I'M </span>
          </span>
        </h3>
        <h2 className="text-4xl/[50px] font-extrabold tracking-[3px] dark:text-gold uppercase">
          <span className="hidden md:inline-flex">I'M</span>{" "}
          {content?.fullname || "Adekola Adedeji"}
        </h2>
        <h2 className="tracking-wider mt-3 dark:text-zinc-100 text-base">
          {content?.shortDesc}
        </h2>
        <div className="w-full mt-6 max-w-md mx-auto px-5">
          <div className="w-full flex items-center justify-between">
            {socialLinks
              ?.slice(0, socialLinks.length / 2)
              .map(({ Icon, name, path }, id) => (
                <Link href={`${path}`} key={id}>
                  <div className="bg-dark/95 p-3 shadow-md rounded-xl duration-200 transition transform ease-in-out hover:scale-125 cursor-pointer border dark:border-gold">
                    <Icon className="h-6 w-6 text-gray-200 dark:text-gold" />
                  </div>
                </Link>
              ))}
          </div>
          
          <div className="w-full flex items-center justify-center mx-auto mt-14 space-x-5">
            <a
              href="https://drive.google.com/file/d/1GbP8_DosQ0dw05KSeZQKNQVL5_IzuZQn/view?usp=drive_link"
              target="_blank"
            >
              <button className="px-7 py-[14px] flex-shrink-0 text-lg rounded-xl bg-dark dark:bg-gold text-gray-100 dark:text-dark font-bold capitalize tracking-wide duration-200 transition transform ease-in-out hover:scale-[1.03]">
                Download CV
              </button>
            </a>

            <Link href="#contact">
              <button className="px-7 py-[14px] flex-shrink-0 text-lg rounded-xl bg-dark dark:bg-gold text-gray-100 dark:text-dark font-bold capitalize tracking-wide duration-200 transition transform ease-in-out hover:scale-[1.03]">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
