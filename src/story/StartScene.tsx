import { motion } from "framer-motion";

export function StartScene({ onStart }: { onStart: () => void }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-10 bg-night px-6 text-center">
      <div className="stars" />
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6 }}
        className="font-script text-5xl text-gold sm:text-7xl"
      >
        تولدت مبارک، رزا
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 0.7 }} transition={{ delay: 1, duration: 1.5 }} className="text-cream/70">
        یه قصه‌ی کوچیک، فقط برای تو
      </motion.p>
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        onClick={onStart}
        className="glow-button"
      >
        برای شروع کلیک کن
      </motion.button>
    </div>
  );
}
