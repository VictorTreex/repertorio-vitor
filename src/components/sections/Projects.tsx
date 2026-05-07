import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import iconDoramas from "@/assets/icon-doramas.png";
import iconTeddo from "@/assets/icon-teddo.png";
import iconTreex from "@/assets/icon-treexpay.png";
import iconFrod from "@/assets/icon-frodfast.png";
import iconBots from "@/assets/icon-bots.png";

const projects = [
  {
    name: "DoramasSuper",
    url: "doramassuper.site",
    href: "https://doramassuper.site",
    icon: iconDoramas,
    tag: "Streaming",
    desc: "Plataforma de streaming de doramas com sistema de pagamento por conteúdo, plano premium e monetização via acesso limitado.",
    features: ["Pagamento por conteúdo", "Plano premium", "Acesso restrito"],
    glow: "from-fuchsia-500/40 via-purple-600/30 to-transparent",
  },
  {
    name: "TeddoStore",
    url: "teddostore.shop",
    href: "https://teddostore.shop",
    icon: iconTeddo,
    tag: "E-commerce",
    desc: "E-commerce completo de roupas com gestão de vendas, painel administrativo e estrutura full de loja online.",
    features: ["Gestão de vendas", "Painel admin", "Checkout completo"],
    glow: "from-pink-500/40 via-rose-500/30 to-transparent",
  },
  {
    name: "TreexPay",
    url: "treexpay.site",
    href: "https://treexpay.site",
    icon: iconTreex,
    tag: "Gateway",
    desc: "Gateway de pagamento com Pix, integração via APIs e foco total em performance e segurança.",
    features: ["Pix em tempo real", "API robusta", "Segurança nível bank"],
    glow: "from-emerald-400/40 via-cyan-500/30 to-transparent",
  },
  {
    name: "FrodFast Menu",
    url: "Cardápio digital",
    href: "#contato",
    icon: iconFrod,
    tag: "SaaS",
    desc: "Cardápio digital para restaurantes com gestão de pedidos, bot integrado e automação de atendimento.",
    features: ["Gestão de pedidos", "Bot integrado", "Automação"],
    glow: "from-orange-400/40 via-red-500/30 to-transparent",
  },
  {
    name: "Bots & Automações",
    url: "Discord / Telegram",
    href: "#contato",
    icon: iconBots,
    tag: "Automação",
    desc: "Bots inteligentes para Discord e Telegram com automações, integrações e fluxos personalizados.",
    features: ["Discord bots", "Telegram bots", "Integrações"],
    glow: "from-indigo-500/40 via-blue-500/30 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">// projetos</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Sistemas <span className="text-gradient">em produção</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Cada um deles está rodando, processando dados reais e gerando valor — não é portfólio fake.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.a
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className={`group relative block rounded-3xl overflow-hidden h-full border border-white/5 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-xl ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* gradient halo */}
                <div className={`absolute -top-32 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-radial ${p.glow} opacity-60 blur-3xl group-hover:opacity-100 transition-opacity duration-700`} />
                {/* animated border line */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--neon-purple)]/60 to-transparent" />

                <div className={`relative grid ${i === 0 ? "md:grid-cols-[260px_1fr]" : "grid-cols-[110px_1fr]"} gap-6 p-7`}>
                  {/* big real icon */}
                  <div className="relative">
                    <motion.img
                      src={p.icon}
                      alt={`${p.name} icon`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      whileHover={{ rotate: 6, scale: 1.06 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className={`relative z-10 ${i === 0 ? "w-full max-w-[220px]" : "w-24"} drop-shadow-[0_0_25px_rgba(168,85,247,0.45)]`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-[var(--neon-cyan)] font-mono">
                        {p.tag}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                    </div>
                    <h3 className="mt-2 text-2xl md:text-3xl font-bold tracking-tight">{p.name}</h3>
                    <p className="text-xs font-mono text-muted-foreground mt-1">{p.url}</p>
                    <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                      {p.desc}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.features.map((f) => (
                        <span
                          key={f}
                          className="text-[11px] rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-foreground/70"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
