import type { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatCurrency, cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
  theme: 'smp' | 'angelical';
  haven?: boolean;
}

export function ProductCard({
  product,
  onAddToCart,
  onViewDetails,
  theme,
  haven = false,
}: ProductCardProps) {
  if (haven) {
    return (
      <article className="haven-glass group overflow-hidden rounded-sm transition-all duration-700 hover:-translate-y-0.5">
        <button
          type="button"
          onClick={() => onViewDetails(product)}
          className="relative block w-full overflow-hidden"
          aria-label={`Ver ${product.name}`}
        >
          <div className="relative h-40 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover opacity-75 transition-all duration-[1.5s] group-hover:scale-[1.04] group-hover:opacity-85"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent" />
            {product.badge && (
              <span className="haven-subtitle absolute left-3 top-3 text-[0.5rem]">{product.badge}</span>
            )}
          </div>
        </button>
        <div className="p-5">
          <span className="haven-subtitle text-[0.55rem]">{product.category}</span>
          <h3 className="mt-2 text-sm text-[#e8edf5]">{product.name}</h3>
          <p className="haven-body mt-2 line-clamp-2 text-xs">{product.description}</p>
          <div className="mt-4 flex items-center justify-between gap-3">
            <span className="text-sm text-[rgba(200,210,230,0.75)]">{formatCurrency(product.price)}</span>
            <button
              onClick={() => onAddToCart(product)}
              className="inline-flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(200,210,230,0.5)] transition-colors duration-500 hover:text-[#e8edf5]"
              aria-label={`Adicionar ${product.name} ao carrinho`}
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Adquirir
            </button>
          </div>
        </div>
      </article>
    );
  }

  return (
    <Card
      hover
      padding="none"
      className={cn(
        'group overflow-hidden',
        theme === 'smp' ? 'border-stone-800 hover:border-emerald-700/50' : 'border-indigo-900 hover:border-violet-500/40',
      )}
    >
      <button
        type="button"
        onClick={() => onViewDetails(product)}
        className="relative block w-full overflow-hidden"
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <div className="relative h-44 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent" />
          {product.badge && (
            <Badge variant={theme === 'smp' ? 'success' : 'featured'} className="absolute left-3 top-3">
              {product.badge}
            </Badge>
          )}
          {product.featured && (
            <Badge variant="warning" className="absolute right-3 top-3">Destaque</Badge>
          )}
        </div>
      </button>
      <div className="p-5">
        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">{product.category}</span>
        <h3 className="mt-1 font-display text-lg font-semibold text-white">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-400">{product.description}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <span className={cn('text-xl font-bold', theme === 'smp' ? 'text-emerald-400' : 'text-violet-300')}>
            {formatCurrency(product.price)}
          </span>
          <Button theme={theme} size="sm" icon={<ShoppingCart className="h-4 w-4" />} onClick={() => onAddToCart(product)}>
            Comprar
          </Button>
        </div>
      </div>
    </Card>
  );
}
