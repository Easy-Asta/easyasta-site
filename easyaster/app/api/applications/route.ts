import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

/**
 * Handles CRUD operations for applications. Currently only POST is
 * implemented to create a new application record in the database. The
 * application data is stored in the `data` JSON column and a pending
 * status is assigned. Authentication can be added later to associate
 * the application with a user.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { data, userId } = body;
    const application = await prisma.application.create({
      data: {
        userId: userId ?? null,
        data,
      },
    });
    return NextResponse.json({ applicationId: application.id }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to create application' }, { status: 500 });
  }
}