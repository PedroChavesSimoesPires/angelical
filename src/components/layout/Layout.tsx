import { useLocation, Outlet } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/contexts/CartContext';
import { getUniverseFromPath } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

export function Layout() {
  const location = useLocation();
  const universe = getUniverseFromPath(location.pathname);

  const bgStyles = {
    portal: 'bg-slate-950 text-white',
    smp: 'bg-stone-950 text-white smp-theme',
    angelical: 'haven-theme haven-grain text-white',
  };

  return (
    <div className={cn('min-h-screen flex flex-col', bgStyles[universe])}>
      <Navbar />
      <main className="flex-1">
        {universe === 'smp' ? (
          <CartProvider universe="smp">
            <Outlet />
          </CartProvider>
        ) : universe === 'angelical' ? (
          <CartProvider universe="angelical">
            <Outlet />
          </CartProvider>
        ) : (
          <Outlet />
        )}
      </main>
      <Footer />
    </div>
  );
}
