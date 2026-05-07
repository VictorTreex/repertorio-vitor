import { motion } from "framer-motion";
import iconLogo from "@/assets/icon-logo.png";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#skills", label: "Skills" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-4 left-1/2 z-50 w-[min(960px,92%)] -translate-x-1/2 glass rounded-full px-5 py-3 flex items-center justify-between"
    >
      <a href="#top" className="flex items-center gap-2 font-semibold">
        <img src={iconLogo} alt="VitorDev" width={1024} height={1024} className="h-8 w-8 object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]" />
        <span className="text-sm tracking-wide">
          vitor<span className="text-gradient">.dev</span>
        </span>
      </a>
      <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="relative hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 hover:after:w-full after:bg-[var(--neon-purple)] after:transition-all"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <a
        href="https://wa.me/5518991913165"
        target="_blank"
        rel="noreferrer"
        className="hidden sm:inline-flex h-9 items-center rounded-full bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] px-4 text-xs font-semibold text-background shadow-neon hover:scale-105 transition-transform"
      >
        Contratar
      </a>
    </motion.header>
  );
}
