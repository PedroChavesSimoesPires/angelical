import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { formatCurrency, cn } from '@/lib/utils';

interface CartDrawerProps {
  theme: 'smp' | 'angelical';
  onCheckout: () => void;
  haven?: boolean;
}

export function CartDrawer({ theme, onCheckout, haven = false }: CartDrawerProps) {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, itemCount } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Carrinho">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={cn(
          'relative flex h-full w-full max-w-md flex-col border-l shadow-2xl animate-fade-in-up',
          haven
            ? 'bg-[#070b14] border-[rgba(200,215,240,0.08)]'
            : theme === 'smp'
              ? 'bg-stone-950 border-emerald-900/50'
              : 'bg-indigo-950 border-violet-800/50',
        )}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-white" />
            <h2 className={cn('font-semibold text-white', haven ? 'haven-subtitle text-[0.65rem]' : 'text-lg')}>
              {haven ? `Cart (${itemCount})` : `Carrinho (${itemCount})`}
            </h2>
          </div>
          <button
            onClick={closeCart}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 hover:text-white"
            aria-label="Fechar carrinho"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="h-16 w-16 text-slate-600" />
              <p className="mt-4 text-lg font-medium text-slate-400">Carrinho vazio</p>
              <p className="mt-2 text-sm text-slate-500">
                Adicione produtos da loja para continuar.
              </p>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.product.id}
                  className="flex gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="truncate font-medium text-white">{item.product.name}</h3>
                    <p className="text-sm text-slate-400">{formatCurrency(item.product.price)}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="rounded-lg bg-white/10 p-1 text-white hover:bg-white/20"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center text-sm text-white">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="rounded-lg bg-white/10 p-1 text-white hover:bg-white/20"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="ml-auto rounded-lg p-1 text-red-400 hover:bg-red-500/10"
                        aria-label="Remover item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-white/10 px-6 py-4">
            <div className="flex justify-between text-sm">
              <span className="text-slate-400">Subtotal</span>
              <span className="text-white">{formatCurrency(subtotal)}</span>
            </div>
            <div className="mt-2 flex justify-between text-lg font-bold">
              <span className="text-white">Total</span>
              <span className={haven ? 'text-[rgba(200,210,230,0.75)]' : theme === 'smp' ? 'text-emerald-400' : 'text-violet-300'}>
                {formatCurrency(subtotal)}
              </span>
            </div>
            {haven ? (
              <button
                onClick={onCheckout}
                className="mt-4 w-full rounded-sm border border-[rgba(200,215,240,0.12)] py-3.5 text-xs uppercase tracking-[0.2em] text-[#e8edf5] transition-all duration-500 hover:border-[rgba(200,215,240,0.25)] hover:bg-[rgba(255,255,255,0.03)]"
              >
                Prosseguir para o checkout
              </button>
            ) : (
              <Button theme={theme} className="mt-4 w-full" size="lg" onClick={onCheckout}>
                Prosseguir para checkout
              </Button>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}
