"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function PrivacyPage() {
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
            id="privacy-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('privacy-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">Privacy Policy</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Privacy Policy</span>
            </nav>
          </div>
          <div 
            id="privacy-date"
            data-animate
            className={`mt-4 transform transition-all duration-1000 ease-out delay-200 ${
              visibleSections.has('privacy-date') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="text-lg text-gray-600">Effective Date: 4th July 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          
          {/* Introduction */}
          <div 
            id="introduction"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-200 ${
              visibleSections.has('introduction') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-7 mb-8">
              Welcome to SKL Surveyors. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.sklsurveyors.co.uk, use our services, or interact with us in any other way.
            </p>
          </div>

          {/* Information We Collect */}
          <div 
            id="information-collect"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-400 ${
              visibleSections.has('information-collect') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <p className="text-gray-600 leading-7 mb-4">
              We may collect and process the following types of information:
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Identification Information</h3>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-6 space-y-1 ml-4">
              <li>Name</li>
              <li>Address</li>
              <li>Email address</li>
              <li>Phone number</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Non-Personal Identification Information</h3>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-6 space-y-1 ml-4">
              <li>Browser type</li>
              <li>Operating system</li>
              <li>Pages visited on our website</li>
              <li>Time and date of visit</li>
              <li>Referring site details (such as the website you came from)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Surveyor Service Data</h3>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-8 space-y-1 ml-4">
              <li>Property details</li>
              <li>Survey reports</li>
              <li>Client feedback and communication</li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div 
            id="how-we-use"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-600 ${
              visibleSections.has('how-we-use') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-7 mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-8 space-y-1 ml-4">
              <li>Providing and managing your account</li>
              <li>Supplying our services to you</li>
              <li>Improving our website and services</li>
              <li>Communicating with you, including responding to inquiries and sending updates</li>
              <li>Conducting surveys and feedback for quality assurance</li>
              <li>Complying with legal obligations</li>
            </ul>
          </div>

          {/* Sharing Your Information */}
          <div 
            id="sharing-information"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-800 ${
              visibleSections.has('sharing-information') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Sharing Your Information</h2>
            <p className="text-gray-600 leading-7 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to outside parties except in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-8 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</li>
              <li><strong>Legal Requirements:</strong> We may release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.</li>
            </ul>
          </div>

          {/* Data Security */}
          <div 
            id="data-security"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-1000 ${
              visibleSections.has('data-security') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-600 leading-7 mb-8">
              We implement a variety of security measures to maintain the safety of your personal information. Your personal data is stored in secure networks and is only accessible by a limited number of persons who have special access rights to such systems and are required to keep the information confidential.
            </p>
          </div>

          {/* Your Data Protection Rights */}
          <div 
            id="data-protection-rights"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-1200 ${
              visibleSections.has('data-protection-rights') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Data Protection Rights</h2>
            <p className="text-gray-600 leading-7 mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-7 mb-8 space-y-2 ml-4">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate or complete information you believe</li>
            </ul>
          </div>

          {/* Contact Information */}
          <div 
            id="contact-info"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-1400 ${
              visibleSections.has('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 leading-7 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> info@sklsurveyors.co.uk</p>
                <p><strong>Phone:</strong> 07984 773 570</p>
                <p><strong>Website:</strong> www.sklsurveyors.co.uk</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
