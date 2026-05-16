<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card, index) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="minimal-card overflow-hidden group relative flex flex-col"
          >
            <div className="p-6 flex flex-col flex-1 space-y-5">

              {/* CARD IMAGE + TYPE */}
              <div className="flex items-start justify-between">

                <div className="space-y-2 flex-1">

                  <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-widest">
                    {card.type}
                  </span>

                  {/* FIXED HEIGHT TITLE */}
                  <h3 className="text-lg font-bold tracking-tight min-h-[56px]">
                    {card.name}
                  </h3>

                </div>

              </div>

              {/* CARD NUMBER PREVIEW */}
              <div className="bg-neutral-900/40 rounded-lg p-3 font-mono tracking-widest text-sm text-neutral-300">
                •••• •••• •••• {card.last4}
              </div>

              {/* PRICE + BALANCE */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-neutral-600 uppercase font-black">
                    Price
                  </p>

                  <p className="text-lg font-bold text-white">
                    ${card.price}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[10px] text-neutral-600 uppercase font-black">
                    Balance
                  </p>

                  <p className="text-lg font-bold text-green-400">
                    ${card.previewBalance}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => handlePurchase(card)}
                disabled={
                  purchaseStatus?.id === card.id &&
                  purchaseStatus.status === "loading"
                }
                className={cn(
                  "mt-auto cursor-pointer minimal-button w-full flex items-center justify-center gap-2 transition",

                  purchaseStatus?.id === card.id &&
                    purchaseStatus.status === "success"
                    ? "bg-green-500 text-white"
                    : purchaseStatus?.id === card.id &&
                      purchaseStatus.status === "error"
                    ? "bg-red-500 text-white"
                    : purchaseStatus?.id === card.id &&
                      purchaseStatus.status === "insufficient-funds"
                    ? "bg-red-500 text-white"
                    : "bg-white text-black hover:bg-neutral-200"
                )}
              >
                {purchaseStatus?.id === card.id ? (
                  <>
                    {purchaseStatus.status === "loading" &&
                      "Processing..."}

                    {purchaseStatus.status === "success" && (
                      <>
                        <CheckCircle2 size={16} />
                        Purchased
                      </>
                    )}

                    {purchaseStatus.status === "error" && (
                      <>
                        <AlertCircle size={16} />
                        Failed
                      </>
                    )}

                    {purchaseStatus.status ===
                      "insufficient-funds" && (
                      <>
                        <AlertCircle size={16} />
                        Insufficient Funds
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <ShoppingCart size={16} />
                    Buy Card
                  </>
                )}
              </button>
            </div>

            {/* hover glow strip */}
            <div className="h-1 bg-neutral-900 group-hover:bg-yellow-500/70 transition-all duration-500" />
          </motion.div>
        ))}
      </div>