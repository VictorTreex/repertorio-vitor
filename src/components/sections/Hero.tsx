import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import iconRocket from "@/assets/icon-rocket.png";
import iconLock from "@/assets/icon-lock.png";
import iconClock from "@/assets/icon-clock.png";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--neon-purple)] opacity-30 blur-[140px] animate-float" />
      <div className="absolute bottom-10 -right-32 w-[500px] h-[500px] rounded-full bg-[var(--neon-blue)] opacity-25 blur-[140px] animate-float" style={{ animationDelay: "2s" }} />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative inline-flex items-center gap-3 rounded-full px-5 py-2 mb-8 border border-emerald-400/30 bg-emerald-400/[0.05] backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </span>
          <span className="text-xs font-mono tracking-wider text-emerald-300">
            ONLINE
          </span>
          <span className="h-3 w-px bg-emerald-400/30" />
          <span className="text-xs text-foreground/80">
            Aceitando <span className="text-emerald-300 font-semibold">2 novos projetos</span> em Maio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight"
        >
          Vitor<span className="text-gradient text-glow animate-gradient bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-cyan)] bg-clip-text text-transparent">Dev</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xl md:text-3xl font-medium text-foreground/90"
        >
          Construo <span className="text-gradient">sistemas reais</span>, não templates.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground"
        >
          Desenvolvedor Full Stack. Sistemas escaláveis, seguros e com identidade própria.
          Cada projeto é desenhado para ter performance e diferencial.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/5518991913165"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] px-7 py-3.5 text-sm font-semibold text-background shadow-neon hover:scale-105 transition-transform animate-pulse-glow"
          >
            Falar no WhatsApp
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projetos"
            className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold hover:bg-white/5 transition-colors"
          >
            Ver projetos
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 max-w-3xl mx-auto gap-5"
        >
          {[
            { n: "5+", l: "Sistemas em produção", icon: iconRocket },
            { n: "100%", l: "Foco em segurança", icon: iconLock },
            { n: "24/7", l: "Suporte ativo", icon: iconClock },
          ].map((s) => (
            <div key={s.l} className="relative glass rounded-2xl p-5 flex items-center gap-4 overflow-hidden group hover:-translate-y-1 transition-transform">
              <div className="absolute -inset-1 bg-gradient-to-r from-[var(--neon-purple)]/0 via-[var(--neon-purple)]/10 to-[var(--neon-cyan)]/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <img src={s.icon} alt="" loading="lazy" width={1024} height={1024} className="relative w-14 h-14 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]" />
              <div className="relative text-left">
                <div className="text-2xl md:text-3xl font-bold text-gradient leading-none">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1.5">{s.l}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
