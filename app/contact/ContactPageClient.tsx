"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { useEffect, useState } from 'react';

export default function ContactPageClient() {
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
            id="contact-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('contact-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">Contact Us</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Contact</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 lg:items-start">
            {/* Contact Information */}
            <div 
              id="contact-info"
              data-animate
              className={`bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6 sm:p-8 h-full transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mb-6">
                <h2 className="text-2xl font-heading font-semibold tracking-tight text-gray-900 mb-3">
                  Get in Touch
                </h2>
                <p className="text-gray-600 text-sm sm:text-base leading-6">
                  Ready to book your survey? Contact us today for a free quote and expert advice.
                </p>
                <div className="mt-3 h-1 w-16 rounded bg-[#DB5554]" />
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Call us</h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-6">
                      <a href="tel:07984773570" className="hover:text-[#DB5554] transition-colors">
                        07984 773 570
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-1">Email</h3>
                    <div className="space-y-1">
                      <p className="text-gray-600 text-sm sm:text-base leading-6">
                        <a href="mailto:info@sklsurveyors.co.uk" className="hover:text-[#DB5554] transition-colors">
                          info@sklsurveyors.co.uk
                        </a>
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base leading-6">
                        <a href="mailto:marcglastonbury@live.co.uk" className="hover:text-[#DB5554] transition-colors">
                          marcglastonbury@live.co.uk
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-600 text-sm sm:text-base leading-6">
                      <div className="flex justify-between">
                        <span>Monday</span>
                        <span>8 am – 6 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tuesday</span>
                        <span>8 am – 6 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Wednesday</span>
                        <span>8 am – 6 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Thursday</span>
                        <span>8 am – 6 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friday</span>
                        <span>8 am – 6 pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday, Sunday</span>
                        <span className="text-gray-500">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Why Choose SKL Surveyors?</h4>
                <ul className="space-y-1 text-gray-600 text-xs leading-5">
                  <li className="flex items-center">
                    <svg className="w-3 h-3 text-[#DB5554] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    RICS-registered surveyors
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 text-[#DB5554] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Comprehensive reports
                  </li>
                  <li className="flex items-center">
                    <svg className="w-3 h-3 text-[#DB5554] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Free quotes and advice
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div 
              id="contact-form"
              data-animate
              className={`transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('contact-form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="faq-header"
            data-animate
            className={`mb-12 sm:mb-16 text-center transform transition-all duration-1000 ease-out ${
              visibleSections.has('faq-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-gray-600 font-body text-lg sm:text-xl leading-7 max-w-3xl mx-auto">
              Quick answers to common questions about our survey services
            </p>
            <div className="mt-6 h-1 w-20 rounded bg-[#DB5554] mx-auto" />
          </header>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            {/* FAQ Left Column */}
            <div 
              id="faq-left"
              data-animate
              className={`transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('faq-left') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can you provide a quote?</h3>
                  <p className="text-gray-600 text-sm leading-6">
                    We typically respond to all inquiries within 24 hours with a detailed quote and survey timeline.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What areas do you cover?</h3>
                  <p className="text-gray-600 text-sm leading-6">
                    We provide survey services across Greater London and surrounding areas. Contact us to confirm coverage for your specific location.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer emergency surveys?</h3>
                  <p className="text-gray-600 text-sm leading-6">
                    Yes, we can arrange emergency surveys for urgent situations such as insurance claims or safety concerns.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Right Column */}
            <div 
              id="faq-right"
              data-animate
              className={`transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('faq-right') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">What's included in your reports?</h3>
                  <p className="text-gray-600 text-sm leading-6">
                    Our comprehensive reports include detailed findings, high-resolution images, recommendations, and cost estimates where applicable.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Are your surveyors RICS qualified?</h3>
                  <p className="text-gray-600 text-sm leading-6">
                    Yes, all our surveyors are RICS-registered professionals with extensive experience in property surveying.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Can you help with insurance claims?</h3>
                  <p className="text-gray-600 text-sm leading-6">
                    Absolutely. We provide independent survey reports specifically designed to support insurance claims and legal proceedings.
                  </p>
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
