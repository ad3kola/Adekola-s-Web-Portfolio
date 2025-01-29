import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Education from "@/components/Education";
import ScrollToTop from "@/utils/functions/scrollToTop";
import { ToggleMode } from "@/utils/components/ToggleMode";

export default function Home() {
  return (
    <main className="dark:bg-dark bg-gray-200 scroll-smooth mb-40 relative scrollbar-hide overflow-y-scroll overflow-x-hidden">
      <Navbar />
      <Main />
      <AboutMe />
      <Education />
      <Projects />
      <ContactMe />
      {/* <Footer /> */}
      <div className="fixed top-10 right-7 z-50">
        <ToggleMode />
      </div>
      <div className="fixed bottom-10 left-7 z-50 ">
        <ScrollToTop />
      </div>
    </main>
  );
}
