import type { CommunityStats, ServerStatus } from '@/types';
import { Clock, Server, Users, Wifi, WifiOff } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { cn, formatNumber } from '@/lib/utils';

interface ServerStatusCardProps {
  status: ServerStatus;
  loading?: boolean;
  theme?: 'smp' | 'angelical';
}

export function ServerStatusCard({ status, loading, theme = 'smp' }: ServerStatusCardProps) {
  return (
    <Card glass className={cn(theme === 'smp' && 'border-emerald-800/30')}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {loading ? (
            <div className="h-3 w-3 animate-pulse rounded-full bg-slate-500" />
          ) : status.online ? (
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
          ) : (
            <WifiOff className="h-5 w-5 text-red-400" />
          )}
          <span className="font-semibold text-white">
            {loading ? 'Verificando...' : status.online ? 'Online' : 'Offline'}
          </span>
        </div>
        {status.online && <Wifi className="h-5 w-5 text-emerald-400" />}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Users className="h-4 w-4" />
            Jogadores
          </div>
          <p className="mt-1 text-2xl font-bold text-emerald-300">
            {loading ? '—' : `${status.playersOnline}/${status.maxPlayers}`}
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Server className="h-4 w-4" />
            Versão
          </div>
          <p className="mt-1 text-2xl font-bold text-white">
            {loading ? '—' : status.version}
          </p>
        </div>
      </div>
    </Card>
  );
}

interface StatItemProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
}

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <Card glass className="text-center border-indigo-700/30">
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-300">
        {icon}
      </div>
      <p className="font-display text-2xl font-bold text-white sm:text-3xl">
        {typeof value === 'number' ? formatNumber(value) : value}
      </p>
      <p className="mt-1 text-sm text-indigo-300/70">{label}</p>
    </Card>
  );
}

export function CommunityStatsGrid({ stats }: { stats: CommunityStats }) {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      <StatItem label="Membros" value={stats.members} icon={<Users className="h-6 w-6" />} />
      <StatItem label="Online agora" value={stats.onlineNow} icon={<Wifi className="h-6 w-6" />} />
      <StatItem label="Eventos realizados" value={stats.eventsHeld} icon={<Clock className="h-6 w-6" />} />
      <StatItem label="Tempo de comunidade" value={stats.communityAge} icon={<Server className="h-6 w-6" />} />
    </div>
  );
}
