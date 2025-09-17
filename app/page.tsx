import type { Metadata } from 'next';
import HomePageClient from './HomePageClient';

export const metadata: Metadata = {
  title: 'Home - Professional Property Surveying Services',
  description: 'SKL Surveyors provides professional RICS-registered property surveys, roof surveys with drone technology, and comprehensive building assessments across Greater London. Expert advice for property buyers.',
};

export default function HomePage() {
  return <HomePageClient />;
}