import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

const HOVER_SELECTOR = "a, button, [role='button'], input, textarea, select";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      setHovering(!!(e.target as HTMLElement).closest?.(HOVER_SELECTOR));
    };
    const onLeaveWindow = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeaveWindow);
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeaveWindow);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] h-1.5 w-1.5 rounded-full bg-primary"
        style={{ x, y, translate: "-50% -50%", opacity: visible ? 1 : 0 }}
        animate={{ scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full border border-primary"
        style={{ x: ringX, y: ringY, translate: "-50% -50%", opacity: visible ? 1 : 0 }}
        animate={{ width: hovering ? 52 : 30, height: hovering ? 52 : 30 }}
        transition={{ type: "spring", stiffness: 300, damping: 24 }}
      />
    </>
  );
}
