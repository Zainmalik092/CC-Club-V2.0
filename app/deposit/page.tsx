'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/auth-provider';
import { motion } from 'motion/react';
import { Wallet, Copy, History, Clock, CheckCircle2, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Deposit() {
  const { user } = useAuth();
  const [amount, setAmount] = useState('');
  const [txHash, setTxHash] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [requests, setRequests] = useState<any[]>([]);

  const WALLET_ADDRESS = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';

  const fetchRequests = async () => {
    if (!user) return;
    try {
      const res = await fetch('/api/deposit');
      const data = await res.json();
      if (res.ok) setRequests(data);
    } catch (error) {
      console.error('Error fetching deposits:', error);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || loading) return;

    setLoading(true);
    try {
      const res = await fetch('/api/deposit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: parseFloat(amount),
          txHash,
        }),
      });

      if (!res.ok) throw new Error('Failed to submit request');

      setSuccess(true);
      setAmount('');
      setTxHash('');
      fetchRequests();
      setTimeout(() => setSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting deposit:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
      <div className="flex-1 space-y-12">
        <header className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tighter">DEPOSIT FUNDS</h1>
          <p className="text-neutral-500 font-medium tracking-tight">Manual cryptocurrency settlement system.</p>
        </header>

        <section className="minimal-card p-8 space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-black uppercase tracking-[0.2em] text-neutral-500 flex items-center gap-2">
              <Wallet size={14} className="text-yellow-500" />
              Transfer Instructions
            </h2>
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-sm space-y-4">
              <p className="text-sm text-neutral-400 font-medium">
                Send only <span className="text-white font-bold">ETH (ERC20)</span> or <span className="text-white font-bold">USDT (ERC20)</span> to the address below. 
                After sending, provide your transaction hash for verification.
              </p>
              <div className="flex items-center gap-4 bg-black p-4 rounded-sm border border-neutral-800 group">
                <code className="text-xs font-mono text-yellow-500 break-all select-all flex-1">
                  {WALLET_ADDRESS}
                </code>
                <button 
                  onClick={() => copyToClipboard(WALLET_ADDRESS)}
                  className="p-2 text-neutral-600 hover:text-white transition-colors"
                >
                  <Copy size={16} />
                </button>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none">Expected Amount (USD)</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  className="minimal-input w-full"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest leading-none">Transaction Hash (TxID)</label>
                <input
                  type="text"
                  required
                  className="minimal-input w-full"
                  value={txHash}
                  onChange={(e) => setTxHash(e.target.value)}
                  placeholder="0x..."
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="minimal-button w-full bg-yellow-500 text-black hover:bg-yellow-400 disabled:opacity-50"
            >
              {loading ? 'Submitting Request...' : (success ? 'Request Sent' : 'Notify System of Deposit')}
            </button>
          </form>
        </section>
      </div>

      <div className="lg:w-96 space-y-12">
        <header className="space-y-1">
          <h2 className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <History size={20} className="text-neutral-600" />
            HISTORY
          </h2>
          <p className="text-neutral-500 text-xs font-medium uppercase tracking-widest">Recent Activity</p>
        </header>

        <div className="space-y-4">
          {requests.length === 0 ? (
            <div className="p-8 border border-neutral-900 rounded-sm text-center">
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest">No requests found</p>
            </div>
          ) : (
            requests.map((req, index) => (
              <div key={index} className="minimal-card p-4 flex items-center justify-between group">
                <div className="space-y-1">
                  <p className="text-sm font-bold font-mono tracking-tighter">${req.amount.toFixed(2)}</p>
                  <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={cn(
                    "text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border",
                    req.status === 'PENDING' ? "text-yellow-500 border-yellow-500/20 bg-yellow-500/5" :
                    req.status === 'APPROVED' ? "text-green-500 border-green-500/20 bg-green-500/5" :
                    "text-red-500 border-red-500/20 bg-red-500/5"
                  )}>
                    {req.status}
                  </span>
                  {req.status === 'PENDING' ? <Clock size={14} className="text-yellow-500" /> :
                   req.status === 'APPROVED' ? <CheckCircle2 size={14} className="text-green-500" /> :
                   <XCircle size={14} className="text-red-500" />}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
