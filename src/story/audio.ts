let ctx: AudioContext | null = null;
let musicTimer: ReturnType<typeof setInterval> | null = null;
let master: GainNode | null = null;

function ac() {
  if (!ctx) {
    ctx = new AudioContext();
    master = ctx.createGain();
    master.gain.value = 0.6;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function tone(freq: number, start: number, dur: number, vol: number, type: OscillatorType = "sine") {
  const c = ac();
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.value = freq;
  g.gain.setValueAtTime(0, start);
  g.gain.linearRampToValueAtTime(vol, start + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  o.connect(g).connect(master!);
  o.start(start);
  o.stop(start + dur + 0.05);
}

function noise(dur: number, vol: number, freq: number) {
  const c = ac();
  const buf = c.createBuffer(1, c.sampleRate * dur, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / d.length);
  const s = c.createBufferSource();
  s.buffer = buf;
  const f = c.createBiquadFilter();
  f.type = "bandpass";
  f.frequency.value = freq;
  const g = c.createGain();
  g.gain.value = vol;
  s.connect(f).connect(g).connect(master!);
  s.start();
}

export function playSound(kind: "click" | "step" | "flip" | "sparkle") {
  const c = ac();
  const t = c.currentTime;
  if (kind === "click") {
    noise(0.05, 0.8, 2500);
    tone(180, t, 0.08, 0.2, "square");
  } else if (kind === "step") {
    noise(0.25, 0.4, 400);
  } else if (kind === "flip") {
    noise(0.35, 0.5, 1800);
  } else {
    [1318, 1568, 1976, 2637].forEach((f, i) => tone(f, t + i * 0.08, 1.2, 0.08));
  }
}

const chords = [
  [261.6, 329.6, 392, 523.3],
  [220, 261.6, 329.6, 440],
  [174.6, 220, 261.6, 349.2],
  [196, 246.9, 293.7, 392],
];

export function startMusic() {
  if (musicTimer) return;
  let bar = 0;
  const play = () => {
    const c = ac();
    const t = c.currentTime + 0.05;
    const ch = chords[bar % chords.length]!;
    tone(ch[0]! / 2, t, 3.8, 0.05, "triangle");
    ch.forEach((f, i) => tone(f, t + i * 0.45, 2.4, 0.035));
    tone(ch[3]! * 2, t + 2.2, 1.6, 0.02);
    bar++;
  };
  play();
  musicTimer = setInterval(play, 3600);
}

export function stopMusic() {
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
}
