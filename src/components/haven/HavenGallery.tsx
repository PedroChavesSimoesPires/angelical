import { havenGallery } from '@/data/angelical/havenContent';
import { cn } from '@/lib/utils';

export function HavenGallery() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
      {/* Large feature */}
      <figure
        className={cn(
          'group relative overflow-hidden rounded-sm border border-[rgba(202,221,245,0.12)] shadow-[0_24px_70px_rgba(0,0,0,0.3)] md:col-span-7 md:row-span-2',
          'aspect-[4/3] md:aspect-auto md:min-h-[480px]',
        )}
      >
        <img
          src={havenGallery[0].src}
          alt={havenGallery[0].alt}
          className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/80 via-transparent to-transparent" />
        <figcaption className="absolute bottom-0 left-0 p-6 sm:p-8">
          <p className="haven-subtitle text-[0.65rem]">{havenGallery[0].caption}</p>
        </figcaption>
      </figure>

      {/* Two stacked */}
      {havenGallery.slice(1).map((item, index) => (
        <figure
          key={item.id}
          className={cn(
            'group relative overflow-hidden rounded-sm border border-[rgba(202,221,245,0.1)] shadow-[0_18px_50px_rgba(0,0,0,0.24)] md:col-span-5',
            'aspect-[16/10]',
            index === 1 && 'md:translate-x-4',
          )}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/70 via-[#070b14]/10 to-transparent opacity-80 transition-opacity duration-700 group-hover:opacity-90" />
          <figcaption className="absolute bottom-0 left-0 p-5 sm:p-6">
            <p className="haven-subtitle text-[0.6rem]">{item.caption}</p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
