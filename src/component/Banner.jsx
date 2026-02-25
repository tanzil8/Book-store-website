'use client';

import { useState } from 'react';
import { ArrowRight, Image } from 'lucide-react';


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
      <div className="max-w-screen-2xl container mx-auto px-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[60vh]">

          {/* Left Content */}
          <div className="flex flex-col justify-center py-12 text-center lg:text-left items-center lg:items-start">
            <div className="max-w-lg space-y-6">

              <div>
                <h1 className=" text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black mb-4 leading-tight ">
                 Hello, Welcomes here to lern <br />
                 some thing new every day
                </h1>
                <p className="text-xs sm:text-xl md:text-xl lg:text-xl font-medium mb-4 leading-tight text-gray-800 ">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil expedita illum iure? Modi odit doloremque nemo exercitationem beatae, placeat illo! Explicabo ex modi eius cupiditate minima sunt placeat delectus quod!
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
        {/* Right Image */}
<div className="relative w-full rounded-xl overflow-hidden flex justify-center">
  <svg
    viewBox="0 0 500 500"
    className="w-full max-w-md sm:max-w-lg lg:max-w-xl h-auto"
    preserveAspectRatio="xMidYMid meet"
  >
    <image
      href="https://png.pngtree.com/png-vector/20230930/ourmid/pngtree-school-materials-clip-art-cartoon-open-book-png-png-image_10147973.png"
      width="500"
      height="500"
    />
  </svg>
</div>
        </div>
      </div>
    </div>
  );
}