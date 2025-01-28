import Image from "next/image";
import { SkillsProps } from "@/utils/typings";
import { urlFor } from "@/sanity.cli";

function Skill({ skill }: { skill: SkillsProps }) {
  return (
    <>
      <div className="flex items-center justify-between rounded-md space-x-2 bg-dark dark:bg-dark dark:border-gray-200 dark:border text-gray-200 text-sm px-3 sm:px-4 py-2">
        <div className="w-7 h-7 relative">
          {skill?.logo && (
            <Image
              src={urlFor(skill?.logo).url()}
              fill
              alt="skill-logo"
              className="object-contain"
            />
          )}
        </div>
        <p className="tracking-wider font-semibold capitalize">
          {skill?.title}
        </p>
      </div>
    </>
  );
}
export default Skill;
