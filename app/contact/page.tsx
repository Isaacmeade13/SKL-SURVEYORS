import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Contact Us - Get Your Free Property Survey Quote',
  description: 'Contact SKL Surveyors for professional property surveys. Call 07984 773 570 or email info@sklsurveyors.co.uk. Open Mon-Fri 8am-6pm. Free quotes and expert advice.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}