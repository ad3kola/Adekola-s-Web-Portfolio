import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50 scroll-smooth scrollbar-hide overflow-y-scroll">
      <Navbar />
      <Main />
      <AboutMe />
      {/* <Experience /> */}
      <Projects />
      <ContactMe />
      <Footer />
  </main>
  );
}
