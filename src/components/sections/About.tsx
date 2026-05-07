import { Reveal } from "@/components/Reveal";
import iconFullstack from "@/assets/icon-fullstack.png";
import iconSecurity from "@/assets/icon-security.png";
import iconPerformance from "@/assets/icon-performance.png";

export function About() {
  const cards = [
    { icon: iconFullstack, title: "Full Stack de verdade", desc: "Do banco ao front. APIs, autenticação, integrações e UI no mesmo padrão." },
    { icon: iconSecurity, title: "Segurança em primeiro lugar", desc: "Auth, roles, proteção de rotas e RLS aplicados em todos os projetos." },
    { icon: iconPerformance, title: "Performance obsessiva", desc: "Sistemas pensados para escalar — não para 'funcionar no localhost'." },
  ];

  return (
    <section id="sobre" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">// sobre mim</p>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Dev focado em <span className="text-gradient">resultado real</span>,<br />
            não em demo bonita.
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 text-lg text-muted-foreground max-w-3xl leading-relaxed">
            Sou um desenvolvedor full stack focado em criar sistemas reais, escaláveis e diferentes
            do padrão. Não gosto de soluções genéricas. Cada projeto que faço precisa ter
            <span className="text-foreground"> identidade, performance e segurança</span>.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={0.1 * i}>
              <div className="relative group rounded-3xl p-7 h-full overflow-hidden border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl hover:-translate-y-1 transition-transform">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[var(--neon-purple)] opacity-10 blur-3xl group-hover:opacity-25 transition-opacity duration-500" />
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-purple)]/60 to-transparent" />
                <img
                  src={c.icon}
                  alt=""
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="relative w-20 h-20 mb-5 drop-shadow-[0_0_25px_rgba(168,85,247,0.5)] group-hover:scale-110 group-hover:rotate-3 transition-transform"
                />
                <h3 className="relative font-semibold text-lg mb-2">{c.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
