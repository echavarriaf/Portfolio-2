import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import InteractiveBackground from "@/components/ui/InteractiveBackground";

export default function Home() {
  return (
    <>
      <InteractiveBackground />

      <Navbar />

      <main className="relative z-10">
        <Hero />

        <About />

        <section
          id="work"
          className="relative flex min-h-screen items-center justify-center border-t border-white/[0.06] px-6"
        >
          <h2 className="text-4xl font-bold">Work</h2>
        </section>

        <section
          id="experience"
          className="relative flex min-h-screen items-center justify-center border-t border-white/[0.06] px-6"
        >
          <h2 className="text-4xl font-bold">Experience</h2>
        </section>

        <section
          id="contact"
          className="relative flex min-h-screen items-center justify-center border-t border-white/[0.06] px-6"
        >
          <h2 className="text-4xl font-bold">Contact</h2>
        </section>
      </main>
    </>
  );
}