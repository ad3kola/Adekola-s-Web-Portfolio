"use client";
import { socialLinks } from "@/utils/data";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";
import { useEffect, useState } from "react";
import { OverviewProps } from "@/utils/typings";
import { fetchOverviewData } from "@/utils/fetchSanityData";
import Image from "next/image";
import { urlFor } from "@/sanity.cli";

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
    <section className="bg-gray-50 relative w-full mx-auto flex flex-col items-center justify-center p-4  h-screen">
      <div className="absolute w-full h-full z-10">
        <Image
          src={"/assets/web-overlay.png"}
          alt=""
          fill
          className="filter opacity-10 brightness-[110%]"
        />
      </div>
      <div className="flex flex-col w-full text-center items-center justify-center max-w-5xl mx-auto z-20">
        <h3 className="text-3xl/[50px] font-extrabold tracking-[3px] text-dark uppercase mt-10">
          <span className="font-bold block">
            Hi, <span className="hidden md:inline-flex">NICE TO MEET YOU!</span>{" "}
            <span className="inline-flex md:hidden">I'M </span>
          </span>
        </h3>
        <h2 className="text-4xl/[50px] font-extrabold tracking-[3px] text-dark uppercase">
          <span className="hidden md:inline-flex">I'M</span>{" "}
          {content?.fullname || "Adekola Adedeji"}
        </h2>
        <h2 className="tracking-wider mt-3 text-dark/80 text-base">
          {content?.shortDesc}
        </h2>
        <div className="w-full mt-7 max-w-xl mx-auto px-5">
          <div className="w-full flex items-center justify-between">
            {socialLinks
              ?.slice(0, socialLinks.length / 2)
              .map(({ Icon, name, path }, id) => (
                <Link href={`${path}`} key={id}>
                  <div className="hover:bg-dark/5 bg-dark/95 p-3 shadow-md rounded-xl duration-200 transition transform ease-in-out hover:scale-110 cursor-pointer group">
                    <Icon className="h-6 w-6 group-hover:text-dark/95 text-gray-200" />
                  </div>
                </Link>
              ))}
          </div>
          <div className="w-full flex items-center justify-evenly mt-5">
            {socialLinks
              ?.slice(socialLinks.length / 2, socialLinks.length)
              .map(({ Icon, name, path }, id) => (
                <Link href={`${path}`} key={id}>
                  <div className="hover:bg-dark/5 bg-dark/95 p-3 shadow-md rounded-xl duration-200 transition transform ease-in-out hover:scale-110 cursor-pointer group">
                    <Icon className="h-6 w-6 group-hover:text-dark/95 text-gray-200" />
                  </div>
                </Link>
              ))}
          </div>
          <div className="w-full flex items-center justify-center mx-auto mt-14 space-x-5">
            <a
              href="https://drive.google.com/file/d/1GbP8_DosQ0dw05KSeZQKNQVL5_lzuZQn/view?usp=drive_link"
              target="_blank"
            >
              <button className="px-4 md:w-44 flex-shrink-0 rounded-md h-12 bg-dark text-gray-100 capitalize tracking-wide duration-200 transition transform ease-in-out hover:scale-[1.03]">
                Download CV
              </button>
            </a>

            <Link href="#contact">
              <button className="px-4 md:w-44 flex-shrink-0 rounded-md h-12 bg-dark text-gray-100 capitalize tracking-wide duration-200 transition transform ease-in-out hover:scale-[1.03]">
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
