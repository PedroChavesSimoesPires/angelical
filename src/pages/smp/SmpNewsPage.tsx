import { smpNews } from '@/data/smp/mockData';
import { NewsCard } from '@/components/ui/NewsCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function SmpNewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Notícias & Atualizações"
        subtitle="Fique por dentro de tudo que acontece no servidor."
        theme="smp"
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {smpNews.map((news) => (
          <NewsCard key={news.id} news={news} basePath="/minecraft" theme="smp" />
        ))}
      </div>
    </div>
  );
}
