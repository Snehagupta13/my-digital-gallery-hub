import { useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";

export function useTiltHover(strength = 8) {
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const spring = { stiffness: 300, damping: 30, mass: 0.8 };

  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [strength, -strength]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-strength, strength]), spring);

  function onMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width - 0.5);
    py.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function onMouseLeave() {
    px.set(0);
    py.set(0);
  }

  return {
    style: { rotateX, rotateY, transformPerspective: 800 } as {
      rotateX: MotionValue<number>;
      rotateY: MotionValue<number>;
      transformPerspective: number;
    },
    onMouseMove,
    onMouseLeave,
  };
}
