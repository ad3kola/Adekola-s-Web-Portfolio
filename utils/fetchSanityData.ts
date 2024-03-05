import  client  from "@/sanity.cli";
import {
  ContactsProps,
  ExperienceProps,
  OverviewProps,
  ProjectsProps,
  SkillsProps,
} from "./typings";

export async function fetchOverviewData(): Promise<
  OverviewProps[]
> {
  const req = await client.fetch(
    `*[_type=='myinfo']{
		_id,
		fullname,
		email,
		location,
		role,
    longDesc,
		'userimage': userimage.asset._ref,
		shortDesc,
	}`,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return req;
}
export async function fetchProjectsData(): Promise<
  ProjectsProps[]
> {
  const req = await client.fetch(
      `*[_type=='webprojects']{
        _id,
        project,
        overview,
        projectlink,
        githubURL,
        'projectImage': projectImage.asset._ref,
        'softwares': softwareUsed[]->logo.asset._ref
      }`,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return req;
}
export async function fetchContactsData(): Promise<
  ContactsProps[]
> {
  const req = await client.fetch(
    `*[_type=='contact']{
		  _id, 
		  telephone,
		  email,
		  location,
	  }`,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return req;
}
export async function fetchSkillsData(): Promise<
  SkillsProps[]
> {
  const req = await client.fetch(`*[_type=='skill']{
		  _id, 
		  title,
		  'logo': logo.asset._ref,
		  proficiency
	  }`);
  return req;
}
export async function fetchExperienceData(): Promise<
  ExperienceProps[]
> {
  const req = await client.fetch(
    `*[_type=='experience']{
		  _id, 
		  company,
		  position,
		  sofwareUsed,
		  experience,
	  }`,
    {},
    {
      next: {
        revalidate: 10,
      },
    }
  );
  return req;
}
