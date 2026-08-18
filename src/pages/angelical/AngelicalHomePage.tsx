import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { angelicalStats, angelicalMembers } from '@/data/angelical/mockData';
import { havenLore, havenIntro, havenFeatures, havenDiscord } from '@/data/angelical/havenContent';
import { fetchServerStatus } from '@/services/serverStatus';
import type { ServerStatus } from '@/types';
import { HavenHero } from '@/components/haven/HavenHero';
import { HavenSection, HavenSectionHeader } from '@/components/haven/HavenSection';
import { HavenCard } from '@/components/haven/HavenCard';
import { HavenGallery } from '@/components/haven/HavenGallery';
import { formatNumber } from '@/lib/utils';

export function AngelicalHomePage() {
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
    const ip = siteConfig.angelical.ip ?? siteConfig.smp.ip;
    await navigator.clipboard.writeText(ip);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const serverIp = siteConfig.angelical.ip ?? siteConfig.smp.ip;

  return (
    <div className="haven-home">
      <HavenHero />
      <HavenSection id="world" variant="fog">
        <HavenSectionHeader eyebrow={havenIntro.eyebrow} title={havenIntro.title} description={havenIntro.description} />
        <div className="mx-auto max-w-2xl text-center"><p className="haven-body text-base leading-relaxed sm:text-lg">Você encontrou um servidor que não anuncia sua existência. Ele espera no espaço entre o sono e o despertar — para quem sabe olhar para cima.</p></div>
      </HavenSection>
      <HavenSection variant="deep">
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-[0.07]" style={{ backgroundImage: 'url(/assets/haven/dream-stairs.png)' }} aria-hidden="true" />
          <p className="haven-subtitle mb-8">Fragmento de memória</p>
          <blockquote className="haven-title text-2xl leading-relaxed text-[rgba(200,210,230,0.75)] sm:text-3xl md:text-4xl">&ldquo;{havenLore.quote}&rdquo;</blockquote>
          <div className="haven-divider mx-auto my-10 w-16" />
          {havenLore.paragraphs.map((paragraph, index) => <p key={index} className="haven-body mb-6 text-base last:mb-0">{paragraph}</p>)}
          <p className="mt-12 font-mono text-xs lowercase tracking-wide text-[rgba(200,210,230,0.25)]">{havenLore.whisper}</p>
        </div>
      </HavenSection>
      <HavenSection>
        <HavenSectionHeader eyebrow="O reino" title="O que espera por você" description="Minecraft, envolto em silêncio e luz das estrelas." />
        <div className="grid gap-5 sm:grid-cols-2">{havenFeatures.map((feature, index) => <HavenCard key={feature.id} className="haven-fade-up opacity-0" style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' } as React.CSSProperties}><span className="haven-subtitle text-[0.6rem]">0{index + 1}</span><h3 className="haven-title mt-3 text-xl text-[#e8edf5]">{feature.title}</h3><p className="haven-body mt-3 text-sm">{feature.description}</p></HavenCard>)}</div>
      </HavenSection>
      <HavenSection variant="fog"><HavenSectionHeader eyebrow="Visões" title="Fragmentos do Refúgio" description="Vislumbres de um lugar que só existe quando você para de procurar." /><HavenGallery /></HavenSection>
      <HavenSection id="server">
        <HavenSectionHeader eyebrow="Conexão" title="Encontre o servidor" description="O caminho está aberto. O IP é a chave." />
        <div className="mx-auto grid max-w-3xl gap-5 sm:grid-cols-2">
          <HavenCard hover={false} className="sm:col-span-2"><div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between"><div className="text-center sm:text-left"><p className="haven-subtitle text-[0.6rem]">Endereço do servidor</p><p className="mt-2 font-mono text-lg text-[#e8edf5] sm:text-xl">{serverIp}</p></div><button onClick={copyIp} className="flex items-center gap-2 rounded-sm border border-[rgba(200,215,240,0.12)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#e8edf5] transition-all duration-500 hover:border-[rgba(200,215,240,0.25)] hover:bg-[rgba(255,255,255,0.03)]">{copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}{copied ? 'Copiado' : 'Copiar IP'}</button></div></HavenCard>
          <HavenCard hover={false}><p className="haven-subtitle text-[0.6rem]">Status</p><div className="mt-3 flex items-center gap-3">{loading ? <span className="h-2 w-2 animate-pulse rounded-full bg-[rgba(200,210,230,0.3)]" /> : status?.online ? <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgba(180,200,230,0.5)] opacity-75" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[rgba(180,200,230,0.8)]" /></span> : <span className="h-2 w-2 rounded-full bg-red-400/60" />}<span className="text-sm text-[#e8edf5]">{loading ? 'Verificando...' : status?.online ? 'Online' : 'Offline'}</span></div></HavenCard>
          <HavenCard hover={false}><p className="haven-subtitle text-[0.6rem]">Jogadores</p><p className="mt-3 text-2xl text-[#e8edf5]">{loading ? '—' : `${status?.playersOnline ?? 0} / ${status?.maxPlayers ?? 0}`}</p></HavenCard>
        </div>
      </HavenSection>
      <HavenSection variant="deep">
        <HavenSectionHeader eyebrow="Os viajantes" title="Comunidade" description="Quem escolheu ficar." />
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">{[{ label: 'Membros', value: formatNumber(angelicalStats.members) }, { label: 'Online agora', value: formatNumber(angelicalStats.onlineNow) }, { label: 'Eventos realizados', value: formatNumber(angelicalStats.eventsHeld) }, { label: 'Desde', value: angelicalStats.communityAge }].map((stat) => <HavenCard key={stat.label} className="text-center"><p className="haven-title text-2xl text-[#e8edf5] sm:text-3xl">{stat.value}</p><p className="haven-subtitle mt-2 text-[0.55rem]">{stat.label}</p></HavenCard>)}</div>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">{angelicalMembers.slice(0, 3).map((member) => <HavenCard key={member.id} className="flex items-center gap-4"><img src={member.avatar} alt={member.name} className="h-12 w-12 rounded-full opacity-80 ring-1 ring-[rgba(200,215,240,0.1)]" loading="lazy" /><div><p className="text-sm text-[#e8edf5]">{member.name}</p><p className="haven-subtitle text-[0.55rem]">{member.role}</p></div></HavenCard>)}</div>
        <div className="mt-10 text-center"><Link to="/angelical/comunidade" className="text-xs uppercase tracking-[0.2em] text-[rgba(200,210,230,0.45)] transition-colors duration-500 hover:text-[rgba(200,210,230,0.75)]">Conheça a comunidade →</Link></div>
      </HavenSection>
      <HavenSection><div className="relative overflow-hidden rounded-sm"><div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/assets/haven/portal-light.png)' }} aria-hidden="true" /><div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/90 via-[#070b14]/80 to-[#070b14]/90" /><div className="relative px-8 py-20 text-center sm:px-16 sm:py-24"><p className="haven-subtitle">{havenDiscord.eyebrow}</p><h2 className="haven-title mt-6 text-3xl text-[#e8edf5] sm:text-4xl">{havenDiscord.title}</h2><p className="haven-body mx-auto mt-6 max-w-md">{havenDiscord.description}</p><a href={siteConfig.angelical.discordUrl} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex items-center gap-2 rounded-sm border border-[rgba(200,215,240,0.15)] bg-[rgba(12,18,32,0.6)] px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-[#e8edf5] backdrop-blur-sm transition-all duration-700 hover:border-[rgba(200,215,240,0.3)] hover:bg-[rgba(18,26,44,0.7)]">{havenDiscord.cta}<ExternalLink className="h-4 w-4 opacity-50" /></a></div></div></HavenSection>
    </div>
  );
}
