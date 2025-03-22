import AboutMe from "../AboutMe";
import ContactMe from "../ContactMe";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import MyPortfolio from "../MyPortfolio";
import MySkills from "../MySkills";
import Education from "../Education";
import CalendlyWidget from "../Calendly";
import Experience from "../Experience";

export default function Home() {
  return (
    <>
      <HeroSection />
      {/* <MySkills /> */}
      <AboutMe />
      <Experience />
      <MyPortfolio />
      {/* <Education /> */}
      <ContactMe />
      <CalendlyWidget />
      <Footer />
    </>
  );
}
