import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

import About from "@/components/sections/About";
import Capabilities from "@/components/sections/Capabilities";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";

import InteractiveBackground from "@/components/ui/InteractiveBackground";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />

      <InteractiveBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <About />

        <SelectedWork />

        <Experience />

        <Capabilities />

        <Contact />
      </main>

      <Footer />
    </>
  );
}