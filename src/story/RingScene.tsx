import confetti from "canvas-confetti";
import { motion } from "framer-motion";
import { useState } from "react";
import ring from "@/assets/ring.png";

export function RingScene({ onYes }: { onYes: () => void }) {
  const [yes, setYes] = useState(false);
  const say = () => {
    onYes();
    setYes(true);
    const colors = ["#f5c86b", "#fff3d6", "#e8a0a0", "#ffd9e0"];
    const end = Date.now() + 2500;
    (function frame() {
      confetti({ particleCount: 5, angle: 60, spread: 70, origin: { x: 0 }, colors });
      confetti({ particleCount: 5, angle: 120, spread: 70, origin: { x: 1 }, colors });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
    confetti({ particleCount: 160, spread: 100, origin: { y: 0.6 }, colors, shapes: ["circle"] });
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-candle p-4">
      <div className="book">
        <div className="book-page gap-4">
          <motion.div
            initial={{ y: -60, opacity: 0, rotate: -10 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="ring-wrap"
          >
            <div className="ring-glow" />
            <img src={ring} alt="انگشتر" width={816} height={816} className="ring-img" />
            {[...Array(7)].map((_, k) => (
              <span key={k} className="sparkle" style={{ left: `${15 + k * 11}%`, top: `${20 + ((k * 37) % 55)}%`, animationDelay: `${k * 0.45}s` }} />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 1.6, duration: 2 }}
            className="font-script text-4xl leading-relaxed text-ink sm:text-6xl"
          >
            میشه باز کنار هم باشیم؟
          </motion.h2>
          {!yes ? (
            <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.4 }} onClick={say} className="yes-button">
              بله
            </motion.button>
          ) : (
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="max-w-sm text-lg leading-loose text-ink/80">
              رزا، ممنونم که هستی. از امروز، تمام صفحه‌های بعدی رو با هم می‌نویسیم ♥
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
