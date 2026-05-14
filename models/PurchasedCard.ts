// models/PurchasedCard.ts
import mongoose, { Schema, Document,} from "mongoose";

export interface IPurchasedCard
  extends Document {
  userId: mongoose.Types.ObjectId;

  // PUBLIC CARD ID
  cardId: string;

  // PRIVATE ROTATION CARD ID
  privateCardId?: string;

  // SNAPSHOT INFO
  name: string;
  type: string;
  price: number;

  // LOCKED PRIVATE DATA
  data?: string;

  balance?: number;

  status:
    | "ACTIVE"
    | "EXPIRED"
    | "DISABLED";

  purchasedAt: Date;
}

const PurchasedCardSchema =
  new Schema(
    {
      userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },

      // PUBLIC CARD
      cardId: {
        type: String,
        required: true,
      },

      // PRIVATE ROTATION CARD
      privateCardId: {
        type: String,
      },

      // SNAPSHOT DATA
      name: {
        type: String,
        required: true,
      },

      type: {
        type: String,
        required: true,
      },

      price: {
        type: Number,
        required: true,
      },

      // PRIVATE DATA
      data: {
        type: String,
      },

      balance: {
        type: Number,
      },

      status: {
        type: String,

        enum: [
          "ACTIVE",
          "EXPIRED",
          "DISABLED",
        ],

        default: "ACTIVE",
      },

      purchasedAt: {
        type: Date,
        default: Date.now,
      },
    },

    {
      timestamps: true,
    }
  );

export default mongoose.models.PurchasedCard || mongoose.model<IPurchasedCard>( "PurchasedCard", PurchasedCardSchema);