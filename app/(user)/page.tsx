import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import { ModeToggle } from "@/utils/components/ModeToggle";
import ScrollToTop from "@/utils/functions/scrollToTop";

export default function Home() {
  return (
    <main className="dark:bg-dark bg-gray-200 scroll-smooth mb-40 relative scrollbar-hide overflow-y-scroll">
      <Navbar />
      <Main />
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
      {/* <Footer /> */}
      <div className="fixed top-10 right-10 z-50">
        <ModeToggle />
      </div>
      <div className="fixed top-10 left-10 z-50 ">
        <ScrollToTop />
      </div>
    </main>
  );
}
