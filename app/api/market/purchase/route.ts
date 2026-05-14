// app/api/purchase-card/route.ts
import { NextRequest, NextResponse } from "next/server";
import { getAuthUser } from "@/lib/auth-server";
import connectDB from "@/lib/mongodb";
import PurchasedCard from "@/models/PurchasedCard";
import User from "@/models/User";

import { NEWCARDS, PRIVATE_CARDS } from "@/lib/cards";

export async function POST(req: NextRequest) {
  try {
    // =========================
    // AUTH
    // =========================

    const user = await getAuthUser();

    if (!user) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    // =========================
    // BODY
    // =========================

    const { cardId } = await req.json();

    if (!cardId) {
      return NextResponse.json(
        { error: "Card ID is required" },
        { status: 400 }
      );
    }

    // =========================
    // DB
    // =========================

    await connectDB();

    // =========================
    // FIND PUBLIC CARD
    // =========================

    const publicCard = NEWCARDS.find(
      (c) => c.id === cardId
    );

    if (!publicCard) {
      return NextResponse.json(
        { error: "Card not found" },
        { status: 404 }
      );
    }

    // =========================
    // FIND USER
    // =========================

    const freshUser = await User.findById(
      user._id
    );

    if (!freshUser) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 404 }
      );
    }

    // =========================
    // CHECK BALANCE
    // =========================

    if (freshUser.balance < publicCard.price) {
      return NextResponse.json(
        { error: "Insufficient balance" },
        { status: 400 }
      );
    }

    // =========================
    // GET MATCHING PRIVATE CARDS
    // =========================

    console.log("PUBLIC CARD ID:", publicCard.id);
    console.log(
      "PRIVATE IDS:",
      PRIVATE_CARDS.map((c) => c.publicCardId)
    );

    const matchingPrivateCards =
      PRIVATE_CARDS.filter(
        (c) =>
          c.publicCardId === publicCard.id
      );

    if (matchingPrivateCards.length === 0) {
      return NextResponse.json(
        { error: "No cards available" },
        { status: 400 }
      );
    }

    // =========================
    // ROTATION SYSTEM
    // =========================

    const totalPurchases =
      await PurchasedCard.countDocuments({
        cardId: publicCard.id,
      });

    const selectedPrivateCard =
      matchingPrivateCards[
        totalPurchases %
          matchingPrivateCards.length
      ];

    // =========================
    // DEDUCT BALANCE
    // =========================

    freshUser.balance -= publicCard.price;

    await freshUser.save();

    // =========================
    // SAVE PURCHASE
    // =========================

    const purchasedCard =
      await PurchasedCard.create({
        userId: user._id,

        cardId: publicCard.id,

        privateCardId: selectedPrivateCard.id,

        // SNAPSHOT
        name: publicCard.name,
        type: publicCard.type,
        price: publicCard.price,
        balance: publicCard.previewBalance,

        // PRIVATE DATA
        data: selectedPrivateCard.data,


        status: "ACTIVE",
      });

    // =========================
    // RESPONSE
    // =========================

    return NextResponse.json({
      success: true,

      message: "Card purchased successfully",

      newBalance: freshUser.balance,

      purchasedCard,
    });
  } catch (error: any) {
    console.error(
      "PURCHASE ERROR:",
      error
    );

    return NextResponse.json(
      {
        error:
          error.message ||
          "Internal server error",
      },
      { status: 500 }
    );
  }
}