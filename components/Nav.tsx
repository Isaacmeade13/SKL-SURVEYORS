"use client";
import Link from 'next/link';
import { useEffect, useLayoutEffect, useState } from 'react';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<{[key: string]: boolean}>({});

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileDropdowns(prev => ({
      ...prev,
      [dropdown]: !prev[dropdown]
    }));
  };

  // Ensure correct initial state before paint
  useLayoutEffect(() => {
    setScrolled(typeof window !== 'undefined' ? window.scrollY > 10 : false);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('load', onScroll, { passive: true } as AddEventListenerOptions);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('load', onScroll as any);
    };
  }, []);

  return (
    <>
      {/* Fixed Header: Top Bar + Main Nav (top bar collapses on scroll) */}
      <div className={`fixed top-0 left-0 right-0 z-[9999] w-full ${scrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'} transition-[background-color,box-shadow] duration-300 ease-out`}> 
        {/* Collapsing Top Info Bar */}
        <div className={`overflow-hidden border-b border-gray-100 transition-all duration-300 ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'} bg-[#DB5554]`}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-10 items-center justify-center sm:justify-end gap-2 sm:gap-4 lg:gap-8 text-xs sm:text-sm text-white">
              <a href="tel:07984773570" className="inline-flex items-center gap-1 sm:gap-2 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 sm:h-4 sm:w-4"><path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.1c.99 0 1.861.64 2.16 1.583l.74 2.347a2.25 2.25 0 01-.519 2.244l-1.05 1.05a.75.75 0 00-.142.86 12.035 12.035 0 006.026 6.026.75.75 0 00.86-.142l1.05-1.05a2.25 2.25 0 012.244-.519l2.347.74a2.25 2.25 0 011.583 2.16v2.1c0 1.243-1.007 2.25-2.25 2.25H18A15.75 15.75 0 012.25 6.75V6.75z"/></svg>
                <span className="hidden sm:inline">07984 773 570</span>
                <span className="sm:hidden">07984 773 570</span>
              </a>
              <a href="mailto:info@sklsurveyors.co.uk" className="inline-flex items-center gap-1 sm:gap-2 hover:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 sm:h-4 sm:w-4"><path d="M1.5 8.67v8.58A2.25 2.25 0 003.75 19.5h16.5a2.25 2.25 0 002.25-2.25V8.67l-8.708 5.08a3.75 3.75 0 01-3.784 0L1.5 8.67z"/><path d="M22.5 6.908V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v.158l9.614 5.61a2.25 2.25 0 002.272 0L22.5 6.908z"/></svg>
                <span className="hidden sm:inline">info@sklsurveyors.co.uk</span>
                <span className="sm:hidden">Email</span>
              </a>
              <div className="inline-flex items-center gap-1 sm:gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-3 w-3 sm:h-4 sm:w-4"><path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM12.75 6a.75.75 0 00-1.5 0v6c0 .199.079.39.22.53l3.75 3.75a.75.75 0 101.06-1.06l-3.53-3.53V6z" clipRule="evenodd"/></svg>
                <span className="hidden sm:inline">Monday – Friday 8 AM – 6 PM</span>
                <span className="sm:hidden">8-6</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Nav Row */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-center md:justify-between h-20 md:h-20">
          <div className="flex items-center gap-3 md:gap-3">
            <Link href="/" className="flex items-center gap-2">
                <img src="/svg/surveyors-svg.svg" alt="SKL Surveyors" className="h-16 md:h-14 lg:h-16 w-auto" />
              <span className="sr-only">SKL Surveyors</span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-9 text-base md:text-lg font-bold text-[#DB5554]">
            <Link href="/" className="relative transition-colors pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-full after:bg-[#DB5554]">Home</Link>

            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('about')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="group inline-flex items-center gap-1 hover:opacity-90 transition-opacity relative pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#DB5554] after:transition-all after:duration-200 group-hover:after:w-full">
                About Us
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`pointer-events-none opacity-0 transition-opacity absolute left-0 top-full pt-2 w-48 rounded-md border border-gray-100 bg-white shadow-lg ${openDropdown === 'about' ? 'opacity-100 pointer-events-auto' : ''}`}>
                <div className="py-2">
                  <Link href="/about" className="block px-4 py-2 text-sm text-[#DB5554] hover:bg-gray-50">About Us</Link>
                  <Link href="/testimonials" className="block px-4 py-2 text-sm text-[#DB5554] hover:bg-gray-50">Testimonials</Link>
                </div>
              </div>
            </div>

            <div 
              className="relative group"
              onMouseEnter={() => setOpenDropdown('services')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="group inline-flex items-center gap-1 hover:opacity-90 transition-opacity relative pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#DB5554] after:transition-all after:duration-200 group-hover:after:w-full">
                Services
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </button>
              <div className={`pointer-events-none opacity-0 transition-opacity absolute left-0 top-full pt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg ${openDropdown === 'services' ? 'opacity-100 pointer-events-auto' : ''}`}>
                <div className="py-2">
                  <Link href="/services/rics" className="block px-4 py-2 text-sm text-[#DB5554] hover:bg-gray-50">RICS Surveys</Link>
                  <Link href="/services/roof" className="block px-4 py-2 text-sm text-[#DB5554] hover:bg-gray-50">Roof Surveys</Link>
                  <a href="https://www.sklpropertyfinders.co.uk/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 text-sm text-[#DB5554] hover:bg-gray-50">Property Finding</a>
                </div>
              </div>
            </div>

            <Link href="/faqs" className="relative hover:opacity-90 transition-opacity pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#DB5554] after:transition-all after:duration-200 hover:after:w-full">FAQs</Link>
            <Link href="/contact" className="relative hover:opacity-90 transition-opacity pb-1 after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:w-0 after:bg-[#DB5554] after:transition-all after:duration-200 hover:after:w-full">Contact</Link>
          </nav>

          <button 
            className="md:hidden absolute right-4 inline-flex items-center justify-center rounded-md p-2 text-[#DB5554]" 
            aria-label="Open menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[9998] bg-black/50 md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div className={`fixed top-0 left-0 z-[9999] h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
              <img src="/svg/surveyors-svg.svg" alt="SKL Surveyors" className="h-12 w-auto" />
              <span className="text-lg font-bold text-[#DB5554]">SKL Surveyors</span>
            </Link>
            <button 
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-500 hover:text-gray-700" 
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-6">
              <Link 
                href="/" 
                className="block text-lg font-semibold text-[#DB5554] hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-3">
                <button 
                  className="flex items-center justify-between w-full text-lg font-semibold text-[#DB5554] hover:opacity-80 transition-opacity"
                  onClick={() => toggleMobileDropdown('about')}
                >
                  About Us
                  <svg 
                    className={`h-5 w-5 transition-transform duration-200 ${mobileDropdowns.about ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${mobileDropdowns.about ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-2">
                    <Link 
                      href="/about" 
                      className="block text-base text-[#DB5554] hover:opacity-80 transition-opacity"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/testimonials" 
                      className="block text-base text-[#DB5554] hover:opacity-80 transition-opacity"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button 
                  className="flex items-center justify-between w-full text-lg font-semibold text-[#DB5554] hover:opacity-80 transition-opacity"
                  onClick={() => toggleMobileDropdown('services')}
                >
                  Services
                  <svg 
                    className={`h-5 w-5 transition-transform duration-200 ${mobileDropdowns.services ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${mobileDropdowns.services ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="pl-4 space-y-2">
                    <Link 
                      href="/services/rics" 
                      className="block text-base text-[#DB5554] hover:opacity-80 transition-opacity"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      RICS Surveys
                    </Link>
                    <Link 
                      href="/services/roof" 
                      className="block text-base text-[#DB5554] hover:opacity-80 transition-opacity"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Roof Surveys
                    </Link>
                    <a 
                      href="https://www.sklpropertyfinders.co.uk/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-base text-[#DB5554] hover:opacity-80 transition-opacity"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Property Finding
                    </a>
                  </div>
                </div>
              </div>

              <Link 
                href="/faqs" 
                className="block text-lg font-semibold text-[#DB5554] hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQs
              </Link>

              <Link 
                href="/contact" 
                className="block text-lg font-semibold text-[#DB5554] hover:opacity-80 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>

          {/* Contact Info Footer */}
          <div className="p-6 border-t border-gray-100 bg-gray-50">
            <div className="space-y-3 text-sm text-gray-600">
              <a href="tel:07984773570" className="flex items-center gap-2 hover:text-[#DB5554] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.1c.99 0 1.861.64 2.16 1.583l.74 2.347a2.25 2.25 0 01-.519 2.244l-1.05 1.05a.75.75 0 00-.142.86 12.035 12.035 0 006.026 6.026.75.75 0 00.86-.142l1.05-1.05a2.25 2.25 0 012.244-.519l2.347.74a2.25 2.25 0 011.583 2.16v2.1c0 1.243-1.007 2.25-2.25 2.25H18A15.75 15.75 0 012.25 6.75V6.75z"/>
                </svg>
                07984 773 570
              </a>
              <a href="mailto:info@sklsurveyors.co.uk" className="flex items-center gap-2 hover:text-[#DB5554] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M1.5 8.67v8.58A2.25 2.25 0 003.75 19.5h16.5a2.25 2.25 0 002.25-2.25V8.67l-8.708 5.08a3.75 3.75 0 01-3.784 0L1.5 8.67z"/>
                  <path d="M22.5 6.908V6.75A2.25 2.25 0 0020.25 4.5H3.75A2.25 2.25 0 001.5 6.75v.158l9.614 5.61a2.25 2.25 0 002.272 0L22.5 6.908z"/>
                </svg>
                info@sklsurveyors.co.uk
              </a>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path fillRule="evenodd" d="M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5zM12.75 6a.75.75 0 00-1.5 0v6c0 .199.079.39.22.53l3.75 3.75a.75.75 0 101.06-1.06l-3.53-3.53V6z" clipRule="evenodd"/>
                </svg>
                Monday – Friday 8 AM – 6 PM
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer that matches header height (fixed) */}
      <div className="h-20 md:h-20" />
    </>
  );
}

