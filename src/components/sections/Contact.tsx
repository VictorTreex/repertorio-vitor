import { Reveal } from "@/components/Reveal";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden text-center glow-border">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-[120px]" />
            <div className="relative">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">// contato</p>
              <h2 className="mt-4 text-4xl md:text-6xl font-bold leading-tight">
                Tem um projeto?<br />
                <span className="text-gradient">Vamos construir.</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Orçamentos e projetos direto no WhatsApp. Resposta rápida, conversa honesta.
              </p>

              <a
                href="https://wa.me/5518991913165?text=Ol%C3%A1%20Vitor%2C%20vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
                className="group mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] px-9 py-4 text-base font-semibold text-background shadow-neon hover:scale-105 transition-transform animate-pulse-glow"
              >
                <MessageCircle className="h-5 w-5" />
                Contatar agora
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <p className="mt-4 text-sm font-mono text-muted-foreground">+55 18 99191-3165</p>

              <p className="mt-6 text-xs font-mono text-muted-foreground">
                vitor.dev — full stack engineer · 2026
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
