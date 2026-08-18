import { ShopPage } from '@/components/shop/ShopPage';
import { smpProducts, smpCategories } from '@/data/smp/mockData';

export function SmpShopPage() {
  return (
    <ShopPage
      products={smpProducts}
      categories={smpCategories}
      theme="smp"
      universe="smp"
      title="Loja do SMP"
      subtitle="Ranks, coins, kits e cosméticos para melhorar sua experiência no servidor."
    />
  );
}
