"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function RoofSurveysPage() {
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
            id="roof-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('roof-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">Roof Surveys</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-gray-700">Services</Link>
              <span>/</span>
              <span className="text-gray-600">Roof Surveys</span>
            </nav>
          </div>
        </div>
      </section>

      {/* What's in a Roof Survey Report */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="roof-report-header"
            data-animate
            className={`mb-12 sm:mb-16 text-center transform transition-all duration-1000 ease-out ${
              visibleSections.has('roof-report-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-gray-900">What's in Your Roof Survey Report?</h2>
            <p className="mt-4 text-gray-600 font-body text-lg sm:text-xl leading-7 max-w-3xl mx-auto">
              Get comprehensive insights into your roof's condition with our detailed inspection reports
            </p>
            <div className="mt-6 h-1 w-20 rounded bg-[#DB5554] mx-auto" />
          </header>

          {/* Report Features Grid */}
          <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
            {/* Lifespan Assessment */}
            <div 
              id="roof-feature-1"
              data-animate
              className={`rounded-xl bg-gray-50 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 text-center transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('roof-feature-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 bg-[#DB5554] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lifespan Assessment</h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Predict how long your roof can function effectively without major repairs
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                Get Assessment
              </Link>
            </div>

            {/* Repair vs Replace */}
            <div 
              id="roof-feature-2"
              data-animate
              className={`rounded-xl bg-gray-50 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 text-center transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('roof-feature-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 bg-[#DB5554] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Repair vs Replace</h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Make informed decisions about whether to repair or replace your roof
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                Get Analysis
              </Link>
            </div>

            {/* Complete Inspection */}
            <div 
              id="roof-feature-3"
              data-animate
              className={`rounded-xl bg-gray-50 p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 text-center transform transition-all duration-1000 ease-out delay-600 ${
                visibleSections.has('roof-feature-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 bg-[#DB5554] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Complete Inspection</h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Thorough assessment of roof, gutters, chimneys, and all structural components
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                Book Survey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tenant/Leaseholder Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="tenant-header"
            data-animate
            className={`mb-12 sm:mb-16 text-center transform transition-all duration-1000 ease-out ${
              visibleSections.has('tenant-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-gray-900">Tenant or Leaseholder?</h2>
            <p className="mt-4 text-gray-600 font-body text-lg sm:text-xl leading-7 max-w-3xl mx-auto">
              Get the evidence you need when dealing with roof issues and unresponsive landlords
            </p>
            <div className="mt-6 h-1 w-20 rounded bg-[#DB5554] mx-auto" />
          </header>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
            {/* Damage Assessment */}
            <div 
              id="tenant-feature-1"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 text-center transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('tenant-feature-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 bg-[#DB5554] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Damage Assessment</h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Expert analysis of leak causes and damage extent with detailed documentation
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                Get Assessment
              </Link>
            </div>

            {/* Landlord Reports */}
            <div 
              id="tenant-feature-2"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 text-center transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('tenant-feature-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 bg-[#DB5554] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Landlord Reports</h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Professional reports for landlords detailing necessary repairs and responsibilities
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                Request Report
              </Link>
            </div>

            {/* Legal Support */}
            <div 
              id="tenant-feature-3"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 text-center transform transition-all duration-1000 ease-out delay-600 ${
                visibleSections.has('tenant-feature-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="w-12 h-12 bg-[#DB5554] rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Legal Support</h3>
              <p className="text-gray-600 text-sm leading-6 mb-6">
                Critical evidence for legal disputes when landlords refuse necessary repairs
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                Get Legal Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Freeholder & Insurance Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="grid gap-12 sm:gap-16 md:grid-cols-2">
            {/* Freeholder Section */}
            <div 
              id="freeholder-section"
              data-animate
              className={`transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('freeholder-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-gray-900 mb-4">Freeholder?</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-7">
                  Get professional assessments to communicate effectively with leaseholders
                </p>
                <div className="mt-4 h-1 w-16 rounded bg-[#DB5554] mx-auto" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Damage Assessment</h3>
                    <p className="text-gray-600 text-sm leading-6 mt-1">
                      Thorough evaluation of roof damage and repair requirements
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Clear Communication</h3>
                    <p className="text-gray-600 text-sm leading-6 mt-1">
                      Detailed reports designed to prompt timely action from freeholders
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                  Get Freeholder Report
                </Link>
              </div>
            </div>

            {/* Insurance Section */}
            <div 
              id="insurance-section"
              data-animate
              className={`transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('insurance-section') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-gray-900 mb-4">Insurance Claims</h2>
                <p className="text-gray-600 text-base sm:text-lg leading-7">
                  Independent survey reports to support your insurance claims
                </p>
                <div className="mt-4 h-1 w-16 rounded bg-[#DB5554] mx-auto" />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Comprehensive Documentation</h3>
                    <p className="text-gray-600 text-sm leading-6 mt-1">
                      Detailed photographs and analysis of all damage aspects
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#DB5554] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Claim Support</h3>
                    <p className="text-gray-600 text-sm leading-6 mt-1">
                      Professional reports to ensure your insurance provider fulfills obligations
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center justify-center w-full bg-[#DB5554] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                  Get Insurance Report
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drone/Camera Pole Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="drone-header"
            data-animate
            className={`mb-12 sm:mb-16 text-center transform transition-all duration-1000 ease-out ${
              visibleSections.has('drone-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-gray-900">Advanced Drone & Camera Technology</h2>
            <p className="mt-4 text-gray-600 font-body text-lg sm:text-xl leading-7 max-w-3xl mx-auto">
              Get a hawk's eye view of your roof with our cutting-edge drone and camera pole technology
            </p>
            <div className="mt-6 h-1 w-20 rounded bg-[#DB5554] mx-auto" />
          </header>

          <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
            {/* Drone Technology */}
            <div 
              id="drone-tech"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 transform transition-all duration-1000 ease-out delay-200 ${
                visibleSections.has('drone-tech') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#DB5554] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Drone Surveys</h3>
                <p className="text-gray-600 text-sm leading-6">
                  High-resolution aerial photography and thermal imaging for comprehensive roof analysis
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DB5554] rounded-full"></div>
                  <span className="text-sm text-gray-600">Ground-level safety</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DB5554] rounded-full"></div>
                  <span className="text-sm text-gray-600">Perfect for Greater London properties</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DB5554] rounded-full"></div>
                  <span className="text-sm text-gray-600">CAA compliant operations</span>
                </div>
              </div>
            </div>

            {/* Camera Pole Technology */}
            <div 
              id="camera-pole"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-200 transform transition-all duration-1000 ease-out delay-400 ${
                visibleSections.has('camera-pole') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-[#DB5554] rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">360° Camera Pole</h3>
                <p className="text-gray-600 text-sm leading-6">
                  4K resolution with 72MB capacity, extending up to 30ft for restricted areas
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DB5554] rounded-full"></div>
                  <span className="text-sm text-gray-600">4K & 72MB high-resolution</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DB5554] rounded-full"></div>
                  <span className="text-sm text-gray-600">Up to 30ft telescopic reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#DB5554] rounded-full"></div>
                  <span className="text-sm text-gray-600">Ideal for restricted London areas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Single CTA for both technologies */}
          <div 
            id="tech-cta"
            data-animate
            className={`mt-12 text-center transform transition-all duration-1000 ease-out delay-600 ${
              visibleSections.has('tech-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#DB5554] px-8 py-4 text-lg font-medium text-white shadow-sm hover:opacity-90 rounded-none">
              Book Your Roof Survey
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full">
        <div className="relative h-[40svh] min-h-[320px] w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#DB5554] to-[#e4574e]" />
          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0">
            <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-full items-center">
                <div 
                  id="roof-cta"
                  data-animate
                  className={`max-w-3xl text-white transform transition-all duration-1000 ease-out ${
                    visibleSections.has('roof-cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h2 className="text-3xl sm:text-4xl font-semibold">Ready for a Professional Roof Survey?</h2>
                  <p className="mt-4 text-lg sm:text-xl text-white/95 drop-shadow">
                    Get a comprehensive assessment of your roof's condition with our advanced drone technology and expert analysis. 
                    Contact us today to schedule your roof survey.
                  </p>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#DB5554] px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg font-medium shadow-sm hover:bg-gray-100 rounded-none">Contact Us Today</Link>
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
