import { useState } from 'react';
import type { FaqItem } from '@/types';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HavenFaqAccordionProps {
  items: FaqItem[];
}

export function HavenFaqAccordion({ items }: HavenFaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className={cn(
              'haven-glass rounded-sm transition-all duration-500',
              isOpen && 'border-[rgba(200,215,240,0.14)]',
            )}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="text-sm text-[#e8edf5]">{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-4 w-4 shrink-0 text-[rgba(200,210,230,0.35)] transition-transform duration-500',
                  isOpen && 'rotate-180',
                )}
              />
            </button>
            <div
              className={cn(
                'overflow-hidden transition-all duration-500',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              <p className="haven-body px-6 pb-5 text-sm">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
