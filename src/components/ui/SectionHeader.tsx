import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  theme?: 'portal' | 'smp' | 'angelical';
  className?: string;
}

const accentStyles = {
  portal: 'from-white to-slate-400',
  smp: 'from-emerald-400 to-lime-300',
  angelical: 'from-violet-300 to-sky-300',
};

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  theme = 'portal',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12',
        align === 'center' && 'text-center',
        className,
      )}
    >
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl',
          'bg-gradient-to-r bg-clip-text text-transparent',
          accentStyles[theme],
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">{subtitle}</p>
      )}
      <div
        className={cn(
          'mt-6 h-1 w-16 rounded-full bg-gradient-to-r',
          accentStyles[theme],
          align === 'center' && 'mx-auto',
        )}
      />
    </div>
  );
}
