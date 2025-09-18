import { getResendClient } from './resend';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface TestimonialData {
  name: string;
  email?: string;
  rating: number;
  location?: string;
  message: string;
}

export async function sendContactFormNotification(data: ContactFormData) {
  const resend = getResendClient();
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #DB5554; color: white; padding: 20px; border-radius: 8px 8px 0 0; margin: -30px -30px 30px -30px; }
        .header h1 { margin: 0; font-size: 24px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #DB5554; }
        .field-label { font-weight: bold; color: #DB5554; margin-bottom: 5px; }
        .field-value { color: #333; }
        .message-field { background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
        </div>
        
        <div class="field">
          <div class="field-label">Name:</div>
          <div class="field-value">${data.name}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value">${data.email}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Phone:</div>
          <div class="field-value">${data.phone}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Service Requested:</div>
          <div class="field-value">${data.service}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Message:</div>
          <div class="message-field">${data.message.replace(/\n/g, '<br>')}</div>
        </div>
        
        <div class="footer">
          <p>This notification was sent from the SKL Surveyors website contact form.</p>
          <p>Time: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'SKL Property Finders <notifications@sklpropertyfinders.co.uk>',
      to: ['marcglastonbury@live.co.uk'],
      subject: `New Contact Form Submission from ${data.name}`,
      html: htmlContent,
    });

    console.log('Contact form notification sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending contact form notification:', error);
    throw error;
  }
}

export async function sendTestimonialNotification(data: TestimonialData) {
  const resend = getResendClient();
  
  const stars = '⭐'.repeat(data.rating);
  
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Testimonial Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 20px; background-color: #f4f4f4; }
        .container { max-width: 600px; margin: 0 auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #DB5554; color: white; padding: 20px; border-radius: 8px 8px 0 0; margin: -30px -30px 30px -30px; }
        .header h1 { margin: 0; font-size: 24px; }
        .field { margin-bottom: 20px; padding: 15px; background: #f8f9fa; border-radius: 5px; border-left: 4px solid #DB5554; }
        .field-label { font-weight: bold; color: #DB5554; margin-bottom: 5px; }
        .field-value { color: #333; }
        .message-field { background: #fff; border: 1px solid #ddd; padding: 15px; border-radius: 5px; }
        .rating { font-size: 20px; color: #ffc107; }
        .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Testimonial Submission</h1>
        </div>
        
        <div class="field">
          <div class="field-label">Name:</div>
          <div class="field-value">${data.name}</div>
        </div>
        
        ${data.email ? `
        <div class="field">
          <div class="field-label">Email:</div>
          <div class="field-value">${data.email}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="field-label">Rating:</div>
          <div class="field-value">
            <span class="rating">${stars}</span> (${data.rating}/5 stars)
          </div>
        </div>
        
        ${data.location ? `
        <div class="field">
          <div class="field-label">Location:</div>
          <div class="field-value">${data.location}</div>
        </div>
        ` : ''}
        
        <div class="field">
          <div class="field-label">Testimonial:</div>
          <div class="message-field">"${data.message.replace(/\n/g, '<br>')}"</div>
        </div>
        
        <div class="footer">
          <p>This notification was sent from the SKL Surveyors website testimonials page.</p>
          <p>Time: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
        </div>
      </div>
    </body>
    </html>
  `;

  try {
    const result = await resend.emails.send({
      from: 'SKL Property Finders <notifications@sklpropertyfinders.co.uk>',
      to: ['marcglastonbury@live.co.uk'],
      subject: `New Testimonial from ${data.name} (${data.rating} stars)`,
      html: htmlContent,
    });

    console.log('Testimonial notification sent:', result);
    return result;
  } catch (error) {
    console.error('Error sending testimonial notification:', error);
    throw error;
  }
}
