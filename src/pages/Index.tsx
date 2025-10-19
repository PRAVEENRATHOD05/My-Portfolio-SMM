import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Results from "@/components/Results";
import ViralReels from "@/components/ViralReels";
import AIPartners from "@/components/AIPartners";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Experience />
      <Results />
      <ViralReels />
      <AIPartners />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
