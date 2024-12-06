import { NextResponse } from 'next/server';
import { submitTrainerApplication } from '@/lib/api/trainer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const application = await submitTrainerApplication(data);
    return NextResponse.json(application);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit trainer application' },
      { status: 400 }
    );
  }
}