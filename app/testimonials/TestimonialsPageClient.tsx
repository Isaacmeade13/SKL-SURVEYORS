"use client";
import Link from 'next/link';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function TestimonialsPageClient() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    email: '',
    rating: 5,
    location: '',
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
      const { data, error } = await supabase
        .from('skl_testimonials')
        .insert([
          {
            name: testimonialForm.name,
            email: testimonialForm.email || null,
            rating: testimonialForm.rating,
            location: testimonialForm.location || null,
            testimonial_text: testimonialForm.message,
            is_approved: true // All testimonials are automatically approved
          }
        ]);

      if (error) {
        console.error('Error submitting testimonial:', error);
        setSubmitStatus('error');
      } else {
        setSubmitStatus('success');
        
        // Send email notification
        try {
          await fetch('/api/send-testimonial-notification', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(testimonialForm),
          });
          console.log('📧 Testimonial email notification sent successfully');
        } catch (emailError) {
          console.error('❌ Error sending testimonial email notification:', emailError);
          // Don't fail the testimonial submission if email fails
        }
        
        setTestimonialForm({
          name: '',
          email: '',
          rating: 5,
          location: '',
          message: ''
        });
        // Refresh testimonials list
        fetchTestimonials();
      }
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Dynamic testimonials - will be fetched from database
  const [allTestimonials, setAllTestimonials] = useState<any[]>([]);
  const [displayedTestimonials, setDisplayedTestimonials] = useState<any[]>([]);
  const [isLoadingTestimonials, setIsLoadingTestimonials] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [expandedTestimonial, setExpandedTestimonial] = useState<number | null>(null);

  // Fallback testimonials for testing
  const fallbackTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "London",
      rating: 5,
      testimonial_text: "SKL Surveyors provided exceptional service for our property survey. They were thorough, professional, and delivered the report on time. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Kent",
      rating: 5,
      testimonial_text: "Outstanding work! The team was knowledgeable and explained everything clearly. The survey was comprehensive and helped us make an informed decision."
    },
    {
      id: 3,
      name: "Emma Williams",
      location: "Surrey",
      rating: 4,
      testimonial_text: "Great experience with SKL Surveyors. Professional service and detailed reporting. Would definitely use them again for future projects."
    },
    {
      id: 4,
      name: "David Thompson",
      location: "Essex",
      rating: 5,
      testimonial_text: "Excellent service from start to finish. The surveyor was punctual, thorough, and provided valuable insights about the property condition."
    },
    {
      id: 5,
      name: "Lisa Brown",
      location: "Hertfordshire",
      rating: 5,
      testimonial_text: "SKL Surveyors exceeded our expectations. Their attention to detail and professional approach made the whole process smooth and stress-free."
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Buckinghamshire",
      rating: 4,
      testimonial_text: "Very satisfied with the service. The survey was comprehensive and the report was easy to understand. Great value for money."
    }
  ];

  // Function to randomize and limit testimonials
  const randomizeAndLimitTestimonials = (testimonials: any[], limit: number = 15) => {
    // Create a copy of the array to avoid mutating the original
    const shuffled = [...testimonials];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Return only the first 'limit' items
    return shuffled.slice(0, limit);
  };

  // Update displayed testimonials based on showAll state
  const updateDisplayedTestimonials = (testimonials: any[]) => {
    if (showAll) {
      setDisplayedTestimonials(testimonials);
    } else {
      setDisplayedTestimonials(randomizeAndLimitTestimonials(testimonials, 15));
    }
  };

  // Toggle show all functionality
  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      // Show all testimonials
      setDisplayedTestimonials(allTestimonials);
    } else {
      // Show limited randomized testimonials
      setDisplayedTestimonials(randomizeAndLimitTestimonials(allTestimonials, 15));
    }
  };

  // Handle testimonial click to expand/collapse
  const handleTestimonialClick = (testimonialId: number) => {
    if (expandedTestimonial === testimonialId) {
      setExpandedTestimonial(null);
    } else {
      setExpandedTestimonial(testimonialId);
    }
  };

  // Fetch testimonials from database
  const fetchTestimonials = async () => {
    try {
      console.log('🔍 Attempting to fetch testimonials from database...');
      console.log('🔗 Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL);
      console.log('🔑 Supabase Key exists:', !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
      
      // For testing: show all testimonials (approved and unapproved)
      // Change back to .eq('is_approved', true) when you want only approved ones
      const { data, error } = await supabase
        .from('skl_testimonials')
        .select('*')
        .order('created_at', { ascending: false });
      
      console.log('📊 Supabase response:', { data, error });
      console.log('📝 Data length:', data?.length);
      
      if (error) {
        console.error('❌ Error fetching testimonials:', error);
        console.log('🔄 Using fallback testimonials due to error');
        setAllTestimonials(fallbackTestimonials);
        updateDisplayedTestimonials(fallbackTestimonials);
      } else {
        console.log('✅ Testimonials fetched successfully:', data);
        if (data && data.length > 0) {
          console.log('🎉 Using database testimonials:', data.length, 'items');
          setAllTestimonials(data);
          updateDisplayedTestimonials(data);
        } else {
          console.log('📭 No testimonials in database, using fallback');
          setAllTestimonials(fallbackTestimonials);
          updateDisplayedTestimonials(fallbackTestimonials);
        }
      }
    } catch (error) {
      console.error('💥 Exception fetching testimonials:', error);
      console.log('🔄 Using fallback testimonials due to exception');
      setAllTestimonials(fallbackTestimonials);
      updateDisplayedTestimonials(fallbackTestimonials);
    } finally {
      setIsLoadingTestimonials(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Randomize testimonials on page load (when allTestimonials changes)
  useEffect(() => {
    if (allTestimonials.length > 0 && !showAll) {
      setDisplayedTestimonials(randomizeAndLimitTestimonials(allTestimonials, 15));
    }
  }, [allTestimonials]);

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
            {isLoadingTestimonials ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-[#DB5554]"></div>
                <p className="mt-4 text-gray-600">Loading testimonials...</p>
              </div>
            ) : displayedTestimonials.length > 0 ? (
              <>
                {/* Cool Masonry Gallery with Misaligned Edges */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                  {displayedTestimonials.map((testimonial, index) => {
                    // Create varying heights for natural masonry effect
                    const heightVariations = ['min-h-[200px]', 'min-h-[250px]', 'min-h-[300px]', 'min-h-[180px]', 'min-h-[280px]', 'min-h-[220px]'];
                    const heightClass = heightVariations[index % heightVariations.length];
                    
                    const isExpanded = expandedTestimonial === testimonial.id;
                    
                    return (
                      <div 
                        key={testimonial.id} 
                        onClick={() => handleTestimonialClick(testimonial.id)}
                        className={`break-inside-avoid ${heightClass} bg-white rounded-2xl p-6 shadow-lg ring-1 ring-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 transform mb-6 cursor-pointer group ${
                          isExpanded ? 'scale-110 z-50 shadow-2xl ring-2 ring-[#DB5554]' : ''
                        }`}
                        style={{
                          transform: isExpanded 
                            ? 'rotate(0deg) scale(1.1)' 
                            : `rotate(${(index % 3 - 1) * 0.3}deg)`,
                        }}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          {isExpanded && (
                            <div className="flex items-center space-x-2">
                              <span className="text-xs text-[#DB5554] font-medium">EXPANDED</span>
                              <button 
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setExpandedTestimonial(null);
                                }}
                                className="text-gray-400 hover:text-gray-600 transition-colors"
                              >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                              </button>
                            </div>
                          )}
                        </div>
                        <p className={`text-gray-600 text-sm leading-6 mb-4 transition-all duration-300 ${
                          isExpanded ? 'text-base' : ''
                        }`}>
                          "{testimonial.testimonial_text}"
                        </p>
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#DB5554] to-[#B84443] rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                              {testimonial.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                              <p className="text-xs text-gray-500">{testimonial.location}</p>
                            </div>
                          </div>
                          {!isExpanded && (
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <span className="text-xs text-gray-400">Click to expand</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Show All / Show Less Button */}
                <div className="mt-12 text-center">
                  <button 
                    onClick={toggleShowAll}
                    className="inline-flex items-center justify-center bg-[#DB5554] px-6 py-3 text-sm font-medium text-white shadow-sm hover:opacity-90 rounded-none transition-all duration-200"
                  >
                    {showAll ? (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                        Show Less ({displayedTestimonials.length} of {allTestimonials.length})
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                        Show All Testimonials ({allTestimonials.length})
                      </>
                    )}
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No testimonials yet</h3>
                <p className="text-gray-600 mb-6">Be the first to share your experience with SKL Surveyors!</p>
              </div>
            )}
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
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={testimonialForm.name}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-[#DB5554] focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={testimonialForm.email}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-[#DB5554] focus:outline-none focus:ring-0 transition-colors"
                  placeholder="Enter your email address (optional)"
                />
              </div>

              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-900 mb-2">
                  Rating *
                </label>
                <select
                  id="rating"
                  required
                  value={testimonialForm.rating}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, rating: parseInt(e.target.value) }))}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-2 text-gray-900 focus:border-[#DB5554] focus:outline-none focus:ring-0 transition-colors"
                >
                  <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
                  <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
                  <option value={3}>⭐⭐⭐ (3 stars)</option>
                  <option value={2}>⭐⭐ (2 stars)</option>
                  <option value={1}>⭐ (1 star)</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-900 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  value={testimonialForm.location}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, location: e.target.value }))}
                  placeholder="e.g., London, Kent, Surrey (optional)"
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-[#DB5554] focus:outline-none focus:ring-0 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Your Testimonial *
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={testimonialForm.message}
                  onChange={(e) => setTestimonialForm(prev => ({ ...prev, message: e.target.value }))}
                  className="w-full bg-transparent border-0 border-b-2 border-gray-300 px-0 py-2 text-gray-900 placeholder-gray-400 focus:border-[#DB5554] focus:outline-none focus:ring-0 transition-colors resize-none"
                  placeholder="Tell us about your experience with SKL Surveyors..."
                />
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  By submitting this form, you agree to have your testimonial featured on the SKL Surveyors website.
                </p>
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
                  <p className="text-green-800 text-sm">Thank you for your testimonial! It has been featured on our website.</p>
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
