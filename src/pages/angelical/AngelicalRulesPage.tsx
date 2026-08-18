import { angelicalRules } from '@/data/angelical/mockData';
import { HavenPageShell } from '@/components/haven/HavenPageShell';
import { HavenSection, HavenSectionHeader } from '@/components/haven/HavenSection';
import { HavenCard } from '@/components/haven/HavenCard';

export function AngelicalRulesPage() {
  return (
    <HavenPageShell background="dream">
      <HavenSection className="pt-16">
        <HavenSectionHeader
          eyebrow="Ordem no silêncio"
          title="Regras"
          description="Orientações para preservar o Refúgio para todos os viajantes."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {angelicalRules.map((rule, index) => (
            <HavenCard key={rule.id} hover={false}>
              <div className="flex gap-5">
                <span className="haven-subtitle shrink-0 text-[0.55rem]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-[#e8edf5]">{rule.title}</h3>
                  <p className="haven-body mt-2 text-sm">{rule.description}</p>
                </div>
              </div>
            </HavenCard>
          ))}
        </div>
      </HavenSection>
    </HavenPageShell>
  );
}
