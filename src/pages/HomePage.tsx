import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { UniverseCard } from '@/components/ui/UniverseCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

export function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(139,92,246,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-300 backdrop-blur-sm animate-fade-in">
              <Sparkles className="h-4 w-4 text-violet-400" />
              Dois universos, uma comunidade
            </div>

            <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              {siteConfig.projectName}
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 sm:text-xl animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Escolha seu universo e faça parte de uma comunidade feita para jogadores e amigos.
              Sobrevivência épica no Minecraft ou um refúgio celestial no AngelicSMP.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
              <Link to="/minecraft">
                <Button theme="portal" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                  Minecraft SMP
                </Button>
              </Link>
              <Link to="/angelical">
                <Button theme="portal" variant="outline" size="lg" icon={<Users className="h-5 w-5" />}>
                  AngelicSMP
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Universe cards */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Escolha seu universo"
            subtitle="Cada servidor tem sua identidade, páginas e loja — tudo conectado em um só portal."
            theme="portal"
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <UniverseCard
              title="Minecraft SMP"
              description={siteConfig.smp.description}
              buttonText="ENTRAR NO SMP"
              to="/minecraft"
              variant="smp"
              delay={100}
            />
            <UniverseCard
              title="AngelicSMP"
              description={siteConfig.angelical.description}
              buttonText="ENTRAR NO REFÚGIO"
              to="/angelical"
              variant="angelical"
              delay={200}
            />
          </div>
        </div>
      </section>

      {/* Features preview */}
      <section className="border-t border-slate-800 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Uma plataforma completa"
            subtitle="Lojas independentes, rankings, notícias, regras e muito mais — tudo preparado para crescer."
            theme="portal"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: 'Lojas', desc: 'Carrinho, checkout e produtos por universo' },
              { title: 'Comunidade', desc: 'Ranking, membros e estatísticas' },
              { title: 'Conteúdo', desc: 'Notícias, eventos e FAQ' },
              { title: 'Integrações', desc: 'Pronto para APIs e pagamentos' },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 transition-all hover:border-slate-700 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
