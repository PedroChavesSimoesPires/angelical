import { siteConfig } from '@/config/site';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';

export function SmpAboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Sobre o Servidor"
        subtitle="Conheça mais sobre nossa comunidade de sobrevivência."
        theme="smp"
      />

      <Card glass className="border-emerald-900/20 space-y-6">
        <div>
          <h3 className="font-display text-xl font-semibold text-white">{siteConfig.smp.name}</h3>
          <p className="mt-4 text-slate-400 leading-relaxed">
            [DESCRIÇÃO DO SERVIDOR] — Um servidor Minecraft Survival focado em comunidade,
            exploração e construção. Aqui você encontra um ambiente acolhedor para viver
            grandes aventuras com outros jogadores.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-emerald-950/30 p-5 border border-emerald-900/20">
            <h4 className="font-semibold text-emerald-300">Modalidade</h4>
            <p className="mt-2 text-sm text-slate-400">Survival Multiplayer (SMP)</p>
          </div>
          <div className="rounded-xl bg-emerald-950/30 p-5 border border-emerald-900/20">
            <h4 className="font-semibold text-emerald-300">Versão</h4>
            <p className="mt-2 text-sm text-slate-400">[VERSÃO DO MINECRAFT]</p>
          </div>
          <div className="rounded-xl bg-emerald-950/30 p-5 border border-emerald-900/20">
            <h4 className="font-semibold text-emerald-300">IP</h4>
            <p className="mt-2 text-sm font-mono text-slate-400">{siteConfig.smp.ip}</p>
          </div>
          <div className="rounded-xl bg-emerald-950/30 p-5 border border-emerald-900/20">
            <h4 className="font-semibold text-emerald-300">Discord</h4>
            <p className="mt-2 text-sm text-slate-400">Comunidade ativa no Discord</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
