import mongoose, { Schema, Document } from 'mongoose';

export interface IDepositRequest extends Document {
  userId: mongoose.Types.ObjectId;
  email: string;
  amount: number;
  txHash: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: Date;
  processedAt?: Date;
}

const DepositRequestSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  email: { type: String, required: true },
  amount: { type: Number, required: true },
  txHash: { type: String, required: true },
  status: { type: String, enum: ['PENDING', 'APPROVED', 'REJECTED'], default: 'PENDING' },
  createdAt: { type: Date, default: Date.now },
  processedAt: { type: Date },
});

export default mongoose.models.DepositRequest || mongoose.model<IDepositRequest>('DepositRequest', DepositRequestSchema);
