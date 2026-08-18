import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  className,
  hover = false,
  glass = false,
  padding = 'md',
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300',
        glass
          ? 'bg-white/5 backdrop-blur-xl border-white/10'
          : 'bg-slate-900/50 border-slate-800',
        hover && 'hover:border-white/20 hover:shadow-xl hover:-translate-y-1',
        paddingStyles[padding],
        className,
      )}
    >
      {children}
    </div>
  );
}
