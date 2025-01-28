import { SVGProps } from "react";
import {PortableTextBlock} from 'sanity'
import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { IconType } from "react-icons/lib";

export interface HeaderIcons {
  Icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  path: string;
  color?: string;
}

export interface SocialLinks {
  Icon: IconType;
  link: string;
}

export interface SchoolHistory {
  schoolName: string;
  startDate: number;
  finishDate: number;
  educationLevel: string;
  overview: string;
  order: string;
}

export interface AllProjects {
  projectImage: string;
  projectName: string;
  techStack: [{}];
  projectWebsiteLink: string;
  projectGithubLink: string;
  projectDescription: string;
}

export type LinkProps = {
  name: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref">
  > | IconType;
  path?: string;
};

export type OverviewProps = {
  _id: string;
  role: string[];
  fullname: string;
  shortDesc: string;
  location: string;
  email: string;
  longDesc: string;
  userimage: string;
};

export type ProjectsProps = {
  _id: string;
  project: string;
  overview: string;
  projectlink: string;
  githubURL: string;
  softwareUsed: any;
  projectImage: string;
  softwares: string[];
};

export type ContactsProps = {
  _id: string;
  telephone: number;
  email: string;
  location: string;
};

export type SkillsProps = {
  _id: string;
  title: string;
  logo: string;
  proficiency: number;
};

export type ExperienceProps = {
  _id: string;
  company: string;
  position: string;
  softwareUsed: any;
  experience: PortableTextBlock[];
};
