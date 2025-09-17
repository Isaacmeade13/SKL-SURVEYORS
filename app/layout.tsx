import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap'
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'SKL Surveyors - Professional Property Surveying Services',
    template: '%s | SKL Surveyors'
  },
  description: 'Professional RICS-registered property surveyors offering comprehensive building surveys, roof surveys, and property assessments across Greater London. Expert advice for property buyers.',
  keywords: ['property surveyors', 'RICS surveyors', 'building surveys', 'roof surveys', 'property assessment', 'London surveyors', 'home surveys'],
  authors: [{ name: 'SKL Surveyors' }],
  creator: 'SKL Surveyors',
  publisher: 'SKL Surveyors',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://sklsurveyors.co.uk',
    siteName: 'SKL Surveyors',
    title: 'SKL Surveyors - Professional Property Surveying Services',
    description: 'Professional RICS-registered property surveyors offering comprehensive building surveys, roof surveys, and property assessments across Greater London.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SKL Surveyors - Professional Property Surveying',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SKL Surveyors - Professional Property Surveying Services',
    description: 'Professional RICS-registered property surveyors offering comprehensive building surveys, roof surveys, and property assessments across Greater London.',
    images: ['/images/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${cormorant.variable} min-h-dvh antialiased bg-white text-gray-900 font-body`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}

