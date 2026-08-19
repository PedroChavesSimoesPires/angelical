import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, ShoppingBag, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getUniverseFromPath } from '@/contexts/CartContext';
import { cn } from '@/lib/utils';

const portalLinks = [
  { label: 'Home', to: '/' },
  { label: 'Minecraft SMP', to: '/minecraft' },
  { label: 'AngelicSMP', to: '/angelical' },
];

const smpLinks = [
  { label: 'Início', to: '/minecraft' },
  { label: 'Loja', to: '/minecraft/loja' },
  { label: 'Ranking', to: '/minecraft/ranking' },
  { label: 'Regras', to: '/minecraft/regras' },
  { label: 'Notícias', to: '/minecraft/noticias' },
];

const havenLinks = [
  { label: 'Início', to: '/angelical' },
  { label: 'Mundo', to: '/angelical/sobre' },
  { label: 'Regras', to: '/angelical/regras' },
  { label: 'Comunidade', to: '/angelical/comunidade' },
  { label: 'Loja', to: '/angelical/loja' },
];

export function Navbar() {
  const location = useLocation();
  const universe = getUniverseFromPath(location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHaven = universe === 'angelical';
  const shopPath = universe === 'smp' ? '/minecraft/loja' : universe === 'angelical' ? '/angelical/loja' : null;

  const links = universe === 'smp' ? smpLinks : universe === 'angelical' ? havenLinks : portalLinks;

  return (
    <header
      className={cn(
        'sticky top-0 z-40 transition-all duration-700',
        universe === 'portal' && 'portal-navbar',
        isHaven
          ? 'border-b border-[rgba(200,215,240,0.08)] bg-[#080d18]/55 backdrop-blur-xl'
          : universe === 'smp'
            ? 'border-b border-emerald-900/30 bg-stone-950/90 backdrop-blur-xl'
            : 'border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl',
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 sm:py-5">
        <Link
          to={isHaven ? '/angelical' : '/'}
          className="group flex items-center gap-3"
          aria-label="Home"
        >
          {isHaven ? (
            <span className="haven-title text-sm tracking-[0.3em] text-[rgba(220,230,244,0.78)] transition-colors duration-500 group-hover:text-[#edf2f8]">
              AngelicSMP
            </span>
          ) : (
            <>
              <img
                src="/assets/haven/05b50ccb3219f7ea00ec3d2c8d4b2d1f.jpg"
                alt="Ícone AngelicSMP"
                className="h-10 w-10 rounded-xl object-cover ring-1 ring-white/20 transition-transform group-hover:scale-105"
              />
              <span className="hidden font-display text-lg font-semibold text-white sm:block">
                {siteConfig.projectName}
              </span>
            </>
          )}
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {universe === 'portal' ? (
            portalLinks.map((link) => (
              <PortalNavLink key={link.to} to={link.to} active={location.pathname === link.to || (link.to !== '/' && location.pathname.startsWith(link.to))}>
                {link.label}
              </PortalNavLink>
            ))
          ) : (
            links.map((link) => (
              <HavenNavLink key={link.to} to={link.to} active={location.pathname === link.to} haven={isHaven}>
                {link.label}
              </HavenNavLink>
            ))
          )}

          {universe !== 'portal' && (
            <Link
              to="/"
              className={cn(
                'ml-3 border-l px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors duration-500',
                isHaven
                  ? 'border-[rgba(200,215,240,0.1)] text-[rgba(200,210,230,0.45)] hover:text-[rgba(200,210,230,0.8)]'
                  : 'border-white/10 text-slate-400 hover:text-white',
              )}
            >
              Portal da comunidade
            </Link>
          )}

          {(universe === 'smp' || isHaven) && (
            <a
              href={isHaven ? siteConfig.angelical.discordUrl : siteConfig.smp.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'ml-3 text-xs uppercase tracking-[0.15em] transition-colors duration-500',
                isHaven
                  ? 'text-[rgba(200,210,230,0.45)] hover:text-[rgba(200,210,230,0.8)]'
                  : 'rounded-lg bg-emerald-500/20 px-4 py-2 font-semibold text-emerald-300 hover:bg-emerald-500/30',
              )}
            >
              Entrar no Discord
            </a>
          )}

          {shopPath && location.pathname.includes('/loja') && (
            <Link
              to={shopPath}
              className={cn(
                'relative ml-2 rounded-lg p-2 transition-colors',
                isHaven ? 'text-[rgba(200,210,230,0.5)] hover:text-[#e8edf5]' : 'text-emerald-300 hover:bg-emerald-500/10',
              )}
              aria-label="Shop"
            >
              <ShoppingBag className="h-4 w-4" />
            </Link>
          )}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          {shopPath && location.pathname.includes('/loja') && (
            <Link to={shopPath} className="rounded-lg p-2 text-white" aria-label="Shop">
              <ShoppingBag className="h-5 w-5" />
            </Link>
          )}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={cn('rounded-lg p-2', isHaven ? 'text-[rgba(200,210,230,0.6)]' : 'text-white hover:bg-white/10')}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className={cn('border-t px-6 py-4 lg:hidden animate-fade-in', isHaven ? 'border-[rgba(200,215,240,0.08)] bg-[#080d18]/90' : 'border-white/10')}>
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <MobileLink key={link.to} to={link.to} onClick={() => setMobileOpen(false)} haven={isHaven}>
                {link.label}
              </MobileLink>
            ))}
            {universe !== 'portal' && (
              <MobileLink to="/" onClick={() => setMobileOpen(false)} haven={isHaven}>
                ← Portal da comunidade
              </MobileLink>
            )}
            <a
              href={isHaven ? siteConfig.angelical.discordUrl : siteConfig.discordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'mt-2 px-4 py-3 text-center text-xs uppercase tracking-[0.15em]',
                isHaven ? 'text-[rgba(200,210,230,0.5)]' : 'rounded-lg bg-indigo-500/20 font-semibold text-indigo-200',
              )}
            >
              Entrar no Discord
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function HavenNavLink({ to, children, active, haven }: { to: string; children: React.ReactNode; active: boolean; haven: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        'relative px-4 py-2 text-xs uppercase tracking-[0.14em] transition-all duration-500',
        haven
          ? active
            ? 'text-[#edf2f8] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-px after:bg-[rgba(205,225,255,0.65)]'
            : 'text-[rgba(200,210,230,0.4)] hover:text-[rgba(200,210,230,0.7)]'
          : active
            ? 'rounded-lg bg-emerald-500/20 text-emerald-300'
            : 'rounded-lg text-slate-400 hover:bg-white/5 hover:text-white',
      )}
    >
      {children}
    </Link>
  );
}

function PortalNavLink({ to, children, active }: { to: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link
      to={to}
      className={cn(
        'rounded-lg px-4 py-2 text-sm font-medium transition-colors',
        active ? 'bg-white/10 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white',
      )}
    >
      {children}
    </Link>
  );
}

function MobileLink({ to, children, onClick, haven }: { to: string; children: React.ReactNode; onClick: () => void; haven?: boolean }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'rounded-lg px-4 py-3 transition-colors',
        haven ? 'text-[rgba(200,210,230,0.55)] hover:text-[#e8edf5]' : 'text-slate-300 hover:bg-white/10 hover:text-white',
      )}
    >
      {children}
    </Link>
  );
}
