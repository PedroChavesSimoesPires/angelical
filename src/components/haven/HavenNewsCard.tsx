import type { NewsItem } from '@/types';
import { formatDate } from '@/lib/utils';

interface HavenNewsCardProps {
  news: NewsItem;
}

export function HavenNewsCard({ news }: HavenNewsCardProps) {
  return (
    <article className="haven-glass group overflow-hidden rounded-sm transition-all duration-700 hover:-translate-y-0.5">
      {news.image && (
        <div className="relative h-44 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover opacity-80 transition-all duration-[1.5s] group-hover:scale-[1.03] group-hover:opacity-90"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
          <span className="haven-subtitle absolute left-4 top-4 text-[0.55rem]">
            {news.category}
          </span>
        </div>
      )}
      <div className="p-6">
        <time className="font-mono text-[0.65rem] text-[rgba(200,210,230,0.3)]">
          {formatDate(news.date)}
        </time>
        <h3 className="mt-3 text-sm text-[#e8edf5] transition-colors duration-500 group-hover:text-[rgba(200,210,230,0.9)]">
          {news.title}
        </h3>
        <p className="haven-body mt-2 line-clamp-2 text-xs">{news.excerpt}</p>
      </div>
    </article>
  );
}
