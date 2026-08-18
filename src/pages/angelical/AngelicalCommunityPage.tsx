import { angelicalMembers } from '@/data/angelical/mockData';
import { HavenPageShell } from '@/components/haven/HavenPageShell';
import { HavenSection, HavenSectionHeader } from '@/components/haven/HavenSection';
import { HavenCard } from '@/components/haven/HavenCard';
import { formatDate } from '@/lib/utils';

export function AngelicalCommunityPage() {
  return (
    <HavenPageShell background="default">
      <HavenSection className="pt-16">
        <HavenSectionHeader
          eyebrow="Os viajantes"
          title="Comunidade"
          description="Quem encontrou o caminho e escolheu permanecer."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {angelicalMembers.map((member) => (
            <HavenCard key={member.id} className="text-center">
              <img
                src={member.avatar}
                alt={member.name}
                className="mx-auto h-16 w-16 rounded-full opacity-85 ring-1 ring-[rgba(200,215,240,0.12)]"
                loading="lazy"
              />
              <h3 className="mt-4 text-sm text-[#e8edf5]">{member.name}</h3>
              <p className="haven-subtitle mt-1 text-[0.55rem]">{member.role}</p>
              {member.bio && (
                <p className="haven-body mt-3 text-xs">{member.bio}</p>
              )}
              <p className="mt-4 font-mono text-[0.65rem] text-[rgba(200,210,230,0.25)]">
                desde {formatDate(member.joinedAt)}
              </p>
            </HavenCard>
          ))}
        </div>
      </HavenSection>
    </HavenPageShell>
  );
}
