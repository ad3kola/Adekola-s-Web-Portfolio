import { FaceFrownIcon } from "@heroicons/react/24/solid";
import ExperienceCard from "@/components/ExperienceCard";

function Experience() {
  return (
    <>
      <section id='experience' className="h-screen snap-center w-full flex items-end relative py-3">
        <h3 className="absolute left-1/2 -translate-x-1/2 top-16 text-gray-500 tracking-[10px] font-light text-center w-full uppercase">
          EXPERIENCE
        </h3>
       <div className="w-screen overflow-x-scroll scrollbar-hide scrollbar-thin  scrollbar-track-purple-800/20 scrollbar-thumb-purple-600 space-x-10 py-2 snap-x snap-mandatory *:snap-center first:snap-start last:snap-start flex mt-4">
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
          <ExperienceCard />
        </div>
      </section>
    </>
  );
}

export default Experience;