import { angelicalNews } from '@/data/angelical/mockData';
import { HavenPageShell } from '@/components/haven/HavenPageShell';
import { HavenSection, HavenSectionHeader } from '@/components/haven/HavenSection';
import { HavenNewsCard } from '@/components/haven/HavenNewsCard';

export function AngelicalNewsPage() {
  return (
    <HavenPageShell background="default">
      <HavenSection className="pt-16">
        <HavenSectionHeader
          eyebrow="Ecos do Refúgio"
          title="Notícias"
          description="Sussurros de mudança vagando pelas nuvens."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {angelicalNews.map((news) => (
            <HavenNewsCard key={news.id} news={news} />
          ))}
        </div>
      </HavenSection>
    </HavenPageShell>
  );
}
