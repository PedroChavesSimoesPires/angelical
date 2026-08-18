import { useMemo } from 'react';

interface Particle {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
}

export function AmbientParticles({ count = 24 }: { count?: number }) {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${8 + Math.random() * 84}%`,
      top: `${5 + Math.random() * 90}%`,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 12,
      duration: 14 + Math.random() * 10,
    }));
  }, [count]);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-white/30 haven-drift motion-reduce:hidden"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            boxShadow: '0 0 6px 1px rgba(220, 235, 255, 0.15)',
          }}
        />
      ))}
    </div>
  );
}
