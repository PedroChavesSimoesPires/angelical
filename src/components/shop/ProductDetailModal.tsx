import { useState } from 'react';
import type { Product } from '@/types';
import { ShoppingCart, X } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatCurrency } from '@/lib/utils';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity?: number) => void;
  theme: 'smp' | 'angelical';
  haven?: boolean;
}

export function ProductDetailModal({
  product,
  onClose,
  onAddToCart,
  theme,
  haven = false,
}: ProductDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    onClose();
  };

  return (
    <Modal isOpen={!!product} onClose={onClose} theme={haven ? 'haven' : theme} size="lg">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
        aria-label="Fechar"
      >
        <X className="h-5 w-5" />
      </button>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover md:h-full"
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant={theme === 'smp' ? 'success' : 'featured'}>{product.category}</Badge>
            {product.badge && <Badge variant="warning">{product.badge}</Badge>}
          </div>
          <h2 className="mt-3 font-display text-2xl font-bold text-white">{product.name}</h2>
          <p className="mt-4 text-slate-400">{product.description}</p>
          <p className="mt-6 text-3xl font-bold text-white">{formatCurrency(product.price)}</p>

          <div className="mt-6 flex items-center gap-4">
            <label className="text-sm text-slate-400">Quantidade:</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="rounded-lg bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              >
                -
              </button>
              <span className="w-8 text-center text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="rounded-lg bg-white/10 px-3 py-1 text-white hover:bg-white/20"
              >
                +
              </button>
            </div>
          </div>

          <Button
            theme={theme}
            size="lg"
            className="mt-6 w-full"
            icon={<ShoppingCart className="h-5 w-5" />}
            onClick={handleAdd}
          >
            Adicionar ao carrinho
          </Button>
        </div>
      </div>
    </Modal>
  );
}
