import type { ReactNode } from 'react';
import { AmbientParticles } from './AmbientParticles';

interface HavenPageShellProps {
  children: ReactNode;
  background?: 'default' | 'portal' | 'dream';
}

const bgImages = {
  default: '/assets/haven/hero-stairs-sky.png',
  portal: '/assets/haven/portal-light.png',
  dream: '/assets/haven/dream-stairs.png',
};

export function HavenPageShell({ children, background = 'default' }: HavenPageShellProps) {
  return (
    <div className="haven-page-shell relative min-h-[60vh] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.2] mix-blend-screen"
        style={{ backgroundImage: `url(${bgImages[background]})` }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(143,176,216,0.12),transparent_48%),linear-gradient(to_bottom,#080d18_0%,rgba(8,13,24,0.93)_28%,#080d18_100%)]" />
      <AmbientParticles count={12} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
