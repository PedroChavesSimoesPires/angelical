import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';
import { getUniverseFromPath } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

export function Footer() {
  const location = useLocation();
  const universe = getUniverseFromPath(location.pathname);
  const isHaven = universe === 'angelical';

  if (isHaven) {
    return (
      <footer className="border-t border-[rgba(200,215,240,0.06)] bg-[#04060c]">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
          <div className="flex flex-col items-center text-center">
            <span className="haven-title text-sm tracking-[0.3em] text-[rgba(200,210,230,0.5)]">
              AngelicSMP
            </span>
            <p className="haven-body mt-4 max-w-sm text-xs">
              Um mundo entre sonhos. Encontrado, não procurado.
            </p>
            <div className="haven-divider my-8 w-16" />
            <nav className="flex flex-wrap justify-center gap-6">
              {[
                { label: 'Início', to: '/angelical' },
                { label: 'Mundo', to: '/angelical/sobre' },
                { label: 'Regras', to: '/angelical/regras' },
                { label: 'Comunidade', to: '/angelical/comunidade' },
                { label: 'Loja', to: '/angelical/loja' },
                { label: 'FAQ', to: '/angelical/faq' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-[0.65rem] uppercase tracking-[0.15em] text-[rgba(200,210,230,0.35)] transition-colors duration-500 hover:text-[rgba(200,210,230,0.65)]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <p className="mt-10 font-mono text-[0.6rem] text-[rgba(200,210,230,0.2)]">
              © {new Date().getFullYear()} {siteConfig.angelical.name}
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer
      className={cn(
        'border-t',
        universe === 'smp' && 'border-emerald-900/30 bg-stone-950',
        universe === 'portal' && 'portal-footer border-slate-800',
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img
                src="/assets/haven/05b50ccb3219f7ea00ec3d2c8d4b2d1f.jpg"
                alt="Ícone AngelicSMP"
                className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/20"
              />
              <span className="font-display text-lg font-semibold text-white">
                {siteConfig.projectName}
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-slate-400">
              Portal oficial da comunidade. Dois universos, uma só família — Minecraft SMP e AngelicSMP.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-white">Minecraft SMP</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/minecraft" className="hover:text-emerald-400 transition-colors">Início</Link></li>
              <li><Link to="/minecraft/loja" className="hover:text-emerald-400 transition-colors">Loja</Link></li>
              <li><Link to="/minecraft/ranking" className="hover:text-emerald-400 transition-colors">Ranking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white">AngelicSMP</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-400">
              <li><Link to="/angelical" className="hover:text-violet-300 transition-colors">Início</Link></li>
              <li><Link to="/angelical/loja" className="hover:text-violet-300 transition-colors">Loja</Link></li>
              <li><Link to="/angelical/comunidade" className="hover:text-violet-300 transition-colors">Comunidade</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} {siteConfig.projectName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
