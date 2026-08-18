import type { Product } from '@/types';

/**
 * Serviço placeholder para produtos da loja.
 * Substituir por chamada real à API quando disponível.
 */
export async function fetchProducts(universe: 'smp' | 'angelical'): Promise<Product[]> {
  await simulateNetworkDelay();

  if (universe === 'smp') {
    const { smpProducts } = await import('@/data/smp/mockData');
    return smpProducts;
  }

  const { angelicalProducts } = await import('@/data/angelical/mockData');
  return angelicalProducts;
}

/**
 * Placeholder para checkout — integrar gateway de pagamento futuramente.
 */
export async function processCheckout(
  _universe: 'smp' | 'angelical',
  _items: { productId: string; quantity: number }[],
  _total: number,
): Promise<{ success: boolean; orderId: string }> {
  await simulateNetworkDelay(800);
  return {
    success: true,
    orderId: `ORD-${Date.now()}`,
  };
}

function simulateNetworkDelay(ms = 400): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
