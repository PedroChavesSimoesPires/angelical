import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HavenSectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'fog' | 'deep';
}

const variantStyles = {
  default: '',
  fog: 'bg-gradient-to-b from-transparent via-[rgba(100,120,160,0.04)] to-transparent',
  deep: 'bg-[#04060c]',
};

export function HavenSection({
  id,
  children,
  className,
  variant = 'default',
}: HavenSectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-24 sm:py-32', variantStyles[variant], className)}
    >
      <div className="relative mx-auto max-w-6xl px-6 sm:px-8">{children}</div>
    </section>
  );
}

interface HavenSectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export function HavenSectionHeader({
  eyebrow,
  title,
  description,
  align = 'center',
}: HavenSectionHeaderProps) {
  return (
    <header className={cn('mb-16', align === 'center' && 'text-center')}>
      {eyebrow && (
        <p className="haven-subtitle mb-4">{eyebrow}</p>
      )}
      <h2 className="haven-title text-3xl text-[#e8edf5] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="haven-body mx-auto mt-6 max-w-xl text-base">{description}</p>
      )}
      <div className={cn('haven-divider mt-8 w-24', align === 'center' && 'mx-auto')} />
    </header>
  );
}
