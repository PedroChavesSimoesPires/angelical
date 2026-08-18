import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  theme?: 'portal' | 'smp' | 'angelical' | 'haven';
}

const sizeStyles = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
  xl: 'max-w-4xl',
};

const themeStyles: Record<string, string> = {
  portal: 'bg-slate-900 border-slate-700',
  smp: 'bg-stone-900 border-emerald-800/50',
  angelical: 'bg-indigo-950 border-indigo-700/50',
  haven: 'bg-[#0a0f1a] border-[rgba(200,215,240,0.1)] rounded-sm',
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  theme = 'portal',
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={cn(
          'relative w-full rounded-2xl border shadow-2xl animate-fade-in-up',
          sizeStyles[size],
          themeStyles[theme],
        )}
      >
        {title && (
          <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
            <h2 id="modal-title" className="text-lg font-semibold text-white">
              {title}
            </h2>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Fechar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className={title ? 'p-6' : 'p-6'}>{children}</div>
      </div>
    </div>
  );
}
