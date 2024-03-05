import {
  AcademicCapIcon,
  CircleStackIcon,
  EnvelopeIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";
import { LinkProps } from "./typings";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export const navLinks: LinkProps[] = [
  {
    name: "Home",
    Icon: HomeIcon,
    path: "/",
  },
  {
    name: "About",
    Icon: QuestionMarkCircleIcon,
    path: "#about",
  },
  // {
  //   name: "Jobs & Education",
  //   Icon: AcademicCapIcon,
  //   path: "#experience",
  // },
  {
    name: "Projects",
    Icon: CircleStackIcon,
    path: "#projects",
  },
  {
    name: "connect",
    Icon: EnvelopeIcon,
    path: "#contact",
  },
];
export const socialLinks: LinkProps[] = [
  {
    name: "Twitter",
    Icon: FaTwitter,
    path: "https://x.com/Ad3kola_R?t=p1-y2gq_hyxp8xzCrV0eQ&s=09",
  },
  {
    name: "Linkedin",
    Icon: FaLinkedinIn,
    path: "https://www.linkedin.com/in/richmond-adedeji-18b356294",
  },
  {
    name: "Github",
    Icon: FaGithub,
    path: "https://github.com/ad3kola",
  },
  {
    name: "Tiktok",
    Icon: FaTiktok,
    path: '',
  },
  {
    name: "Instagram",
    Icon: FaInstagram,
    path: "https://www.instagram.com/pos.itiveperspectives?igsh=MWR3MmVmY3pkMGM4",
  },
];
