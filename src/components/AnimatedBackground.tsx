import { useMemo } from "react";
import "../styles/AnimatedBackground.css";

type BlobDef = {
  top: string;
  left: string;
  size: number;
  blur: number;
  opacity: number;
  bg: string;
  anim: string;
  duration: number;
  delay: number;
};

const gradients: string[][] = [
  ["#4F46E5", "#6366F1", "#0EA5E9"], 
  ["#9333EA", "#14B8A6"],            
  ["#6366F1", "#4F46E5"],
  ["#14B8A6", "#0EA5E9"],
];

const makeRadial = (c: string[]) =>
  c.length === 3
    ? `radial-gradient(circle, ${c[0]} 0%, ${c[1]} 40%, ${c[2]} 100%)`
    : `radial-gradient(circle, ${c[0]} 0%, ${c[1]} 100%)`;

const AnimatedBackground = ({ count = 3 }: { count?: number }) => {
  const blobs = useMemo<BlobDef[]>(() => {
    const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
    const anims = ["animate-float-slow", "animate-float-slow-delayed", "animate-float-gentle"];

    return Array.from({ length: count }).map(() => {
      const size = Math.round(rnd(380, 720));
      return {
        top: `${Math.round(rnd(5, 75))}%`,
        left: `${Math.round(rnd(5, 80))}%`,
        size,
        blur: Math.round(size * rnd(0.18, 0.26)),
        opacity: +rnd(0.18, 0.32).toFixed(2),
        bg: makeRadial(gradients[Math.floor(rnd(0, gradients.length))]),
        anim: anims[Math.floor(rnd(0, anims.length))],
        duration: Math.round(rnd(18, 32)),
        delay: Math.round(rnd(0, 8)),
      };
    });
  }, [count]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#0A0A0F]">
      {blobs.map((b, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${b.anim}`}
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            filter: `blur(${b.blur}px)`,
            opacity: b.opacity,
            background: b.bg,
            animationDuration: `${b.duration}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;