import { Canvas } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";

export function SparklesCanvas({
  count = 150,
  scale = [10, 6, 5],
  size = 2.2,
  speed = 0.25,
  color = "#ffffff",
  opacity = 0.8,
  className = "absolute inset-0",
}: {
  count?: number;
  scale?: [number, number, number];
  size?: number;
  speed?: number;
  color?: string;
  opacity?: number;
  className?: string;
}) {
  return (
    <Canvas
      className={className}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
    >
      <Sparkles
        count={count}
        scale={scale}
        size={size}
        speed={speed}
        noise={1}
        color={color}
        opacity={opacity}
      />
    </Canvas>
  );
}
