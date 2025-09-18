import { NextRequest, NextResponse } from 'next/server';
import { sendTestimonialNotification } from '@/lib/email-notifications';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, rating, location, message } = body;
    
    if (!name || !rating || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification
    await sendTestimonialNotification({
      name,
      email,
      rating,
      location,
      message
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending testimonial notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
