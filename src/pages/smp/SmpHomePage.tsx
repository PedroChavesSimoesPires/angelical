import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Award,
  Calendar,
  Coins,
  Copy,
  Gift,
  Map,
  Shield,
  Users,
  Check,
  ExternalLink,
} from 'lucide-react';
import { siteConfig } from '@/config/site';
import { smpFeatures, smpNews, smpEvents } from '@/data/smp/mockData';
import { fetchServerStatus } from '@/services/serverStatus';
import type { ServerStatus } from '@/types';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { ServerStatusCard } from '@/components/ui/Statistics';
import { NewsCard } from '@/components/ui/NewsCard';

const iconMap: Record<string, React.ReactNode> = {
  coins: <Coins className="h-6 w-6" />,
  calendar: <Calendar className="h-6 w-6" />,
  award: <Award className="h-6 w-6" />,
  users: <Users className="h-6 w-6" />,
  shield: <Shield className="h-6 w-6" />,
  map: <Map className="h-6 w-6" />,
  gift: <Gift className="h-6 w-6" />,
};

export function SmpHomePage() {
  const [status, setStatus] = useState<ServerStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchServerStatus().then((data) => {
      setStatus(data);
      setLoading(false);
    });
  }, []);

  const copyIp = async () => {
    await navigator.clipboard.writeText(siteConfig.smp.ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={siteConfig.smp.bannerImage}
            alt="Banner do servidor Minecraft"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-emerald-950/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-emerald-500/20">
                ⛏️ Minecraft Survival
              </span>
              <h1 className="mt-6 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                {siteConfig.smp.name}
              </h1>
              <p className="mt-6 text-lg text-slate-300">{siteConfig.smp.description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button theme="smp" size="lg" onClick={copyIp} icon={copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}>
                  {copied ? 'IP Copiado!' : 'Copiar IP'}
                </Button>
                <a href={siteConfig.smp.discordUrl} target="_blank" rel="noopener noreferrer">
                  <Button theme="smp" variant="outline" size="lg" icon={<ExternalLink className="h-5 w-5" />}>
                    Entrar no Discord
                  </Button>
                </a>
              </div>

              <div className="mt-6 inline-flex items-center gap-3 rounded-xl border border-emerald-800/30 bg-emerald-950/30 px-4 py-3">
                <span className="text-sm text-slate-400">IP do servidor:</span>
                <code className="font-mono text-emerald-300">{siteConfig.smp.ip}</code>
              </div>
            </div>

            <ServerStatusCard status={status ?? { online: false, playersOnline: 0, maxPlayers: 0, version: '—', ip: siteConfig.smp.ip }} loading={loading} />
          </div>
        </div>
      </section>

      {/* Why play */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Por que jogar no nosso SMP?"
            subtitle="Recursos pensados para uma experiência completa de sobrevivência e comunidade."
            theme="smp"
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {smpFeatures.map((feature) => (
              <Card
                key={feature.id}
                hover
                glass
                className="border-emerald-900/20 group"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors group-hover:bg-emerald-500/20">
                  {iconMap[feature.icon]}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="border-t border-emerald-900/20 bg-stone-900/30 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Próximos Eventos" theme="smp" />
          <div className="grid gap-6 md:grid-cols-3">
            {smpEvents.map((event) => (
              <Card key={event.id} hover glass className="border-emerald-900/20">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{event.type}</span>
                <h3 className="mt-2 font-display text-lg font-semibold text-white">{event.title}</h3>
                <p className="mt-2 text-sm text-slate-400">{event.description}</p>
                <p className="mt-4 text-sm text-emerald-300/70">{event.date}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <SectionHeader title="Notícias Recentes" align="left" theme="smp" className="mb-0" />
            <Link to="/minecraft/noticias" className="hidden text-sm text-emerald-400 hover:text-emerald-300 sm:block">
              Ver todas →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {smpNews.slice(0, 3).map((news) => (
              <NewsCard key={news.id} news={news} basePath="/minecraft" theme="smp" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
