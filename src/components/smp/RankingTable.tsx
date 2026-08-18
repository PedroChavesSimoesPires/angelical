import type { PlayerRank } from '@/types';
import { Trophy, Medal } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface RankingTableProps {
  players: PlayerRank[];
}

const podiumStyles = [
  'border-amber-400/50 bg-gradient-to-b from-amber-500/20 to-transparent',
  'border-slate-400/50 bg-gradient-to-b from-slate-400/20 to-transparent',
  'border-orange-600/50 bg-gradient-to-b from-orange-600/20 to-transparent',
];

const podiumEmojis = ['🥇', '🥈', '🥉'];

export function RankingTable({ players }: RankingTableProps) {
  const topThree = players.slice(0, 3);
  const rest = players.slice(3);

  return (
    <div>
      {/* Podium */}
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:items-end">
        {[1, 0, 2].map((index) => {
          const player = topThree[index];
          if (!player) return null;
          const actualRank = index === 0 ? 2 : index === 1 ? 1 : 3;

          return (
            <Card
              key={player.id}
              className={cn(
                'text-center transition-all duration-300 hover:-translate-y-1',
                podiumStyles[actualRank - 1],
                actualRank === 1 && 'sm:order-2 sm:-mt-4',
                actualRank === 2 && 'sm:order-1',
                actualRank === 3 && 'sm:order-3',
              )}
              padding="lg"
            >
              <span className="text-4xl">{podiumEmojis[actualRank - 1]}</span>
              <img
                src={player.avatar}
                alt={player.name}
                className={cn(
                  'mx-auto mt-4 rounded-full bg-stone-800 ring-2',
                  actualRank === 1 ? 'h-24 w-24 ring-amber-400' : 'h-20 w-20 ring-white/20',
                )}
              />
              <h3 className="mt-4 font-display text-xl font-bold text-white">{player.name}</h3>
              <p className="text-sm text-emerald-400">{player.rank}</p>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs text-slate-400">
                <div>
                  <p className="font-bold text-white">{formatNumber(player.coins)}</p>
                  <p>Coins</p>
                </div>
                <div>
                  <p className="font-bold text-white">{player.hoursPlayed}h</p>
                  <p>Horas</p>
                </div>
                <div>
                  <p className="font-bold text-white">Nv. {player.level}</p>
                  <p>Nível</p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Table */}
      <Card padding="none" className="overflow-hidden border-emerald-900/30">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 bg-white/5 text-left text-sm text-slate-400">
                <th className="px-6 py-4 font-medium">#</th>
                <th className="px-6 py-4 font-medium">Jogador</th>
                <th className="px-6 py-4 font-medium">Rank</th>
                <th className="px-6 py-4 font-medium">Coins</th>
                <th className="px-6 py-4 font-medium">Horas</th>
                <th className="px-6 py-4 font-medium">Nível</th>
              </tr>
            </thead>
            <tbody>
              {rest.map((player, index) => (
                <tr
                  key={player.id}
                  className="border-b border-white/5 transition-colors hover:bg-white/5"
                >
                  <td className="px-6 py-4 text-slate-500">{index + 4}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={player.avatar}
                        alt={player.name}
                        className="h-10 w-10 rounded-full bg-stone-800"
                      />
                      <span className="font-medium text-white">{player.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-300">
                      <Medal className="h-3 w-3" />
                      {player.rank}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-emerald-300">{formatNumber(player.coins)}</td>
                  <td className="px-6 py-4 text-slate-300">{player.hoursPlayed}h</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-amber-300">
                      <Trophy className="h-4 w-4" />
                      {player.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
