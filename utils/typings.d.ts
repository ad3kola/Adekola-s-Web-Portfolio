import { SVGProps } from "react";
import {PortableTextBlock} from 'sanity'

export type LinkProps = {
  name: string;
  Icon: ForwardRefExoticComponent<
    Omit<SVGProps<SVGSVGElement>, "ref">
  >;
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
