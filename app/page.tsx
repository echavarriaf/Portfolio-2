import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <section
          id="about"
          className="flex min-h-screen items-center justify-center border-t border-white/10 px-6"
        >
          <h2 className="text-4xl font-bold">About</h2>
        </section>

        <section
          id="work"
          className="flex min-h-screen items-center justify-center border-t border-white/10 px-6"
        >
          <h2 className="text-4xl font-bold">Work</h2>
        </section>

        <section
          id="experience"
          className="flex min-h-screen items-center justify-center border-t border-white/10 px-6"
        >
          <h2 className="text-4xl font-bold">Experience</h2>
        </section>

        <section
          id="contact"
          className="flex min-h-screen items-center justify-center border-t border-white/10 px-6"
        >
          <h2 className="text-4xl font-bold">Contact</h2>
        </section>
      </main>
    </>
  );
}