"use client";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <main className="min-h-[70dvh]">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-100 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div 
            id="about-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('about-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">About Us</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <span className="text-gray-600">About Us</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Marc Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid gap-10 lg:gap-12 md:grid-cols-[320px,1fr]">
            {/* Left: Image */}
            <div 
              id="marc-image"
              data-animate
              className={`mx-auto md:mx-0 transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('marc-image') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-lg overflow-hidden ring-1 ring-gray-200">
                <Image src="/images/marc.png" alt="Marc Glastonbury" fill className="object-cover" />
              </div>
            </div>

            {/* Right: Text */}
            <div 
              id="marc-content"
              data-animate
              className={`transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('marc-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <header>
                <h2 className="text-3xl font-heading font-semibold text-gray-900">Marc Glastonbury</h2>
                <div className="mt-3 h-1 w-16 rounded bg-[#DB5554]" />
              </header>

              <div className="mt-6 space-y-6 text-gray-700 leading-8 font-body">
                <p>
                  Before qualifying as a RICS residential surveyor, I owned and operated a construction company for 22 years,
                  primarily serving South East London and East Sussex. During that time, I was also engaged in property development.
                  This dual role in construction and property renovation has provided me with extensive practical experience and a deep
                  understanding of the industry—insights that many surveyors may lack.
                </p>

                <p>
                  Currently, my family and I reside in Robertsbridge, where we have chosen to focus on raising our children, leading us
                  to step away from property development. The physical aspects of carrying out building works for over two decades have taken their toll.
                  Not wanting to step away from the industry, I have decided to leverage my extensive knowledge and experience in a new capacity as a surveyor.
                </p>

                <p>
                  Throughout my career, I have been dedicated to offering clients the highest quality advice, carefully exploring various options to
                  meet their specific needs. I understand that purchasing a home is a significant and often daunting investment. Therefore, I advocate for
                  the importance of obtaining a survey before exchanging contracts. A thorough survey not only helps avoid unpleasant surprises but also
                  serves as a valuable negotiation tool to potentially reduce the purchase price if significant defects are discovered.
                </p>

                <p>
                  Investing in a survey represents a small fraction of the total property cost but can provide substantial benefits and peace of mind in the long term.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section (above Footer) */}
      <section className="relative w-full">
        <div className="relative h-[40svh] min-h-[320px] w-full">
          <Image src="/images/Landscape-images/roof.png" alt="CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0">
            <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-full items-center">
                <div 
                  id="about-cta"
                  data-animate
                  className={`max-w-3xl text-white transform transition-all duration-1000 ease-out ${
                    visibleSections.has('about-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h2 className="text-3xl sm:text-4xl font-semibold">A survey with SKL Surveyors</h2>
                  <p className="mt-4 text-lg sm:text-xl text-gray-100/95 drop-shadow">Find out if the property you are looking to buy is hiding any secrets.</p>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center justify-center bg-[#DB5554] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">Contact Us Today!</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


