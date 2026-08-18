import { smpRules } from '@/data/smp/mockData';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cn } from '@/lib/utils';
import { AlertTriangle, Info, ShieldAlert } from 'lucide-react';

const severityStyles = {
  critical: 'border-red-500/30 bg-red-950/20',
  warning: 'border-amber-500/30 bg-amber-950/20',
  info: 'border-blue-500/30 bg-blue-950/20',
};

const severityIcons = {
  critical: <ShieldAlert className="h-5 w-5 text-red-400" />,
  warning: <AlertTriangle className="h-5 w-5 text-amber-400" />,
  info: <Info className="h-5 w-5 text-blue-400" />,
};

export function SmpRulesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeader
        title="Regras do Servidor"
        subtitle="Leia atentamente antes de jogar. O descumprimento pode resultar em punições."
        theme="smp"
      />

      <div className="space-y-4">
        {smpRules.map((rule, index) => (
          <div
            key={rule.id}
            className={cn(
              'flex gap-4 rounded-xl border p-6 transition-all hover:-translate-y-0.5',
              severityStyles[rule.severity ?? 'info'],
            )}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
              {severityIcons[rule.severity ?? 'info']}
            </div>
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-slate-500">#{index + 1}</span>
                <h3 className="font-semibold text-white">{rule.title}</h3>
              </div>
              <p className="mt-2 text-slate-400">{rule.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
