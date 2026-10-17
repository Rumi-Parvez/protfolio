import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactCallout from "./components/Mail";
import MyStories from "./components/Story";
import Tech from "./components/tech";
import PhilosophyVideo from "./components/Video";
import WhyPartnerWithMe from "./components/Whyme";



export default function Home() {
  return (
    <>
    <div>
        <Hero></Hero>
        <Tech></Tech>
        <About></About>
        <WhyPartnerWithMe></WhyPartnerWithMe>
         <Tech></Tech>
        <PhilosophyVideo></PhilosophyVideo>
       
        <MyStories></MyStories>
        
        <ContactCallout></ContactCallout>
        <Footer></Footer>
        
    </div>
    </> 
  );
}
