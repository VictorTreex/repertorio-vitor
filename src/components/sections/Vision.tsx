import { Reveal } from "@/components/Reveal";

const items = [
  { n: "01", t: "Entender o problema real", d: "Antes de uma linha de código, eu estudo o negócio. Entrego solução, não tela bonita." },
  { n: "02", t: "Arquitetura sólida", d: "Banco bem estruturado, APIs limpas, autenticação séria desde o dia 1." },
  { n: "03", t: "Identidade visual única", d: "Sem template. Cada projeto recebe um design pensado para destacar a marca." },
  { n: "04", t: "Entrega e suporte", d: "Deploy, monitoramento e ajustes. Sistema fica vivo — e funcionando." },
];

export function Vision() {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">// visão de trabalho</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Como eu <span className="text-gradient">construo</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 0.1}>
              <div className="glass rounded-2xl p-7 h-full glow-border hover:-translate-y-1 transition-transform">
                <div className="text-5xl font-bold text-gradient font-mono mb-3">{it.n}</div>
                <h3 className="text-xl font-semibold mb-2">{it.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
