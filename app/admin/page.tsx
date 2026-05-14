'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/auth-provider';
import { motion } from 'motion/react';
import { ShieldCheck, Check, X, Users, Wallet, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function AdminPanel() {
  const { user } = useAuth();
  const [requests, setRequests] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<string | null>(null);

  const fetchData = async () => {
    if (user?.role !== 'ADMIN') return;
    try {
      const [depRes, userRes] = await Promise.all([
        fetch('/api/admin/deposits'),
        fetch('/api/admin/users')
      ]);
      const deps = await depRes.json();
      const usrs = await userRes.json();
      if (depRes.ok) setRequests(deps);
      if (userRes.ok) setUsers(usrs);
    } catch (error) {
      console.error('Error fetching admin data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const handleUpdateStatus = async (requestId: string, status: 'APPROVED' | 'REJECTED') => {
    setLoading(requestId);
    try {
      const res = await fetch('/api/admin/deposits', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ requestId, status }),
      });

      if (!res.ok) throw new Error('Failed to update status');
      fetchData();
    } catch (error) {
      console.error("Update error:", error);
    } finally {
      setLoading(null);
    }
  };

  if (user?.role !== 'ADMIN') {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <AlertTriangle size={48} className="text-yellow-500" />
        <h1 className="text-2xl font-bold tracking-tighter uppercase">Access Denied</h1>
        <p className="text-neutral-500 text-sm max-w-xs text-center font-medium">
          Your credentials do not have the required administrative privileges to access this system node.
        </p>
        <p className="text-[10px] text-neutral-700 font-bold uppercase tracking-widest mt-8">
          Node: gen-lang-client-0197888243
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <header className="space-y-2 pb-8 border-b border-neutral-900">
        <h1 className="text-4xl font-bold tracking-tighter uppercase flex items-center gap-4">
          <ShieldCheck size={40} className="text-yellow-500" />
          COMMAND CENTER
        </h1>
        <p className="text-neutral-500 font-medium tracking-tight uppercase text-xs tracking-[0.2em]">High Authority Management Node</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tighter flex items-center gap-3">
              <Wallet size={20} className="text-neutral-600" />
              PENDING DEPOSITS
            </h2>
            <span className="text-[10px] font-bold text-neutral-600 bg-neutral-900 px-3 py-1 rounded-sm uppercase tracking-widest">
              {requests.filter(r => r.status === 'PENDING').length} Active Tasks
            </span>
          </div>

          <div className="space-y-4">
            {requests.length === 0 ? (
              <p className="p-12 text-center text-neutral-700 text-xs font-bold uppercase tracking-widest border border-dashed border-neutral-900 rounded-sm">Queue Clear</p>
            ) : (
              requests.map((req, index) => (
                <div key={index} className="minimal-card p-6 flex items-center justify-between group">
                  <div className="space-y-3 flex-1">
                    <div className="flex items-center gap-4">
                      <span className="text-lg font-mono font-bold text-white tracking-tighter">${req.amount.toFixed(2)}</span>
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                        req.status === 'PENDING' ? "text-yellow-500 border-yellow-500/20 bg-yellow-500/5" :
                        req.status === 'APPROVED' ? "text-green-500 border-green-500/20 bg-green-500/5" :
                        "text-red-500 border-red-500/20 bg-red-500/5"
                      )}>
                        {req.status}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-1">
                       <p className="text-[10px] text-neutral-600 font-bold uppercase truncate max-w-md">{req.email}</p>
                       <code className="text-[9px] text-neutral-500 font-mono truncate max-w-sm">{req.txHash}</code>
                    </div>
                  </div>

                  {req.status === 'PENDING' && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleUpdateStatus(req._id, 'REJECTED')}
                        disabled={!!loading}
                        className="p-3 text-red-500 hover:bg-red-500/10 rounded-sm transition-colors border border-transparent hover:border-red-500/20"
                      >
                        <X size={20} />
                      </button>
                      <button
                        onClick={() => handleUpdateStatus(req._id, 'APPROVED')}
                        disabled={!!loading}
                        className="p-3 text-green-500 hover:bg-green-500/10 rounded-sm transition-colors border border-transparent hover:border-green-500/20"
                      >
                        <Check size={20} />
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold tracking-tighter flex items-center gap-3">
              <Users size={20} className="text-neutral-600" />
              SYSTEM USERS
            </h2>
          </div>
          
          <div className="space-y-4">
            {users.map(u => (
              <div key={u._id} className="minimal-card p-4 flex items-center justify-between">
                <div className="space-y-1 overflow-hidden">
                  <p className="text-xs font-bold truncate text-neutral-300">{u.email}</p>
                  <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">{u.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-mono font-bold text-yellow-500">${u.balance?.toFixed(2) || '0.00'}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
