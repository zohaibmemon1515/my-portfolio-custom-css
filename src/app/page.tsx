import Hero from "@/app/components/Hero/page";
import AboutMe from "@/app/components/AboutMe/page";

import Skills from "@/app/components/Skills/page";

import Contact from "@/app/components/Contact/page";

export default function Home() {
  return (
    <div>
      <section id="Home">
        <Hero />
      </section>
      <section id="AboutMe">
        <AboutMe />
      </section>

      <section id="Skills">
        <Skills />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
}
