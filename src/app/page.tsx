import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactCallout from "./components/Mail";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Tech from "./components/tech";
import TopProjects from "./components/TopProject";
import PhilosophyVideo from "./components/Video";
import WhyPartnerWithMe from "./components/Whyme";

export default function Home() {
  return (
    <>
    <div>
        <Hero></Hero>
        <Tech></Tech>
        <About></About>
        <Skills></Skills>
        <TopProjects></TopProjects>
         <Projects></Projects>
        <Education></Education>
        
         <Tech></Tech>
         
         <WhyPartnerWithMe></WhyPartnerWithMe>
        <PhilosophyVideo></PhilosophyVideo>
       
        
        
        <ContactCallout></ContactCallout>

        
    </div>
    </> 
  );
}
