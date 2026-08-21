import { motion } from "motion/react";

function Letter({
  char,
  delay,
  className = "",
}: {
  char: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.span
      className={`inline-block will-change-transform ${className}`}
      style={{ transformPerspective: 400 }}
      initial={{ opacity: 0, y: 24, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      whileHover={{ rotateY: 18, rotateX: -8, scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        opacity: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        y: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        rotateX: { delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
        rotateY: { type: "spring", stiffness: 300, damping: 15 },
        scale: { type: "spring", stiffness: 300, damping: 15 },
      }}
    >
      {char === " " ? " " : char}
    </motion.span>
  );
}

export function AnimatedName({
  first,
  last,
  startDelay = 0.5,
  step = 0.045,
}: {
  first: string;
  last: string;
  startDelay?: number;
  step?: number;
}) {
  return (
    <>
      {first.split("").map((char, i) => (
        <Letter key={`f-${i}`} char={char} delay={startDelay + i * step} />
      ))}
      <br />
      {last.split("").map((char, i) => (
        <Letter
          key={`l-${i}`}
          char={char}
          delay={startDelay + (first.length + i) * step}
          className="text-primary"
        />
      ))}
    </>
  );
}
