import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { bookPages } from "./scenes";

export function BookScene({ onFlip, onDone }: { onFlip: () => void; onDone: () => void }) {
  const [i, setI] = useState(0);
  const page = bookPages[i]!;
  const next = () => {
    onFlip();
    if (i < bookPages.length - 1) setI(i + 1);
    else onDone();
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-candle p-4">
      <div className="book" onClick={next} role="button" aria-label="ورق بزن">
        <AnimatePresence mode="wait">
          <motion.div
            key={i}
            initial={{ rotateY: -70, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: 70, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ transformOrigin: "right center" }}
            className="book-page"
          >
            <h2 className="font-script text-4xl text-ink sm:text-5xl">{page.title}</h2>
            <div className="photo-slot">{page.photo}</div>
            <p className="max-w-md text-lg leading-loose text-ink/80">{page.text}</p>
            <span className="text-sm text-ink/50">
              {i + 1} / {bookPages.length + 1} — برای ورق زدن ضربه بزن
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
