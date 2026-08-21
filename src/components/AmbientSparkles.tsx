import { useEffect, useState } from "react";
import { SparklesCanvas } from "@/components/SparklesCanvas";

export function AmbientSparkles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <SparklesCanvas count={130} scale={[9, 5, 5]} size={2} speed={0.2} opacity={0.7} />
    </div>
  );
}
