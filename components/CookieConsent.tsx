"use client";
import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    // Store consent for 30 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      accepted: true,
      date: new Date().toISOString(),
      expiry: expiryDate.toISOString()
    }));
    
    setShowBanner(false);
  };

  const declineCookies = () => {
    // Store decline for 30 days
    const expiryDate = new Date();
    expiryDate.setDate(expiryDate.getDate() + 30);
    
    localStorage.setItem('cookieConsent', JSON.stringify({
      accepted: false,
      date: new Date().toISOString(),
      expiry: expiryDate.toISOString()
    }));
    
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[10000] bg-white border-t border-gray-200 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-1">Cookie Policy</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. You can also manage your preferences or learn more in our{' '}
              <a href="/privacy" className="text-[#DB5554] hover:underline">Privacy Policy</a>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium text-white bg-[#DB5554] hover:opacity-90 rounded-md transition-opacity"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
