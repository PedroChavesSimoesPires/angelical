import type { NewsItem } from '@/types';
import { Calendar, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { formatDate, cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  news: NewsItem;
  basePath: string;
  theme?: 'smp' | 'angelical';
}

export function NewsCard({ news, basePath, theme = 'smp' }: NewsCardProps) {
  return (
    <Card
      hover
      padding="none"
      className="group overflow-hidden"
      glass
    >
      {news.image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={news.image}
            alt={news.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <Badge
            variant={theme === 'smp' ? 'success' : 'featured'}
            className="absolute left-4 top-4"
          >
            {news.category}
          </Badge>
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <Calendar className="h-4 w-4" />
          {formatDate(news.date)}
        </div>
        <h3 className={cn(
          'mt-3 font-display text-lg font-semibold text-white transition-colors',
          theme === 'smp' ? 'group-hover:text-emerald-300' : 'group-hover:text-violet-300',
        )}>
          {news.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-400">{news.excerpt}</p>
        <Link
          to={`${basePath}/noticias`}
          className={cn(
            'mt-4 inline-flex items-center gap-1 text-sm font-medium',
            theme === 'smp' ? 'text-emerald-400 hover:text-emerald-300' : 'text-violet-300 hover:text-violet-200',
          )}
        >
          Ler mais
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}
