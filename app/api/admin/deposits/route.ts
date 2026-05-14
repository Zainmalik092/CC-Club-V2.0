import { NextRequest, NextResponse } from 'next/server';
import { getAuthUser } from '@/lib/auth-server';
import connectDB from '@/lib/mongodb';
import DepositRequest from '@/models/DepositRequest';
import User from '@/models/User';

export async function GET(req: NextRequest) {
  try {
    const user = await getAuthUser();
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const requests = await DepositRequest.find().sort({ createdAt: -1 });

    return NextResponse.json(requests);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const user = await getAuthUser();
    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { requestId, status } = await req.json();
    await connectDB();

    const depositReq = await DepositRequest.findById(requestId);
    if (!depositReq) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    if (depositReq.status !== 'PENDING') return NextResponse.json({ error: 'Already processed' }, { status: 400 });

    if (status === 'APPROVED') {
      const targetUser = await User.findById(depositReq.userId);
      if (targetUser) {
        targetUser.balance += depositReq.amount;
        await targetUser.save();
      }
    }

    depositReq.status = status;
    depositReq.processedAt = new Date();
    await depositReq.save();

    return NextResponse.json(depositReq);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
