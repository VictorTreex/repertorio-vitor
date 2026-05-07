import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";

const skills = [
  { name: "JavaScript", level: 95, tag: "avançado" },
  { name: "Node.js", level: 92, tag: "backend & APIs" },
  { name: "HTML / CSS", level: 90, tag: "interfaces modernas" },
  { name: "Banco de dados", level: 88, tag: "Supabase / SQL" },
  { name: "Segurança de aplicações", level: 85, tag: "auth & roles" },
  { name: "Bots Discord / Telegram", level: 90, tag: "automações" },
  { name: "Integração de sistemas", level: 88, tag: "APIs & webhooks" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">// stack</p>
          <h2 className="text-4xl md:text-6xl font-bold">
            Habilidades que <span className="text-gradient">entregam sistemas</span>.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.05}>
              <div className="glass rounded-2xl p-5 glow-border">
                <div className="flex justify-between items-baseline mb-3">
                  <span className="font-semibold">{s.name}</span>
                  <span className="text-xs text-muted-foreground font-mono">{s.tag}</span>
                </div>
                <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--neon-purple)] via-[var(--neon-blue)] to-[var(--neon-cyan)] rounded-full shadow-[0_0_20px_var(--neon-purple)]"
                  />
                </div>
                <div className="mt-2 text-xs text-muted-foreground font-mono">{s.level}%</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
