import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Users } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { UniverseCard } from '@/components/ui/UniverseCard';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);

  const handleHeroPointer = (event: React.PointerEvent<HTMLElement>) => {
    if (event.pointerType === 'touch') return;
    const position = ((event.clientX / window.innerWidth) * 2 - 1) * 10;
    heroRef.current?.style.setProperty('--portal-focus-shift', `${position}px`);
  };

  return (
    <div className="portal-home">
      {/* Hero */}
      <section
        ref={heroRef}
        onPointerMove={handleHeroPointer}
        onPointerLeave={() => heroRef.current?.style.setProperty('--portal-focus-shift', '0px')}
        className="portal-split-hero relative flex min-h-[calc(100svh-73px)] items-center overflow-hidden"
      >
        <div className="portal-world portal-world-minecraft" aria-hidden="true">
          <div className="portal-world-image" style={{ backgroundImage: `url(${siteConfig.smp.bannerImage})` }} />
          <div className="portal-world-shade" />
          <div className="portal-fireflies"><span /><span /><span /><span /><span /></div>
          <div className="portal-world-caption"><span className="portal-kicker">A terra</span><strong>Sobreviva</strong><p>Explore florestas, construa sua história e encontre seu caminho.</p></div>
        </div>
        <div className="portal-world portal-world-angelic" aria-hidden="true">
          <div className="portal-world-image" style={{ backgroundImage: 'url(/assets/haven/hero-stairs-sky.png)' }} />
          <div className="portal-world-shade" />
          <div className="portal-stars"><span /><span /><span /><span /><span /></div>
          <div className="portal-world-caption"><span className="portal-kicker">O céu</span><strong>Pertença</strong><p>Suba além das nuvens e descubra um refúgio entre sonhos.</p></div>
        </div>
        <div className="portal-split-fog" aria-hidden="true" />
        <div className="portal-split-content relative z-10 mx-auto w-full max-w-5xl px-5 py-24 text-center sm:px-8">
          <div className="portal-mark animate-fade-in"><Sparkles className="h-4 w-4" /> Dois mundos, um refúgio</div>
          <p className="portal-split-eyebrow mt-8 animate-fade-in-up">Onde a terra encontra o céu</p>
          <h1 className="portal-split-title mt-3 animate-fade-in-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <span>Angelic</span><em>SMP</em>
          </h1>
          <p className="portal-split-subtitle mx-auto mt-5 max-w-xl animate-fade-in-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Dois universos conectados por uma mesma comunidade.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-fade-in-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <Link to="/minecraft" className="portal-split-button portal-split-button-earth"><ArrowRight className="h-4 w-4" /> Entrar no mundo</Link>
            <Link to="/angelical" className="portal-split-button portal-split-button-sky"><Users className="h-4 w-4" /> Entrar no refúgio</Link>
          </div>
          <div className="portal-server-note mt-10 animate-fade-in-up opacity-0" style={{ animationDelay: '450ms', animationFillMode: 'forwards' }}><span>✦</span> Minecraft · Fantasia · Dreamcore <span>✦</span></div>
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
