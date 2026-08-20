import { useMemo } from "react";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadStarsPreset } from "@tsparticles/preset-stars";
import type { Engine, ISourceOptions } from "@tsparticles/engine";

async function initStarfield(engine: Engine) {
  await loadStarsPreset(engine);
}

export function HeroBackdrop() {
  const options = useMemo<ISourceOptions>(
    () => ({
      preset: "stars",
      fullScreen: { enable: false },
      background: { color: "transparent" },
      particles: {
        number: {
          value: 110,
          density: { enable: true, width: 1200, height: 800 },
        },
        color: { value: "#ffffff" },
        opacity: {
          value: { min: 0.15, max: 0.85 },
          animation: { enable: true, speed: 0.6, sync: false },
        },
        size: { value: { min: 0.4, max: 1.6 } },
        move: {
          enable: true,
          speed: 0.12,
          direction: "none",
          random: true,
          straight: false,
        },
      },
    }),
    [],
  );

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-glow absolute inset-0" />
      <ParticlesProvider init={initStarfield}>
        <Particles id="hero-stars" options={options} className="absolute inset-0" />
      </ParticlesProvider>
    </div>
  );
}
