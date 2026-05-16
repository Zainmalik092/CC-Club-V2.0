'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/components/auth-provider';
import { CreditCard, LayoutDashboard, Wallet, User as UserIcon, LogOut, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export const Navigation = () => {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  if (!user) return null;

  const links = [
    { href: '/dashboard', label: 'Store', icon: CreditCard },
    { href: '/deposit', label: 'Wallet', icon: Wallet },
    { href: '/profile', label: 'Profile', icon: UserIcon },
  ];

  if (user?.role === 'ADMIN') {
    links.push({ href: '/admin', label: 'Admin', icon: ShieldCheck });
  }

  return (
    <>
      {/* ── Top Navbar ── */}
      <nav className="border-b border-neutral-900 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-yellow-500 font-bold text-xl tracking-tighter">
            CC CLUB
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'px-4 py-2 rounded-sm text-sm font-medium transition-all duration-200 flex items-center gap-2',
                    isActive
                      ? 'text-yellow-500 bg-yellow-500/5'
                      : 'text-neutral-400 hover:text-white'
                  )}
                >
                  <Icon size={16} />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Balance + Logout */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-neutral-500 uppercase tracking-widest font-bold">
                Balance
              </span>
              <span className="text-yellow-500 font-mono font-medium leading-none">
                ${user?.balance?.toFixed(2) || '0.00'}
              </span>
            </div>
            <button
              onClick={logout}
              className="cursor-pointer text-neutral-500 hover:text-red-500 transition-colors"
              title="Logout"
            >
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Bottom Navigation ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-t border-neutral-900">
        <div className="flex items-center justify-around h-16 px-2">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex flex-col items-center gap-1 px-4 py-2 rounded-md text-xs font-medium transition-all duration-200',
                  isActive
                    ? 'text-yellow-500'
                    : 'text-neutral-500 hover:text-neutral-200'
                )}
              >
                <Icon size={20} />
                <span>{link.label}</span>
              </Link>
            );
          })}

          {/* Logout button in bottom nav */}
          <button
            onClick={logout}
            className="flex flex-col items-center gap-1 px-4 py-2 rounded-md text-xs font-medium text-neutral-500 hover:text-red-500 transition-colors cursor-pointer"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>

      {/* ── Bottom padding so content doesn't hide behind mobile nav ── */}
      <div className="md:hidden h-16" />
    </>
  );
};