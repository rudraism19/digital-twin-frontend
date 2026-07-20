import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 xl:gap-12 mb-12">
          {/* 1. Brand & Mission Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div>
                <Link to="/">
                  <img
                    src="/img/dtv-logo.jpg"
                    alt="Company Logo"
                    width="50"
                    height="20"
                    style={{ borderRadius: '8px' }}
                  />
                </Link>
              </div>
              <span className="text-xl font-bold text-gray-100 tracking-wide">
                Digital Twin Verse
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              India's First AI Career Simulation Platform-helping students predict, explore, and decide their future with confidence. Built with love by DTV Family.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Twitter / X */}
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1503 10.5352L12.8471 11.5317L18.6861 19.8972H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="tel:+1234567890" className="text-gray-500 hover:text-white transition-colors duration-200 ">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M21 16.42v3.536a1 1 0 0 1-.93.998c-.437.03-.793-.026-1.15-.165C10.198 17.75 6.25 13.802 3.21 5.08c-.14-.358-.195-.714-.165-1.15A1 1 0 0 1 4.044 3H7.58a1 1 0 0 1 .983.824c.143.743.393 1.464.743 2.14a1 1 0 0 1-.22 1.13L7.02 8.718a14.85 14.85 0 0 0 6.262 6.262l1.624-1.624a1 1 0 0 1 1.13-.22c.676.35 1.397.6 2.14.743A1 1 0 0 1 21 16.421z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 2. Platform Column */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4 tracking-wider text-sm uppercase">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/login" className="hover:text-white transition-colors duration-200">Student Dashboard</Link></li>
              <li><Link to="/parent/login" className="hover:text-white transition-colors duration-200">Parent Portal</Link></li>
              <li><Link to="/school/login" className="hover:text-white transition-colors duration-200">School Portal</Link></li>
              <li><Link to="/advisor" className="hover:text-white transition-colors duration-200">AI Advisor</Link></li>
              <li><Link to="/features" className="hover:text-white transition-colors duration-200">Features</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors duration-200">Premium Plans</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors duration-200">Reviews</Link></li>
            </ul>
          </div>

          {/* 3. Company Column */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4 tracking-wider text-sm uppercase">Company</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors duration-200">About Digital Twin Verse</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Career Insights Blog</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/" className="hover:text-white transition-colors duration-200">Get Early Access</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors duration-200">Reviews</Link></li>
            </ul>
          </div>

          {/* 4. Legal Column */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4 tracking-wider text-sm uppercase">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://digitaltwinvrs.com/privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="https://digitaltwinvrs.com/terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Terms of Service</a></li>
              <li><a href="https://digitaltwinvrs.com/refund.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Refund & Cancellation</a></li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  100% Secure Payments
                </div>
              </li>
            </ul>
          </div>

          {/* 5. Contact Us Column */}
          <div>
            <h3 className="text-gray-100 font-semibold mb-4 tracking-wider text-sm uppercase">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="mailto:support@digitaltwinverse.com" className="hover:text-white transition-colors duration-200 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> support@digitaltwinverse.com</a></li>
              <li><a href="tel:+917520119837" className="hover:text-white transition-colors duration-200 flex items-center gap-2"><svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> +91 75201 19837</a></li>
              <li><a href="https://wa.me/917520119837" className="hover:text-white transition-colors duration-200 flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.55 4.17 1.597 5.986L.044 24l6.126-1.607a12.016 12.016 0 005.861 1.528h.005c6.645 0 12.031-5.386 12.031-12.031C24.067 5.385 18.681 0 12.031 0zm0 21.91h-.004a9.998 9.998 0 01-5.093-1.39l-.365-.217-3.784.992.998-3.69-.238-.378A9.99 9.99 0 012.011 12.03c0-5.522 4.494-10.016 10.021-10.016 2.675 0 5.187 1.042 7.078 2.934 1.89 1.892 2.932 4.404 2.932 7.08 0 5.522-4.493 10.015-10.011 10.015h-.001zm5.501-7.514c-.302-.15-1.789-.884-2.065-.986-.276-.102-.477-.15-.678.151-.201.301-.782.986-.957 1.186-.176.202-.352.227-.654.076-1.423-.717-2.613-1.677-3.627-2.923-.277-.34-.047-.514.099-.663.132-.135.302-.352.453-.528.151-.176.201-.301.302-.503.1-.201.05-.377-.025-.528-.076-.151-.678-1.636-.93-2.241-.244-.59-.492-.511-.678-.521h-.578c-.201 0-.528.076-.804.377-.276.302-1.055 1.03-1.055 2.514 0 1.483 1.08 2.917 1.23 3.118.15.201 2.129 3.251 5.155 4.557.72.31 1.282.496 1.721.635.723.23 1.381.197 1.9.119.58-.088 1.789-.731 2.04-1.439.252-.708.252-1.314.177-1.439-.076-.126-.277-.202-.578-.352z"></path>
                </svg> WhatsApp Support
              </a></li>
            </ul>
          </div>
        </div>

        {/* 6. Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col-reverse md:flex-row justify-between items-center gap-4 text-xs">
          {/* Copyright */}
          <div className="text-gray-500">
            2026 DTV. All rights reserved. Digital Twin Verse™ for Students.
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-900 rounded-full border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="font-medium text-gray-300">All systems operational</span>
          </div>

          {/* Payment Badges */}
          <div className="flex items-center gap-3 opacity-70 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-medium text-gray-400 mr-1">Secured by Razorpay</span>
            <div className="px-2 py-1 bg-gray-800 rounded text-[10px] font-bold text-white border border-gray-700">UPI</div>
            <div className="px-2 py-1 bg-gray-800 rounded text-[10px] font-bold text-white border border-gray-700">CARDS</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
