import { siteConfig } from '@/config/site';
import { HavenPageShell } from '@/components/haven/HavenPageShell';
import { HavenSection, HavenSectionHeader } from '@/components/haven/HavenSection';
import { HavenCard } from '@/components/haven/HavenCard';

export function AngelicalAboutPage() {
  return (
    <HavenPageShell background="portal">
      <HavenSection className="pt-16">
        <HavenSectionHeader
          eyebrow="O mundo"
          title="Sobre o Refúgio"
          description="O que existe além do limiar."
        />
        <HavenCard hover={false} className="mx-auto max-w-3xl">
          <h3 className="haven-title text-2xl text-[#e8edf5]">{siteConfig.angelical.name}</h3>
          <p className="haven-body mt-6 text-base leading-relaxed">
            [DESCRIÇÃO DO SERVIDOR] — AngelicSMP é um reino de sobrevivência suspenso em um sonho.
            A arquitetura medieval surge da névoa. Exploradores constroem, vagam e se encontram
            em um mundo que parece antigo e recém-descoberto ao mesmo tempo.
          </p>
          <div className="haven-divider my-10" />
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              { label: 'Modo', value: 'Sobrevivência Multiplayer' },
              { label: 'Versão', value: '[VERSÃO DO MINECRAFT]' },
              { label: 'Endereço', value: siteConfig.angelical.ip ?? siteConfig.smp.ip },
              { label: 'Discord', value: 'Santuário da comunidade' },
            ].map((item) => (
              <div key={item.label}>
                <p className="haven-subtitle text-[0.55rem]">{item.label}</p>
                <p className="mt-2 text-sm text-[#e8edf5]">{item.value}</p>
              </div>
            ))}
          </div>
        </HavenCard>
      </HavenSection>
    </HavenPageShell>
  );
}
