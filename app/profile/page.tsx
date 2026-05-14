'use client';

import { useState, useEffect } from 'react';
import { useAuth } from '@/components/auth-provider';
import { motion } from 'motion/react';
import { CreditCard, Copy, CheckCircle2, User as UserIcon, Calendar, Clock, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type PurchasedCard = {
  _id: string;

  cardId: string;

  privateCardId?: string;

  name: string;
  type: string;
  price: number;

  data?: string;
  balance?: number;

  status: 'ACTIVE' | 'EXPIRED' | 'DISABLED';

  purchasedAt: string;
};

export default function Profile() {
  const { user } = useAuth();
  const [purchasedCards, setPurchasedCards] = useState<PurchasedCard[]>([]);

  const [copiedId, setCopiedId] = useState<string | null>(null);

  // =========================================
  // FETCH PURCHASES
  // =========================================
  useEffect(() => {
    if (!user) return;

    const fetchPurchases = async () => {
      try {
        const res = await fetch('/api/user/purchases');
        const data = await res.json();
        if (res.ok) setPurchasedCards(data);
      } catch (error) {
        console.error('Error fetching purchases:', error);
      }
    };

    fetchPurchases();
  }, [user]);

  // =========================================
  // COPY
  // =========================================
  const copyToClipboard = async (
    card: PurchasedCard
  ) => {
    try {
      const parts =
        card.data?.split("|") || [];

      const cardNumber =
        parts[0] || "N/A";

      const expiry =
        parts[1] || "N/A";

      const cvv =
        parts[2] || "N/A";

      const holder =
        parts[3] || "N/A";

      const address =
        parts[4] || "N/A";

      const city =
        parts[5] || "N/A";

      const state =
        parts[6] || "N/A";

      const zip =
        parts[7] || "N/A";

      const country =
        parts[8] || "N/A";

      const email =
        parts[10] || "N/A";

      const phone =
        parts[11] || "N/A";

      const text = `
  CARD DETAILS
  ====================

  Card Number: ${cardNumber}
  Expiry: ${expiry}
  CVV: ${cvv}

  Holder: ${holder}

  Balance: $${card.balance}
  Price: $${card.price}

  Address: ${address}
  City: ${city}
  State: ${state}
  ZIP: ${zip}
  Country: ${country}

  Email: ${email}
  Phone: ${phone}
  `;

      await navigator.clipboard.writeText(
        text.trim()
      );

      setCopiedId(card._id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);

    } catch (error) {
      console.error(
        "Copy failed:",
        error
      );
    }
  };

  const sortedCards = [...purchasedCards].sort(
    (a, b) => new Date(b.purchasedAt).getTime() - new Date(a.purchasedAt).getTime()
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8 border-b border-neutral-900">
        <div className="space-y-4">
          <div className="h-16 w-16 bg-neutral-900 rounded-sm flex items-center justify-center border border-neutral-800">
            <UserIcon size={32} className="text-yellow-500" />
          </div>
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tighter uppercase">{user?.email?.split('@')[0]}</h1>
            <p className="text-neutral-500 font-medium flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-yellow-500/10 text-yellow-500 rounded-sm">
                Member Status: Verified
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Total Asset Value</p>
            <p className="text-2xl font-mono font-medium text-white">${user?.balance?.toFixed(2) || '0.00'}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">Inventory Size</p>
            <p className="text-2xl font-mono font-medium text-white">{purchasedCards.length} Items</p>
          </div>
        </div>
      </header>

      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tighter flex items-center gap-3">
            <CreditCard size={24} className="text-neutral-700" />
            DIGITAL ASSET STORAGE
          </h2>
          <div className="h-px flex-1 mx-8 bg-neutral-900" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {purchasedCards.length === 0 ? (
            <div className="col-span-full py-20 text-center space-y-4 border border-dashed border-neutral-900 rounded-sm">
              <p className="text-neutral-600 text-xs font-bold uppercase tracking-widest">Hardware wallet is empty</p>
              <button className="text-yellow-500 text-xs font-bold uppercase tracking-widest hover:underline">
                Browse Marketplace
              </button>
            </div>
          ) : (
            sortedCards.map((card, index) => {
              const parts = card.data?.split("|") || [];

              const cardNumber = parts[0] || "";
              const expiry = parts[1] || "";
              const cvv = parts[2] || "";
              const holder = parts[3] || "";
              const email = parts[10] || "";
              const phone = parts[11] || "";

              return (
                <motion.div
                  key={card._id || index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="relative overflow-hidden rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 to-black p-6"
                >
                  {/* TOP BAR */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-bold">
                        Virtual Card
                      </p>

                      <h3 className="font-mono text-sm font-black text-white mt-1">
                        {card.name}
                      </h3>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                      <span className="text-[10px] font-bold text-green-400 tracking-widest">
                        {card.status}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">
                      Card Number
                    </p>

                    <p className="font-mono text-xl tracking-[0.2em] text-white font-bold">
                      {cardNumber?.replace(/\D/g, '').replace(/(.{4})/g, '$1 ').trim()}
                    </p>
                  </div>

                  <div className="grid grid-cols-4 mb-6 border-y border-neutral-800 py-4">
  
                    <div className="px-3 border-r border-neutral-500">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                        Expiry
                      </p>
                      <p className="text-white font-bold text-sm">{expiry}</p>
                    </div>

                    <div className="px-3 border-r border-neutral-500">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                        CVV
                      </p>
                      <p className="text-white font-bold text-sm">{cvv}</p>
                    </div>

                    <div className="px-3 border-r border-neutral-500">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                        Balance
                      </p>
                      <p className="text-white font-bold text-sm">${card.balance}</p>
                    </div>

                    <div className="px-3">
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                        Price
                      </p>
                      <p className="text-white font-bold text-sm">${card.price}</p>
                    </div>

                  </div>

                  {/* HOLDER */}
                  <div className="rounded-xl border border-neutral-800 bg-black/40 p-4 mb-6 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">
                        Holder
                      </span>

                      <span className="text-white font-medium">
                        {holder}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">
                        Phone
                      </span>

                      <span className="text-white font-medium">
                        {phone}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-neutral-500">
                        Email
                      </span>

                      <span className="text-white font-medium">
                        {email}
                      </span>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between border-t border-neutral-800 pt-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                        Purchased
                      </p>

                      <p className="text-xs text-white font-medium">
                        {new Date(
                          card.purchasedAt
                        ).toLocaleString()}
                      </p>
                    </div>

                    <button
                      onClick={() =>
                        copyToClipboard(card)
                      }
                      className="h-10 px-4 rounded-xl border border-neutral-800 bg-neutral-900 hover:bg-neutral-800 transition-all duration-200 text-xs font-bold text-white flex items-center gap-2"
                    >
                      {copiedId === card._id ? (
                        <>
                          <Check size={14} />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy Details
                        </>
                      )}
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </section>
    </div>
  );
}
