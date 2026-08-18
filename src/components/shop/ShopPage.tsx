import { useState, useMemo } from 'react';
import type { Product } from '@/types';
import { Search, ShoppingBag } from 'lucide-react';
import { ProductCard } from '@/components/shop/ProductCard';
import { ProductDetailModal } from '@/components/shop/ProductDetailModal';
import { CartDrawer } from '@/components/shop/CartDrawer';
import { CheckoutModal } from '@/components/shop/CheckoutModal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { HavenSectionHeader } from '@/components/haven/HavenSection';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

interface ShopPageProps {
  products: Product[];
  categories: string[];
  theme: 'smp' | 'angelical';
  universe: 'smp' | 'angelical';
  title: string;
  subtitle: string;
  haven?: boolean;
}

export function ShopPage({
  products,
  categories,
  theme,
  universe,
  title,
  subtitle,
  haven = false,
}: ShopPageProps) {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [search, setSearch] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const { addItem, toggleCart, itemCount } = useCart();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = activeCategory === 'Todos' || product.category === activeCategory;
      const matchesSearch =
        search === '' ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, activeCategory, search]);

  return (
    <div className="relative">
      <section
        className={cn(
          'relative overflow-hidden py-16 sm:py-20',
          !haven && 'border-b border-white/10',
        )}
      >
        {!haven && (
          <div
            className={cn(
              'absolute inset-0 opacity-30',
              theme === 'smp'
                ? 'bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.15),transparent_60%)]'
                : 'bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]',
            )}
          />
        )}
        <div className="relative mx-auto max-w-6xl px-6 sm:px-8">
          {haven ? (
            <HavenSectionHeader title={title} description={subtitle} eyebrow="Oferendas" />
          ) : (
            <SectionHeader title={title} subtitle={subtitle} theme={theme} />
          )}
          <div className="mt-8 flex justify-center">
            {haven ? (
              <button
                onClick={toggleCart}
                className="inline-flex items-center gap-2 rounded-sm border border-[rgba(200,215,240,0.12)] px-6 py-3 text-xs uppercase tracking-[0.2em] text-[#e8edf5] transition-all duration-500 hover:border-[rgba(200,215,240,0.25)] hover:bg-[rgba(255,255,255,0.03)]"
              >
                <ShoppingBag className="h-4 w-4 opacity-60" />
                Carrinho ({itemCount})
              </button>
            ) : (
              <Button
                theme={theme}
                variant="outline"
                icon={<ShoppingBag className="h-4 w-4" />}
                onClick={toggleCart}
              >
                Carrinho ({itemCount})
              </Button>
            )}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-500',
                  haven ? 'rounded-sm' : 'rounded-full text-sm font-medium',
                  activeCategory === category
                    ? haven
                      ? 'border border-[rgba(200,215,240,0.2)] bg-[rgba(255,255,255,0.05)] text-[#e8edf5]'
                      : theme === 'smp'
                        ? 'bg-emerald-500 text-emerald-950'
                        : 'bg-violet-500 text-white'
                    : haven
                      ? 'border border-transparent text-[rgba(200,210,230,0.4)] hover:text-[rgba(200,210,230,0.7)]'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white',
                )}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative">
            <Search
              className={cn(
                'absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2',
                haven ? 'text-[rgba(200,210,230,0.3)]' : 'text-slate-500',
              )}
            />
            <input
              type="search"
              placeholder={haven ? 'Buscar oferendas...' : 'Buscar produtos...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={cn(
                'w-full py-2.5 pl-10 pr-4 text-sm focus:outline-none sm:w-64',
                haven
                  ? 'rounded-sm border border-[rgba(200,215,240,0.08)] bg-[rgba(12,18,32,0.4)] text-[#e8edf5] placeholder:text-[rgba(200,210,230,0.25)] focus:border-[rgba(200,215,240,0.2)]'
                  : 'rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-white/30 focus:ring-1 focus:ring-white/20',
              )}
              aria-label="Buscar produtos"
            />
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="mt-16 text-center">
            <ShoppingBag className={cn('mx-auto h-12 w-12', haven ? 'text-[rgba(200,210,230,0.15)]' : 'text-slate-600')} />
            <p className={cn('mt-4', haven ? 'haven-body text-sm' : 'text-lg text-slate-400')}>
              {haven ? 'Nada foi encontrado na névoa.' : 'Nenhum produto encontrado'}
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                theme={theme}
                haven={haven}
                onAddToCart={addItem}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        )}
      </div>

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addItem}
        theme={theme}
        haven={haven}
      />
      <CartDrawer theme={theme} haven={haven} onCheckout={() => setCheckoutOpen(true)} />
      <CheckoutModal
        isOpen={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
        theme={theme}
        universe={universe}
        haven={haven}
      />
    </div>
  );
}
