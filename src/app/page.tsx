import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ContactCallout from "./components/Mail";
import Tech from "./components/tech";
import PhilosophyVideo from "./components/Video";



export default function Home() {
  return (
    <>
    <div>
        <Hero></Hero>
        <Tech></Tech>
        <About></About>
        <PhilosophyVideo></PhilosophyVideo>
        <ContactCallout></ContactCallout>
        <Footer></Footer>
        
    </div>
    </> 
  );
}
