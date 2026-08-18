import type { ReactNode, CSSProperties } from 'react';
import { cn } from '@/lib/utils';

interface HavenCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export function HavenCard({ children, className, hover = true, style }: HavenCardProps) {
  return (
    <div
      className={cn(
        'haven-glass rounded-sm p-6 sm:p-8 transition-all duration-700',
        hover && 'hover:-translate-y-0.5',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
