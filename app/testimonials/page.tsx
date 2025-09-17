import type { Metadata } from 'next';
import TestimonialsPageClient from './TestimonialsPageClient';

export const metadata: Metadata = {
  title: 'Client Testimonials - What Our Customers Say',
  description: 'Read genuine testimonials from satisfied clients about SKL Surveyors professional property surveying services. See why customers choose us for their building and roof surveys.',
};

export default function TestimonialsPage() {
  return <TestimonialsPageClient />;
}