import { motion } from "framer-motion";
import type { Scene, SceneId } from "./scenes";

// Shared component for image-based scenes: the 16:9 frame always covers the
// screen, so percentage hotspots stay aligned with the picture on any device.
export function SceneImage({ scene, onGo }: { scene: Scene; onGo: (next: SceneId, sound: Scene["hotspots"][number]["sound"]) => void }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="scene-frame"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <img src={scene.background} alt="" className="h-full w-full object-cover" width={1920} height={1088} />
        {scene.hotspots.map((h) => (
          <button
            key={h.label}
            aria-label={h.label}
            onClick={() => onGo(h.next, h.sound)}
            className="hotspot"
            style={{ left: `${h.x}%`, top: `${h.y}%`, width: `${h.w}%`, height: `${h.h}%` }}
          >
            <span className="hotspot-dot" />
          </button>
        ))}
      </motion.div>
      {scene.hint && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="hint"
        >
          {scene.hint}
        </motion.p>
      )}
    </div>
  );
}
