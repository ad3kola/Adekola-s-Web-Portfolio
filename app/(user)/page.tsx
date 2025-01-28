import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";
import Education from "@/components/Education";
import { ModeToggle } from "@/utils/components/ModeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="dark:bg-dark bg-gray-200 scroll-smooth relative scrollbar-hide overflow-y-scroll">
      <Navbar />
      <Main />
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
      <Footer />
      <div className="fixed top-10 right-10 z-50">
        <ModeToggle />
      </div>
    </main>
  );
}
