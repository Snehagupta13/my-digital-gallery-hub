import { useEffect, useState } from "react";
import { SparklesCanvas } from "@/components/SparklesCanvas";

export function HeroBackdrop() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-glow absolute inset-0" />
      {mounted && <SparklesCanvas count={160} scale={[10, 5.5, 5]} size={2.4} speed={0.25} />}
    </div>
  );
}
