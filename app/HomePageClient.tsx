"use client";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function HomePageClient() {
  const [mounted, setMounted] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      // After fade out completes, change slide
      setTimeout(() => {
        setCurrentSlide(prev => prev === 3 ? 1 : prev + 1);
        setIsTransitioning(false);
      }, 1000); // 1 second fade out
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
      <section className="relative w-full">
        <div className="relative h-[calc(50svh-5rem)] min-h-[300px] sm:h-[calc(65svh-5rem)] sm:min-h-[480px] w-full">
          {/* Slide 1 */}
          <Image 
            src="/images/landscape-images/slide1.png" 
            alt="Professional property surveying services" 
            fill 
            priority 
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === 1 && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Slide 2 */}
          <Image 
            src="/images/landscape-images/slide2.png" 
            alt="Professional property surveying services" 
            fill 
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === 2 && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Slide 3 */}
          <Image 
            src="/images/landscape-images/slide3.png" 
            alt="Professional property surveying services" 
            fill 
            className={`object-cover transition-opacity duration-1000 ease-in-out ${
              currentSlide === 3 && !isTransitioning ? 'opacity-100' : 'opacity-0'
            }`}
          />
          {/* Fade to black overlay during transition */}
          <div className={`absolute inset-0 bg-black transition-opacity duration-1000 ease-in-out ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/30" />

          <div className="absolute inset-0">
            <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-full items-center justify-center sm:items-start sm:justify-start pt-8 sm:pt-32">
                <div className="max-w-3xl text-white w-full flex flex-col items-center sm:items-start">
                  <h1 className={`text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl text-center sm:text-left transform transition-all duration-[2000ms] ease-in-out ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>RICS registered property surveys</h1>
                  <p className={`mt-4 text-lg sm:text-lg md:text-xl text-gray-100 drop-shadow-md hidden sm:block transform transition-all duration-[2000ms] ease-in-out delay-[800ms] ${
                    mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    Choosing a RICS-registered residential property surveyor ensures you receive a
                    professional, accurate assessment. RICS standards guarantee expertise, reliability,
                    and adherence to strict guidelines, helping you make informed decision.
                  </p>
                  <div className="mt-6 sm:mt-8 flex flex-row items-center justify-center sm:justify-start gap-3 sm:gap-6">
                    <Link href="/faqs" className={`inline-flex items-center justify-center bg-[#DB5554] px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:opacity-90 transform transition-all duration-[2000ms] ease-in-out delay-[1600ms] ${
                      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      FAQs
                    </Link>
                    <Link href="/contact" className={`inline-flex items-center justify-center border border-white/80 bg-transparent px-5 py-3 sm:px-6 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-white/10 transform transition-all duration-[2000ms] ease-in-out delay-[2400ms] ${
                      mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      
      {/* About / Three Cards Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="about-header"
            data-animate
            className={`mb-10 sm:mb-12 transform transition-all duration-1000 ease-out ${
              visibleSections.has('about-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">About Our Company</h2>
            <div className="mt-3 h-1 w-16 rounded bg-[#DB5554]" />
          </header>

          <div className="grid gap-8 sm:gap-10 md:gap-12 md:grid-cols-3">
            {/* Card 1 */}
            <div 
              id="about-card-1"
              data-animate
              className={`flex flex-col h-full transform transition-all duration-1000 ease-out delay-200 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 border border-gray-200" />
                <Image src="/images/Square-web-images/1.png" alt="Questions" fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">Have Any Questions?</h3>
              <p className="mt-3 text-gray-600 text-base sm:text-lg leading-7 flex-grow">
                We are used to people having lots of questions, here are the most commonly asked and
                answered for you. We encourage you to speak to us if you prefer to get specific information.
              </p>
              <Link href="/faqs" className="mt-6 inline-flex self-start bg-[#DB5554] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">FAQs</Link>
            </div>

            {/* Card 2 */}
            <div 
              id="about-card-2"
              data-animate
              className={`flex flex-col h-full transform transition-all duration-1000 ease-out delay-400 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 border border-gray-200" />
                <Image src="/images/Square-web-images/14.png" alt="Services" fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">Our Services</h3>
              <p className="mt-3 text-gray-600 text-base sm:text-lg leading-7 flex-grow">
                The survey type you need depends on the property's age and condition. We offer a range of
                services to suit all property types and budget.
              </p>
              <a href="#what-we-do-header" className="mt-6 inline-flex self-start bg-[#DB5554] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">View Services</a>
            </div>

            {/* Card 3 */}
            <div 
              id="about-card-3"
              data-animate
              className={`flex flex-col h-full transform transition-all duration-1000 ease-out delay-600 ${
                mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-lg bg-gray-100">
                <div className="absolute inset-0 border border-gray-200" />
                <Image src="/images/Square-web-images/18.png" alt="Team" fill className="object-cover" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-gray-900">Meet the Team</h3>
              <p className="mt-3 text-gray-600 text-base sm:text-lg leading-7 flex-grow">
                SKL Surveyors is a team of two. RICS registered surveyor, Marc, and his wife Katie. The
                two have been property aficionados for over 20 years.
              </p>
              <Link href="/about" className="mt-6 inline-flex self-start bg-[#DB5554] px-4 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">Our story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="what-we-do-header"
            data-animate
            className={`mb-10 sm:mb-12 transform transition-all duration-1000 ease-out scroll-mt-20 ${
              visibleSections.has('what-we-do-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">What We Do</h2>
            <div className="mt-3 h-1 w-16 rounded bg-[#DB5554]" />
          </header>

          <div className="grid gap-6 sm:gap-8 md:gap-10 md:grid-cols-3 max-w-6xl mx-auto">
            {/* Card A */}
            <div 
              id="service-card-1"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-100 transform transition-all duration-1000 ease-out delay-200 flex flex-col ${
                visibleSections.has('service-card-1') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-1 ring-gray-200">
                <Image src="/images/Square-web-images/4.png" alt="Roof Surveys" width={256} height={256} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 text-center text-xl font-semibold text-gray-900">Roof Surveys</h3>
              <p className="mt-3 text-center text-gray-600 text-base sm:text-lg leading-7 flex-grow">
                Our roof survey service combines drone technology with experienced surveyors, ensuring
                accurate, detailed inspections and reliable assessments.
              </p>
              <div className="mt-6 flex justify-center">
                <Link href="/services/roof" className="rounded-none bg-[#DB5554] px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90">Read More</Link>
              </div>
            </div>

            {/* Card B */}
            <div 
              id="service-card-2"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-100 transform transition-all duration-1000 ease-out delay-400 flex flex-col ${
                visibleSections.has('service-card-2') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-1 ring-gray-200">
                <Image src="/images/Square-web-images/9.png" alt="RICS Surveys" width={256} height={256} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 text-center text-xl font-semibold text-gray-900">RICS Surveys</h3>
              <p className="mt-3 text-center text-gray-600 text-base sm:text-lg leading-7 flex-grow">
                The survey you need depends on the property's age and condition. Older homes typically
                require a comprehensive Level 3 survey.
              </p>
              <div className="mt-6 flex justify-center">
                <Link href="/services/rics" className="rounded-none bg-[#DB5554] px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90">Read More</Link>
              </div>
            </div>

            {/* Card C */}
            <div 
              id="service-card-3"
              data-animate
              className={`rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-gray-100 transform transition-all duration-1000 ease-out delay-600 flex flex-col ${
                visibleSections.has('service-card-3') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full ring-1 ring-gray-200">
                <Image src="/images/Square-web-images/6.png" alt="Property Finding" width={256} height={256} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-6 text-center text-xl font-semibold text-gray-900">Property Finding</h3>
              <p className="mt-3 text-center text-gray-600 text-base sm:text-lg leading-7 flex-grow">
                Let us help you find the perfect property. Our expertise in property assessment means we can identify the best opportunities and potential issues before you make an offer.
              </p>
              <div className="mt-6 flex justify-center">
                <a href="https://www.sklpropertyfinders.co.uk/" target="_blank" rel="noopener noreferrer" className="rounded-none bg-[#DB5554] px-5 py-2 text-sm font-medium text-white shadow-sm hover:opacity-90">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Image Section (after What We Do) */}
      <section className="relative w-full mt-0">
        <div className="relative h-[40svh] min-h-[300px] sm:h-[50svh] sm:min-h-[420px] w-full">
          <Image src="/images/landscape-images/124.png" alt="CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0">
            <div className="mx-auto h-full max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-full items-center">
                <div 
                  id="cta-content"
                  data-animate
                  className={`max-w-3xl text-white transform transition-all duration-1000 ease-out ${
                    visibleSections.has('cta-content') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  <h2 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">Need a survey carried out on a property that could be 'the one'?</h2>
                  <p className="mt-4 text-base sm:text-lg leading-7 text-gray-100/90">
                    Buying a home can feel like an emotional decision, we can give you insights on the
                    property's condition and you will have all that you need to know for negotiating the best
                    price.
                  </p>
                  <div className="mt-6">
                    <Link href="/contact" className="inline-flex items-center justify-center bg-[#DB5554] px-6 py-3 sm:px-5 sm:py-2.5 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">Send a Message</Link>
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
