import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type UniverseTheme = 'portal' | 'smp' | 'angelical';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  theme?: UniverseTheme;
  loading?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const themeStyles: Record<UniverseTheme, Record<ButtonVariant, string>> = {
  portal: {
    primary: 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg shadow-white/10',
    secondary: 'bg-slate-800 text-white hover:bg-slate-700 border border-slate-700',
    ghost: 'text-slate-300 hover:text-white hover:bg-white/10',
    outline: 'border border-slate-600 text-slate-200 hover:border-slate-400 hover:bg-white/5',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  },
  smp: {
    primary: 'bg-emerald-500 text-emerald-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/25',
    secondary: 'bg-stone-800 text-stone-100 hover:bg-stone-700 border border-stone-600',
    ghost: 'text-emerald-200 hover:text-white hover:bg-emerald-500/10',
    outline: 'border border-emerald-600/50 text-emerald-200 hover:border-emerald-400 hover:bg-emerald-500/10',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  },
  angelical: {
    primary: 'bg-gradient-to-r from-violet-500 to-sky-400 text-white hover:from-violet-400 hover:to-sky-300 shadow-lg shadow-violet-500/25',
    secondary: 'bg-indigo-950/80 text-indigo-100 hover:bg-indigo-900 border border-indigo-700/50',
    ghost: 'text-indigo-200 hover:text-white hover:bg-white/10',
    outline: 'border border-indigo-400/40 text-indigo-100 hover:border-indigo-300 hover:bg-white/5',
    danger: 'bg-red-600 text-white hover:bg-red-500',
  },
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      theme = 'portal',
      loading = false,
      icon,
      children,
      className,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          'active:scale-[0.98]',
          themeStyles[theme][variant],
          sizeStyles[size],
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          icon
        )}
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
