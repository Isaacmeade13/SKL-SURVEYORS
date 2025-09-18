"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function TermsAndConditionsPage() {
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
            id="terms-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('terms-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">Terms and Conditions</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Terms and Conditions</span>
            </nav>
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
              Welcome to SKL Surveyors. These Terms and Conditions govern your use of our website located at www.sklsurveyors.co.uk and the services we provide. By accessing or using our Site and Services, you agree to be bound by these Terms.
            </p>
          </div>

          {/* Services */}
          <div 
            id="services"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-400 ${
              visibleSections.has('services') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services</h2>
            <p className="text-gray-600 leading-7 mb-8">
              SKL Surveyors provides professional residential surveying services. Our Services include, but are not limited to, property surveys, valuations, and related consulting services.
            </p>
          </div>

          {/* Use of the Site */}
          <div 
            id="use-of-site"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-600 ${
              visibleSections.has('use-of-site') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of the Site</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.1. Eligibility</h3>
            <p className="text-gray-600 leading-7 mb-4">
              You must be at least 18 years old to use our Site and Services. By using our Site and Services, you represent and warrant that you meet this requirement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.2. User Responsibilities</h3>
            <p className="text-gray-600 leading-7 mb-4">
              You agree to use the Site and Services only for lawful purposes. You are responsible for ensuring that your use of the Site and Services does not violate any applicable laws, regulations, or third-party rights.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3.3. Account Registration</h3>
            <p className="text-gray-600 leading-7 mb-8">
              To access certain features of our Services, you may need to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and any activities or actions under your account.
            </p>
          </div>

          {/* Payment and Fees */}
          <div 
            id="payment-fees"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-800 ${
              visibleSections.has('payment-fees') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Payment and Fees</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.1. Service Fees</h3>
            <p className="text-gray-600 leading-7 mb-4">
              Fees for our Services will be outlined in the service agreement provided at the time of booking. All fees are non-refundable unless otherwise stated in the service agreement.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4.2. Payment Terms</h3>
            <p className="text-gray-600 leading-7 mb-8">
              Payment for Services is due upon receipt of the invoice unless otherwise agreed in writing. We reserve the right to suspend or terminate access to the Services if payment is not received on time.
            </p>
          </div>

          {/* Intellectual Property */}
          <div 
            id="intellectual-property"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-1000 ${
              visibleSections.has('intellectual-property') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1. Ownership</h3>
            <p className="text-gray-600 leading-7 mb-4">
              All content on the Site, including text, graphics, logos, images, and software, is the property of SKL Surveyors or its content suppliers and is protected by intellectual property laws.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2. Limited Licence</h3>
            <p className="text-gray-600 leading-7 mb-4">
              We grant you a limited, non-exclusive, non-transferable, and revocable licence to access and use the Site for your personal and non-commercial use.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3. Restrictions</h3>
            <p className="text-gray-600 leading-7 mb-8">
              You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of our material on our Site without our prior written consent.
            </p>
          </div>

          {/* Contact Information */}
          <div 
            id="contact-info"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-1200 ${
              visibleSections.has('contact-info') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gray-50 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600 leading-7 mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
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
