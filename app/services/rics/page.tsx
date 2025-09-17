"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function RICSSurveysPage() {
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
            id="rics-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('rics-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">RICS Surveys</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-gray-700">Services</Link>
              <span>/</span>
              <span className="text-gray-600">RICS Surveys</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="rics-intro-header"
            data-animate
            className={`mb-10 sm:mb-12 transform transition-all duration-1000 ease-out ${
              visibleSections.has('rics-intro-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-heading font-semibold tracking-tight text-gray-900">Professional RICS Property Surveys</h2>
            <p className="mt-4 text-gray-600 font-body text-base sm:text-lg leading-7">
              Our RICS-registered surveyors provide comprehensive property assessments to help you make informed decisions. 
              Choose from three levels of survey detail to match your property type and requirements.
            </p>
            <div className="mt-4 h-1 w-16 rounded bg-[#DB5554]" />
          </header>

          {/* Survey Cards */}
          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3">
            {/* Level 1 - Condition Report */}
            <div 
              id="rics-card-1"
              data-animate
              className={`rounded-xl bg-gray-50 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('rics-card-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900">RICS Condition Report – Level 1</h3>
                <p className="mt-2 text-gray-600 font-body">
                  A basic overview of the property's condition, highlighting urgent issues without extensive detail, ideal for newer homes.
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-heading font-semibold text-[#DB5554]">From £500</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Details the construction and condition of the property as of the inspection date, noting potential issues and visible defects before any transaction takes place.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Identifies serious problems or issues that need urgent attention and/or further investigation to prevent serious damage.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    For Level 1 and 2 surveys, this includes a standard visual inspection without removing secured panels, electrical fittings, inspection chamber covers, and other similar features.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Level 2 - HomeBuyer Report */}
            <div 
              id="rics-card-2"
              data-animate
              className={`rounded-xl bg-gray-50 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('rics-card-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900">RICS HomeBuyer Report – Level 2</h3>
                <p className="mt-2 text-gray-600 font-body">
                  A more comprehensive analysis, including defects that might affect the property's value, suitable for standard properties in reasonable condition.
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-heading font-semibold text-[#DB5554]">From £600</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 font-body text-sm font-semibold">Includes everything from Level 1, plus:</p>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Helps you decide whether you need extra advice before committing to purchase.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Advises on the amount of ongoing maintenance required in the future and helps you budget for any repairs or restoration.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    More extensive roof space and drainage chamber inspections.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                  Get Quote
                </Link>
              </div>
            </div>

            {/* Level 3 - Building Survey */}
            <div 
              id="rics-card-3"
              data-animate
              className={`rounded-xl bg-gray-50 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 transform transition-all duration-1000 ease-out delay-600 ${
                visibleSections.has('rics-card-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-heading font-semibold text-gray-900">RICS Building Survey – Level 3</h3>
                <p className="mt-2 text-gray-600 font-body">
                  The most detailed, providing an in-depth evaluation of the property's structure and condition, recommended for older or significantly altered buildings.
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-heading font-semibold text-[#DB5554]">From £700</span>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-gray-700 font-body text-sm font-semibold">Includes everything from Level 1, plus:</p>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Helps you decide whether you need extra advice before committing to purchase.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Advises on the amount of ongoing maintenance required in the future and helps you budget for any repairs or restoration.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    More extensive roof space and drainage chamber inspections.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Establishes how the property is built, the materials used, and how these will stand the test of time.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Identifies visible defects and potential issues that may be caused by hidden defects.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Outlines repair options, provides a timeline for completing them, and explains the consequences of delaying or neglecting these repairs.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-600 text-lg">✓</span>
                  <p className="text-gray-700 font-body text-sm">
                    Provides a more extensive and detailed visual inspection, covering a broader range of issues with a thorough examination of the roof space, grounds, floors, and services.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-5 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
