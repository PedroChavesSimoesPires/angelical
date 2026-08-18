import { useState } from 'react';
import type { FaqItem } from '@/types';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FaqAccordionProps {
  items: FaqItem[];
  theme?: 'smp' | 'angelical';
}

export function FaqAccordion({ items, theme = 'smp' }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'rounded-xl border transition-colors',
              theme === 'smp'
                ? 'border-emerald-900/30 bg-stone-900/50'
                : 'border-indigo-800/30 bg-indigo-900/30',
              isOpen && (theme === 'smp' ? 'border-emerald-700/50' : 'border-violet-600/50'),
            )}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-medium text-white">{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-200',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <p className="px-6 pb-4 text-slate-400">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
