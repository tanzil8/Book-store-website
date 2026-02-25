'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';


export function EmailBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[80vh]">

          {/* Left Content */}
          <div className="flex flex-col justify-center py-12">
            <div className="max-w-lg space-y-6">

              <div>
                <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
                  Stay ahead with amazing updates
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Subscribe to our newsletter and never miss out on the latest insights,
                  tips, and exclusive content delivered straight to your inbox.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap group"
                  >
                    Send
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

                {submitted && (
                  <p className="text-green-600 text-sm">
                    ✓ Thank you! Check your email for updates.
                  </p>
                )}
              </form>

              <p className="text-gray-500 text-xs pt-4 border-t border-gray-200">
                Join thousands of professionals who are already subscribed.
                We respect your inbox and send valuable content weekly.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-full  rounded-xl overflow-hidden">
            <image
              src="/banner-image.jpg"
              alt="Newsletter banner"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </div>
    </div>
  );
}