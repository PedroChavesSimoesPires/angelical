import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { AmbientParticles } from './AmbientParticles';

export function HavenHero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden border-b border-[rgba(202,221,245,0.08)]">
      {/* Background */}
      <div
        className="absolute inset-0 haven-parallax-bg bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/haven/hero-stairs-sky.png)' }}
        role="img"
        aria-label="Celestial stairs ascending through clouds"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#080d18]/25 via-[#080d18]/55 to-[#080d18]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#03060c] via-transparent to-[#080d18]/35" />
      <div className="haven-cloud-bank" aria-hidden="true" />

      <div className="haven-aurora haven-shimmer pointer-events-none absolute -left-1/4 top-1/4 h-1/2 w-[150%]" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(72vw,44rem)] w-[min(72vw,44rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-40" aria-hidden="true" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[min(58vw,36rem)] w-[min(58vw,36rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.06] opacity-50" aria-hidden="true" />

      {/* Atmospheric glow */}
      <div
        className="absolute right-[12%] top-[8%] h-32 w-32 rounded-full bg-white/5 blur-3xl haven-glow-pulse motion-reduce:opacity-50"
        aria-hidden="true"
      />

      <AmbientParticles count={20} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28 text-center">
        <div className="mb-10 flex items-center justify-center gap-4 text-[0.58rem] uppercase tracking-[0.38em] text-[rgba(205,217,234,0.42)]">
          <span className="h-px w-10 bg-[rgba(205,217,234,0.25)]" />
          <span>Mundo 01 · O lado silencioso</span>
          <span className="h-px w-10 bg-[rgba(205,217,234,0.25)]" />
        </div>
        <p className="haven-subtitle haven-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Entre no refúgio
        </p>

        <h1
          className="mt-8 haven-fade-up opacity-0"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          <span className="haven-title block text-5xl text-[#edf2f8] drop-shadow-[0_0_30px_rgba(205,225,255,0.18)] sm:text-7xl md:text-8xl lg:text-9xl">
            AngelicSMP
          </span>
          <span className="mt-3 block font-sans text-[0.68rem] font-medium uppercase tracking-[0.62em] text-[rgba(205,217,234,0.58)] sm:text-sm">
            SMP
          </span>
        </h1>

        <p
          className="haven-body mx-auto mt-10 max-w-md text-sm tracking-wide sm:text-base haven-fade-up opacity-0"
          style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
        >
          Um mundo entre sonhos, esperando acima das nuvens
        </p>

        <div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center haven-fade-up opacity-0"
          style={{ animationDelay: '1.1s', animationFillMode: 'forwards' }}
        >
          <a
            href="#world"
            className="group relative overflow-hidden rounded-sm border border-[rgba(200,215,240,0.15)] bg-[rgba(12,18,32,0.5)] px-8 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-[#e8edf5] backdrop-blur-sm transition-all duration-700 hover:border-[rgba(200,215,240,0.3)] hover:bg-[rgba(18,26,44,0.6)]"
          >
            <span className="relative z-10">Começar a jornada</span>
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
          </a>
          <Link
            to="/angelical/comunidade"
            className="text-xs uppercase tracking-[0.2em] text-[rgba(200,210,230,0.45)] transition-colors duration-500 hover:text-[rgba(200,210,230,0.75)]"
          >
            Explorar o reino
          </Link>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#world"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[rgba(200,210,230,0.35)] transition-colors duration-500 hover:text-[rgba(200,210,230,0.6)] motion-reduce:hidden"
        aria-label="Scroll to explore"
      >
        <span className="text-[0.5rem] uppercase tracking-[0.35em]">Descer</span>
        <ChevronDown className="h-6 w-6 animate-[havenFloat_3s_ease-in-out_infinite]" />
      </a>
    </section>
  );
}
