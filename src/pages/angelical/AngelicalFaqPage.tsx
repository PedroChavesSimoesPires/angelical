import { angelicalFaq } from '@/data/angelical/mockData';
import { HavenPageShell } from '@/components/haven/HavenPageShell';
import { HavenSection, HavenSectionHeader } from '@/components/haven/HavenSection';
import { HavenFaqAccordion } from '@/components/haven/HavenFaqAccordion';

export function AngelicalFaqPage() {
  return (
    <HavenPageShell background="dream">
      <HavenSection className="pt-16">
        <HavenSectionHeader
          eyebrow="Perguntas na névoa"
          title="FAQ"
          description="Respostas para quem ainda está procurando."
        />
        <div className="mx-auto max-w-2xl">
          <HavenFaqAccordion items={angelicalFaq} />
        </div>
      </HavenSection>
    </HavenPageShell>
  );
}
