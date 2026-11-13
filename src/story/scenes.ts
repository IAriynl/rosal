import roomDark from "@/assets/room-dark.jpg";
import roomLit from "@/assets/room-lit.jpg";
import table from "@/assets/table.jpg";

export type SceneId = "start" | "dark" | "lit" | "table" | "book" | "ring";

export type Hotspot = { x: number; y: number; w: number; h: number; label: string; next: SceneId; sound: "click" | "step" | "flip" };

export type Scene = { id: SceneId; background?: string; hint?: string; hotspots: Hotspot[] };

// Hotspot positions are percentages of the 16:9 background image.
export const scenes: Record<SceneId, Scene> = {
  start: { id: "start", hotspots: [] },
  dark: {
    id: "dark",
    background: roomDark,
    hint: "اینجا خیلی تاریکه… کلید برق رو پیدا کن",
    hotspots: [{ x: 6.2, y: 41, w: 5, h: 12, label: "کلید برق", next: "lit", sound: "click" }],
  },
  lit: {
    id: "lit",
    background: roomLit,
    hint: "یه چیزی روی میز منتظرته…",
    hotspots: [{ x: 83, y: 82, w: 30, h: 28, label: "میز", next: "table", sound: "step" }],
  },
  table: {
    id: "table",
    background: table,
    hint: "کتاب رو باز کن",
    hotspots: [{ x: 56, y: 64, w: 62, h: 50, label: "کتاب", next: "book", sound: "flip" }],
  },
  book: { id: "book", hotspots: [] },
  ring: { id: "ring", hotspots: [] },
};

export const bookPages = [
  {
    title: "رزای عزیزم",
    text: "تولدت مبارک… این کتاب کوچیک رو برای تو نوشتم، برای روزهایی که با هم ساختیم.",
    photo: "جای عکس اولین دیدارمون",
  },
  {
    title: "یادته؟",
    text: "خنده‌هات، صدات، اون شب‌هایی که تا صبح حرف زدیم… هنوز همه‌شون رو با خودم دارم.",
    photo: "جای یه عکس دونفره",
  },
  {
    title: "و حالا…",
    text: "هر روز بدون تو یه چیزی کم بود. یه صفحه‌ی دیگه مونده. آروم ورقش بزن.",
    photo: "جای یه عکس از لبخندت",
  },
];
