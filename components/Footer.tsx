"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [openDropdowns, setOpenDropdowns] = useState<{[key: string]: boolean}>({});

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };
  return (
    <footer className="bg-[#191919] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Mobile Dropdown Layout */}
        <div className="md:hidden space-y-0">
          {/* Contact Information Dropdown */}
          <div className="border-b border-gray-600">
            <button 
              className="w-full flex items-center justify-between py-4 text-left"
              onClick={() => toggleDropdown('contact')}
            >
              <span className="text-white font-semibold text-lg">CONTACT INFORMATION</span>
              <svg 
                className={`h-5 w-5 text-white transition-transform duration-200 ${openDropdowns.contact ? 'rotate-90' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.contact ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pb-4 space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">Phone:</p>
                  <p className="text-white text-base sm:text-lg leading-7">07984 773570</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email:</p>
                  <div className="space-y-1">
                    <a href="mailto:info@sklsurveyors.co.uk" className="block text-white text-base sm:text-lg leading-7 hover:text-[#DB5554] transition-colors">
                      info@sklsurveyors.co.uk
                    </a>
                    <a href="mailto:marcglastonbury@live.co.uk" className="block text-white text-base sm:text-lg leading-7 hover:text-[#DB5554] transition-colors">
                      marcglastonbury@live.co.uk
                    </a>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 text-base sm:text-lg leading-7">We are open:</p>
                  <p className="text-white text-base sm:text-lg leading-7">Mon - Fri: 8 AM - 6 PM</p>
                </div>
                <div className="pt-2 space-y-2">
                  <Link href="/privacy" className="block text-white text-base sm:text-lg leading-7 underline underline-offset-4 hover:text-gray-300">Privacy policy</Link>
                  <Link href="/terms-and-conditions" className="block text-white text-base sm:text-lg leading-7 underline underline-offset-4 hover:text-gray-300">Terms and conditions</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Accreditations Dropdown */}
          <div className="border-b border-gray-600">
            <button 
              className="w-full flex items-center justify-between py-4 text-left"
              onClick={() => toggleDropdown('accreditations')}
            >
              <span className="text-white font-semibold text-lg">ACCREDITATIONS</span>
              <svg 
                className={`h-5 w-5 text-white transition-transform duration-200 ${openDropdowns.accreditations ? 'rotate-90' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.accreditations ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pb-4 space-y-3">
                <div className="h-12 w-40">
                  <img src="/svg/ricss.svg" alt="RICS accreditation" className="h-full w-full object-contain object-left" />
                </div>
                <p className="text-gray-300 text-base sm:text-lg leading-7">
                  Accredited by the Royal Institute of Chartered Surveyors (RICS) and a member of the
                  Residential Property Surveyors Association (RPSA). Fully insured, comprehensive residential
                  property surveys you can rely on.
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Dropdown */}
          <div className="border-b border-gray-600">
            <button 
              className="w-full flex items-center justify-between py-4 text-left"
              onClick={() => toggleDropdown('newsletter')}
            >
              <span className="text-white font-semibold text-lg">NEWSLETTER</span>
              <svg 
                className={`h-5 w-5 text-white transition-transform duration-200 ${openDropdowns.newsletter ? 'rotate-90' : ''}`} 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openDropdowns.newsletter ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pb-4">
                <p className="text-white text-sm mb-3">We've got plenty of property insights</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#DB5554]"
                  />
                  <button className="px-4 py-2 bg-[#DB5554] text-white text-sm rounded hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-3 gap-8 items-start">
          {/* Left: Logo */}
          <div className="flex flex-col items-start">
            <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
              <img src="/svg/white.svg" alt="SKL Surveyors logo" className="h-full w-full object-contain" />
            </div>
          </div>

          {/* Middle: About Text */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">SKL Surveyors</h3>
            <p className="mt-3 text-base sm:text-lg text-gray-300 leading-7">
              Accredited by the Royal Institute of Chartered Surveyors (RICS) and a member of the
              Residential Property Surveyors Association (RPSA). Fully insured, comprehensive residential
              property surveys you can rely on.
            </p>
            <div className="pt-6">
              <div className="h-12 sm:h-14 lg:h-16 w-40 sm:w-48 lg:w-56">
                <img src="/svg/ricss.svg" alt="RICS accreditation" className="h-full w-full object-contain object-left" />
              </div>
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white">Contact Us</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <p className="text-gray-400">Phone:</p>
                <p className="mt-1 text-white text-base sm:text-lg leading-7">07984 773570</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <div className="mt-1 space-y-1">
                  <a href="mailto:info@sklsurveyors.co.uk" className="block text-white text-base sm:text-lg leading-7 hover:text-[#DB5554] transition-colors">
                    info@sklsurveyors.co.uk
                  </a>
                  <a href="mailto:marcglastonbury@live.co.uk" className="block text-white text-base sm:text-lg leading-7 hover:text-[#DB5554] transition-colors">
                    marcglastonbury@live.co.uk
                  </a>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-base sm:text-lg leading-7">We are open:</p>
                <p className="mt-1 text-white text-base sm:text-lg leading-7">Mon - Fri: 8 AM - 6 PM</p>
              </div>
              <div className="pt-3 space-y-2">
                <Link href="/privacy" className="underline underline-offset-4 hover:text-white text-base sm:text-lg leading-7">Privacy policy</Link>
                <div>
                  <Link href="/terms-and-conditions" className="underline underline-offset-4 hover:text-white text-base sm:text-lg leading-7">Terms and conditions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-xs sm:text-[13px] text-gray-500">
          <p>© {new Date().getFullYear()} SKL Surveyors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}


