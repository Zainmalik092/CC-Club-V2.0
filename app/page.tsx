'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '@/components/auth-provider';
import { useRouter } from 'next/navigation';
import { LogIn, UserPlus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LandingPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user, refresh } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  if (user) {
    return null;
  }

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Authentication failed');

      await refresh();
      router.push('/dashboard');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter text-white">
            CC CLUB<span className="text-yellow-500">.</span>
          </h1>
          <p className="text-neutral-500 text-sm font-medium">PREMIUM DIGITAL CARD MARKETPLACE</p>
        </div>

        <div className="minimal-card p-8 space-y-6">
          <div className="flex border-b border-neutral-900">
            <button
              onClick={() => setIsLogin(true)}
              className={cn(
                "flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all",
                isLogin ? "text-yellow-500 border-b-2 border-yellow-500" : "text-neutral-600 hover:text-neutral-400"
              )}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={cn(
                "flex-1 py-4 text-xs font-bold uppercase tracking-widest transition-all",
                !isLogin ? "text-yellow-500 border-b-2 border-yellow-500" : "text-neutral-600 hover:text-neutral-400"
              )}
            >
              Register
            </button>
          </div>

          <form onSubmit={handleAuth} className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Email</label>
              <input
                type="email"
                required
                className="minimal-input w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email@example.com"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest">Password</label>
              <input
                type="password"
                required
                className="minimal-input w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>

            {error && (
              <p className="text-red-500 text-xs font-medium text-center">{error}</p>
            )}

            <button
              disabled={loading}
              className="minimal-button w-full bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-50 mt-4 flex items-center justify-center gap-2"
            >
              {loading ? 'Processing...' : (isLogin ? <><LogIn size={16} /> Login</> : <><UserPlus size={16} /> Register</>)}
            </button>
          </form>
        </div>

        <p className="text-center text-neutral-600 text-[10px] uppercase font-bold tracking-widest">
          Secure Multi-Channel Authentication
        </p>
      </motion.div>
    </div>
  );
}
