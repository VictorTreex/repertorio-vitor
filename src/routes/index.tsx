import { createFileRoute } from "@tanstack/react-router";
import { ParticleField } from "@/components/ParticleField";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Vision } from "@/components/sections/Vision";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vitor Dev — Full Stack Engineer | Sistemas reais, não templates" },
      {
        name: "description",
        content:
          "Vitor, 20 anos, desenvolvedor full stack. Sistemas escaláveis, seguros e com identidade própria. JavaScript, Node.js, Supabase, bots e integrações.",
      },
      { property: "og:title", content: "Vitor Dev — Full Stack Engineer" },
      {
        property: "og:description",
        content: "Construo sistemas reais, não templates. Streaming, e-commerce, gateways de pagamento e bots.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ParticleField />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Vision />
        <Contact />
      </main>
    </div>
  );
}
