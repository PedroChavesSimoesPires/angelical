import { useState } from 'react';
import { CheckCircle, CreditCard } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';
import { processCheckout } from '@/services/shop';
import { formatCurrency } from '@/lib/utils';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'smp' | 'angelical';
  universe: 'smp' | 'angelical';
  haven?: boolean;
}

export function CheckoutModal({ isOpen, onClose, theme, universe, haven = false }: CheckoutModalProps) {
  const { items, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const result = await processCheckout(
        universe,
        items.map((item) => ({ productId: item.product.id, quantity: item.quantity })),
        subtotal,
      );
      setOrderId(result.orderId);
      setSuccess(true);
      clearCart();
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setOrderId('');
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={success ? (haven ? 'Oferenda recebida' : 'Pedido confirmado!') : 'Checkout'}
      theme={haven ? 'haven' : theme}
      size="md"
    >
      {success ? (
        <div className="text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-emerald-400" />
          <p className="mt-4 text-lg text-white">
            Seu pedido foi registrado com sucesso!
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Número do pedido: <span className="font-mono text-white">{orderId}</span>
          </p>
          <p className="mt-4 text-sm text-slate-500">
            Este é um checkout demonstrativo. A integração com gateway de pagamento será adicionada em breve.
          </p>
          <Button theme={theme} className="mt-6 w-full" onClick={handleClose}>
            Fechar
          </Button>
        </div>
      ) : (
        <>
          <div className="space-y-3">
            {items.map((item) => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-slate-300">
                  {item.quantity}x {item.product.name}
                </span>
                <span className="text-white">
                  {formatCurrency(item.product.price * item.quantity)}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-white/10 pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span className="text-white">Total</span>
              <span className={theme === 'smp' ? 'text-emerald-400' : 'text-violet-300'}>
                {formatCurrency(subtotal)}
              </span>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-dashed border-white/20 bg-white/5 p-4">
            <div className="flex items-center gap-3 text-slate-400">
              <CreditCard className="h-5 w-5" />
              <span className="text-sm">
                Pagamento será integrado futuramente (Pix, Cartão, etc.)
              </span>
            </div>
          </div>

          <Button
            theme={theme}
            className="mt-6 w-full"
            size="lg"
            loading={loading}
            onClick={handleCheckout}
            disabled={items.length === 0}
          >
            Confirmar pedido
          </Button>
        </>
      )}
    </Modal>
  );
}
