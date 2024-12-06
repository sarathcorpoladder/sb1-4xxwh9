import { NextResponse } from 'next/server';
import { submitContactForm } from '@/lib/api/contact';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const submission = await submitContactForm(data);
    return NextResponse.json(submission);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to submit contact form' },
      { status: 400 }
    );
  }
}