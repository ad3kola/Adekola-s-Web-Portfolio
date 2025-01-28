import { schoolHistory } from "@/utils/data";

function Education() {
  return (
    <section id="education" className="mt-20 dark:bg-dark bg-gray-200 w-full">
<div className="w-full h-16 flex items-center justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2880 320" className="w-full h-full">
    <path
      fill="currentColor" // Fill the wave with the current color
      className="text-black dark:text-gold" // Black in light mode, gold in dark mode
      d="M0,192L96,186.7C192,181,384,171,576,160C768,149,960,128,1152,106.7C1344,85,1536,64,1728,80C1920,96,2112,128,2304,128C2496,128,2688,96,2784,80L2880,64V0H0Z"
    ></path>
  </svg>
</div>


      <h3 className="text-center text-3xl font-bold mt-10">My Education</h3>

      <div className="relative px-4 py-16 mx-auto w-full grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-6xl">
        <span className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-[88%] w-1 bg-dark dark:bg-gold " />
        {/* 1st Year */}
        <div
          className={`relative flex flex-col w-full py-5 px-4 text-dark dark:text-white dark:border border-dark border-2 dark:border-gold rounded-md shadow-lg text-right`}
        >
          <h4 className="relative after:absolute after:h-5 dark:text-gold font-extrabold after:w-5 after:bg-dark dark:after:bg-gold after:z-40 after:-right-[51px] after:top-1/2 after:-translate-y-1/2 after:rounded-full">
            {2010} - {2020} | Primary School
          </h4>
          <h3 className="text-xl font-semibold uppercase">
            Grand Regal Int'l School
          </h3>
          <p className="text-[11px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sitdoloribus sed fuga iusto incidunt assumenda ea, reprehenderit
            atdeleniti earum. Dolores delectus quibusdam saepe hic omnis
            rerumiste sit voluptatem?
          </p>
        </div>
        <div className="hidden md:flex" />
        <div className="hidden md:flex" />
        {/* 2nd Year */}
        <div
          className={`relative flex flex-col w-full py-5 px-4 text-dark dark:text-white dark:border border-dark border-2 dark:border-gold rounded-md shadow-lg`}
        >
          <h4 className="text-lg font-bold relative after:absolute after:h-5 after:w-5 after:bg-dark dark:after:bg-gold dark:text-gold after:z-40 after:-left-[51px] after:top-1/2 after:-translate-y-1/2 after:rounded-full">
            {2020} - {2022} | High School
          </h4>
          <h3 className="text-xl font-semibold uppercase">
            Grand Regal Int'l School
          </h3>
          <p className="text-[11px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            delectus quibusdam saepe hic omnis rerumiste sit voluptatem?
          </p>
        </div>
        {/* 3rd Year */}
        <div
          className={`relative flex flex-col w-full py-5 px-4 text-dark dark:text-white dark:border border-dark border-2 dark:border-gold rounded-md shadow-lg text-right`}
        >
          <h4 className="text-lg font-bold relative after:absolute after:h-5 after:w-5 after:bg-dark dark:after:bg-gold dark:text-gold after:z-40 after:-right-[51px] after:top-1/2 after:-translate-y-1/2 after:rounded-full">
            {2022} - {2023} | University
          </h4>
          <h3 className="text-xl font-semibold">
            National Open University of Nigeria (NOUN)
          </h3>
          <p className="text-[11px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            doloribus sed fuga iusto incidunt assumenda ea, reprehenderit
            atdeleniti earum. Dolores delectus quibusdam saepe hic omnis rerum
          </p>
        </div>
        <div className="hidden md:flex" />
        <div className="hidden md:flex" />
        {/* 4th Year */}
        <div
          className={`relative flex flex-col w-full py-5 px-4 text-dark dark:text-white dark:border border-dark border-2 dark:border-gold rounded-md shadow-lg`}
        >
          <h4 className="text-lg font-bold relative after:absolute after:h-5 after:w-5 after:bg-dark dark:after:bg-gold after:z-40 after:-left-[51px] after:top-1/2 after:-translate-y-1/2 after:rounded-full dark:text-gold">
            {2024} - {2026} | Univeristy (Diploma)
          </h4>
          <h3 className="text-xl font-semibold">Holland College</h3>
          <p className="text-[11px] leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sitdoloribus sed fuga iusto incidunt assumenda ea, reprehenderit
            atdeleniti earum. Dolores delectus quibusdam saepe hic omnis
            rerumiste sit voluptatem?
          </p>
        </div>
      </div>
    </section>
  );
}

export default Education;
