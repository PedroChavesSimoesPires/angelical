import { smpFaq } from '@/data/smp/mockData';
import { FaqAccordion } from '@/components/ui/FaqAccordion';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function SmpFaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Perguntas Frequentes"
        subtitle="Tire suas dúvidas sobre o servidor Minecraft SMP."
        theme="smp"
      />
      <FaqAccordion items={smpFaq} theme="smp" />
    </div>
  );
}
