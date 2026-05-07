import { motion } from "framer-motion";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/5518991913165"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50 grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.6)] animate-pulse-glow"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden>
        <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.1-1.1a7.94 7.94 0 0 0 3.9 1h.01c4.38 0 7.94-3.56 7.94-7.94 0-2.12-.83-4.11-2.35-5.66Zm-5.6 12.2h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.43.64.65-2.37-.16-.25a6.6 6.6 0 1 1 5.55 3.04Zm3.62-4.94c-.2-.1-1.17-.58-1.35-.64-.18-.07-.31-.1-.45.1s-.51.64-.63.78c-.12.13-.23.15-.43.05a5.4 5.4 0 0 1-1.6-.99 6 6 0 0 1-1.1-1.37c-.12-.2 0-.31.09-.41.09-.09.2-.23.3-.35.1-.12.13-.2.2-.34.06-.13.03-.25-.02-.35-.05-.1-.45-1.08-.62-1.48-.16-.39-.33-.34-.45-.34l-.39-.01a.74.74 0 0 0-.54.25c-.18.2-.71.7-.71 1.7s.73 1.97.83 2.1c.1.14 1.43 2.18 3.46 3.06.48.21.86.33 1.16.43.49.15.93.13 1.28.08.39-.06 1.17-.48 1.34-.94.16-.46.16-.86.11-.94-.05-.08-.18-.13-.38-.23Z" />
      </svg>
    </motion.a>
  );
}
