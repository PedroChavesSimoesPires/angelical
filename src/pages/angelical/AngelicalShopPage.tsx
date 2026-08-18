import { ShopPage } from '@/components/shop/ShopPage';
import { HavenPageShell } from '@/components/haven/HavenPageShell';
import { angelicalProducts, angelicalCategories } from '@/data/angelical/mockData';

export function AngelicalShopPage() {
  return (
    <HavenPageShell background="portal">
      <ShopPage
        products={angelicalProducts}
        categories={angelicalCategories}
        theme="angelical"
        universe="angelical"
        title="As Oferendas"
        subtitle="Apoie o Refúgio. Cada item é um fragmento do sonho."
        haven
      />
    </HavenPageShell>
  );
}
