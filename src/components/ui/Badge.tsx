import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'featured';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold',
        variant === 'default' && 'bg-slate-700 text-slate-200',
        variant === 'success' && 'bg-emerald-500/20 text-emerald-300',
        variant === 'warning' && 'bg-amber-500/20 text-amber-300',
        variant === 'featured' && 'bg-violet-500/20 text-violet-300',
        className,
      )}
    >
      {children}
    </span>
  );
}
