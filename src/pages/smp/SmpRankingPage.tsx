import { smpRanking } from '@/data/smp/mockData';
import { RankingTable } from '@/components/smp/RankingTable';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function SmpRankingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Ranking de Jogadores"
        subtitle="Os maiores aventureiros do nosso servidor. Dados demonstrativos — integração com API em breve."
        theme="smp"
      />
      <RankingTable players={smpRanking} />
    </div>
  );
}
