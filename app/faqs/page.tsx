"use client";
import { useState, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

type FAQ = { question: string; answer: ReactNode };

const faqs: FAQ[] = [
  {
    question: 'What is a house survey?',
    answer: (
      <p>
        A house survey is an expert inspection of a property’s condition, identifying potential problems for a prospective
        buyer. Conducted by a surveyor, the inspection results in a report detailing their findings. Surveys are typically
        done after the seller accepts the buyer’s offer, although the process differs in Scotland.
      </p>
    )
  },
  {
    question: 'Do I need a survey?',
    answer: (
      <p>
        When purchasing a house or flat, the additional cost of a survey might seem unnecessary. However, being aware of
        potential problems before finalizing your purchase allows you to make an informed decision about the price you’re
        willing to pay and budget for any required repairs. If significant issues are identified, you could use the survey
        report to negotiate with the seller. For instance, if the survey reveals repairs costing £10,000, you might request
        a £10,000 reduction in the property price or ask the seller to complete the repairs before exchanging contracts.
      </p>
    )
  },
  {
    question: 'House surveys vs. mortgage valuations',
    answer: (
      <p>
        When applying for a mortgage, the lender will conduct a valuation to ensure the property is worth the amount you’re
        borrowing. This valuation, often called a ‘survey,’ can be misleading as it is not comprehensive and might not even
        involve a physical inspection. We recommend arranging your own independent survey after your offer is accepted to
        avoid overpaying or purchasing a property with significant issues.
      </p>
    )
  },
  {
    question: 'How to find a surveyor',
    answer: (
      <div className="space-y-3">
        <p>
          Surveyors range from local independents to large companies. Regardless of whom you choose, ensure they are
          registered with RICS or RPSA:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            To find a RICS-accredited surveyor, visit{' '}
            <a href="https://www.ricsfirms.com" target="_blank" rel="noreferrer" className="text-[#DB5554] underline">
              ricsfirms.com
            </a>
            .
          </li>
          <li>
            For an RPSA surveyor, email{' '}
            <a href="mailto:info@rpsa.org.uk" className="text-[#DB5554] underline">
              info@rpsa.org.uk
            </a>{' '}
            or visit{' '}
            <a href="https://www.rpsa.org.uk/surveys" target="_blank" rel="noreferrer" className="text-[#DB5554] underline">
              rpsa.org.uk/surveys
            </a>
            .
          </li>
        </ul>
        <p>
          Some homebuyers find surveyors through local listings, personal recommendations, or comparison websites. Estate agents
          or mortgage lenders may also recommend local surveyors knowledgeable about the area.
        </p>
        <p className="font-semibold">When booking a survey:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Read the Terms of Engagement to understand what the surveyor will and will not do.</li>
          <li>Know the inspection date and report delivery timeline.</li>
          <li>Ensure you have direct contact with the surveyor to ask questions if needed.</li>
        </ul>
      </div>
    )
  },
  {
    question: 'Do I need a survey on a new-build?',
    answer: (
      <p>
        For new-build homes, a full house survey isn’t necessary, but a snagging survey can be beneficial. It identifies
        cosmetic issues like uneven plaster or sticking windows, and some surveyors provide detailed reports on structural
        problems, which can be more expensive. A snagging survey, costing around £300–£600, helps ensure issues are resolved
        before you move in.
      </p>
    )
  },
  {
    question: 'How long does a survey take?',
    answer: (
      <div className="space-y-2">
        <p>The duration of a house survey depends on the survey level and property size:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>A basic survey might take an hour.</li>
          <li>A mid-range survey could take up to three hours.</li>
          <li>A full structural survey varies significantly, sometimes taking a full day.</li>
        </ul>
      </div>
    )
  }
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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
            id="faqs-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('faqs-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">FAQs</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <span className="text-gray-600">FAQs</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Intro + Accordion */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="faqs-intro"
            data-animate
            className={`mb-10 sm:mb-12 transform transition-all duration-1000 ease-out ${
              visibleSections.has('faqs-intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-heading font-semibold tracking-tight text-gray-900">What is a residential property survey? (And other questions)…</h2>
            <p className="mt-4 text-gray-600 font-body text-base sm:text-lg leading-7">
              We know that the process of buying a property can be daunting, and it's completely normal to have lots of questions.
              We are the experts on the subject of residential property surveys and have listed some of the most commonly asked
              questions to help you. If you have anything specific you'd like to ask, please don't hesitate to get in touch.
            </p>
            <div className="mt-4 h-1 w-16 rounded bg-[#DB5554]" />
          </header>

          <div 
            id="faqs-accordion"
            data-animate
            className={`divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white transform transition-all duration-1000 ease-out delay-200 ${
              visibleSections.has('faqs-accordion') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {faqs.map((faq, idx) => (
              <div key={idx} className="group">
                <button
                  type="button"
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between hover:bg-gray-50"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-gray-900 font-heading text-lg transition-colors group-hover:text-[#DB5554]">{faq.question}</span>
                  <span className="ml-4 text-gray-500 transition-transform duration-300 ease-out">{openIndex === idx ? '−' : '+'}</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-5 sm:px-6 py-6 text-gray-700 font-body text-base sm:text-lg leading-7">
                      {faq.answer || 'Answer coming soon.'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


