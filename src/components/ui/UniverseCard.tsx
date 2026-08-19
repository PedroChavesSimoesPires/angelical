import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UniverseCardProps {
  title: string;
  description: string;
  buttonText: string;
  to: string;
  variant: 'smp' | 'angelical';
  delay?: number;
}

export function UniverseCard({
  title,
  description,
  buttonText,
  to,
  variant,
  delay = 0,
}: UniverseCardProps) {
  const isSmp = variant === 'smp';

  return (
    <Link
      to={to}
      className={cn(
        'group relative overflow-hidden rounded-3xl border p-8 transition-all duration-500',
        'hover:-translate-y-2 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2',
        'animate-fade-in-up opacity-0',
        isSmp
          ? 'border-emerald-800/40 bg-gradient-to-br from-stone-900 via-emerald-950/80 to-stone-950 hover:border-emerald-500/50 hover:shadow-emerald-500/10 focus-visible:ring-emerald-500'
          : 'border-white/20 bg-gradient-to-br from-zinc-950 via-zinc-800/90 to-black hover:border-white/50 hover:shadow-black/40 focus-visible:ring-white',
      )}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {/* Background pattern */}
      <div
        className={cn(
          'absolute inset-0 opacity-20 transition-opacity duration-500 group-hover:opacity-30',
          isSmp
            ? 'bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.3),transparent_50%)]'
            : 'bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_48%),radial-gradient(circle_at_25%_80%,rgba(0,0,0,0.38),transparent_55%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(0,0,0,0.24))]',
        )}
      />

      {/* Decorative elements */}
      {isSmp ? (
        <div className="absolute -right-4 -top-4 h-32 w-32 rounded-lg bg-emerald-500/10 rotate-12 transition-transform duration-500 group-hover:rotate-45" />
      ) : (
        <>
          <Sparkles className="absolute right-6 top-6 h-6 w-6 text-white/60 animate-twinkle" />
          <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        </>
      )}

      <div className="relative z-10">
        <div
          className={cn(
            'mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-bold',
            isSmp
              ? 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30'
              : 'bg-white/10 text-white ring-1 ring-white/30',
          )}
        >
          {isSmp ? '⛏️' : '✨'}
        </div>

        <h3
          className={cn(
            'font-display text-2xl font-bold sm:text-3xl',
            isSmp ? 'text-emerald-100' : 'text-white',
          )}
        >
          {title}
        </h3>

        <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>

        <div
          className={cn(
            'mt-8 inline-flex items-center gap-2 font-semibold transition-all duration-300',
            'group-hover:gap-3',
            isSmp ? 'text-emerald-400' : 'text-white/85',
          )}
        >
          {buttonText}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
