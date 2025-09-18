import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormNotification } from '@/lib/email-notifications';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate required fields
    const { name, email, phone, service, message } = body;
    
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email notification
    await sendContactFormNotification({
      name,
      email,
      phone,
      service,
      message
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending contact notification:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}
