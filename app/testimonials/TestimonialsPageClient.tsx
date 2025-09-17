"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

export default function TestimonialsPageClient() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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

  const handleTestimonialSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission - replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setTestimonialForm({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London",
      rating: 5,
      text: "SKL Surveyors provided an incredibly thorough roof survey using their drone technology. The report was detailed and helped us negotiate a better price on our new home. Highly professional service!"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Surrey",
      rating: 5,
      text: "Marc and Katie were fantastic to work with. Their RICS survey was comprehensive and their advice was invaluable during our property purchase. Would definitely recommend to anyone buying a home."
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "Kent",
      rating: 5,
      text: "The drone roof survey was impressive - they could see areas that would have been impossible to inspect otherwise. The report was clear and helped us understand exactly what we were buying."
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Essex",
      rating: 5,
      text: "Professional, reliable, and thorough. SKL Surveyors delivered exactly what they promised and helped us avoid some costly surprises. Great value for money."
    },
    {
      id: 5,
      name: "Lisa Patel",
      location: "Hertfordshire",
      rating: 5,
      text: "Excellent communication throughout the process. The survey was completed on time and the report was easy to understand. Marc's expertise really showed in his recommendations."
    },
    {
      id: 6,
      name: "James Wilson",
      location: "London",
      rating: 5,
      text: "Used their services for an insurance claim survey. The detailed report with high-resolution images was exactly what we needed. Professional and efficient service."
    }
  ];

  return (
    <main className="min-h-[70dvh]">
      {/* Page Header */}
      <section className="bg-gray-50 border-b border-gray-100 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div 
            id="testimonials-header"
            data-animate
            className={`flex items-center justify-between transform transition-all duration-1000 ease-out ${
              visibleSections.has('testimonials-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h1 className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900">Testimonials</h1>
            <nav className="hidden md:flex items-center gap-2 text-sm text-gray-500">
              <Link href="/" className="hover:text-gray-700">Home</Link>
              <span>/</span>
              <span className="text-gray-600">Testimonials</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div 
            id="testimonials-intro"
            data-animate
            className={`text-center transform transition-all duration-1000 ease-out ${
              visibleSections.has('testimonials-intro') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-gray-900">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-gray-600 font-body text-lg sm:text-xl leading-7 max-w-3xl mx-auto">
              Don't just take our word for it. Read what our satisfied clients have to say about our professional surveying services.
            </p>
            <div className="mt-6 h-1 w-20 rounded bg-[#DB5554] mx-auto" />
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div 
            id="testimonials-grid"
            data-animate
            className={`transform transition-all duration-1000 ease-out delay-200 ${
              visibleSections.has('testimonials-grid') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="break-inside-avoid bg-white rounded-xl p-6 shadow-sm ring-1 ring-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-6 mb-4">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="mt-12 text-center">
              <button className="inline-flex items-center justify-center bg-[#DB5554] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none">
                View All Testimonials
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leave Testimonial Form */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <header 
            id="testimonial-form-header"
            data-animate
            className={`mb-12 sm:mb-16 text-center transform transition-all duration-1000 ease-out ${
              visibleSections.has('testimonial-form-header') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold tracking-tight text-gray-900">Share Your Experience</h2>
            <p className="mt-4 text-gray-600 font-body text-lg sm:text-xl leading-7 max-w-3xl mx-auto">
              Had a great experience with our services? We'd love to hear from you!
            </p>
            <div className="mt-6 h-1 w-20 rounded bg-[#DB5554] mx-auto" />
          </header>

          <div 
            id="testimonial-form"
            data-animate
            className={`max-w-2xl mx-auto transform transition-all duration-1000 ease-out delay-200 ${
              visibleSections.has('testimonial-form') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <form onSubmit={handleTestimonialSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DB5554] focus:border-[#DB5554]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={testimonialForm.email}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DB5554] focus:border-[#DB5554]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Testimonial
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={testimonialForm.message}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#DB5554] focus:border-[#DB5554]"
                  placeholder="Tell us about your experience with SKL Surveyors..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-[#DB5554] px-8 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 disabled:opacity-50 rounded-none"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Testimonial'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm">Thank you for your testimonial! We'll review it and may feature it on our website.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm">There was an error submitting your testimonial. Please try again.</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
