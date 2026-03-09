'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';


export default function Card() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Create 10 carousel items
  const items= Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Box ${i + 1}`,
    subtitle: `Item ${i + 1}`,
  }));

  const containerRef = React.useRef(null);

  const scroll = (direction) => {
    if (!containerRef.current) return;

    const scrollAmount = 350; // Width of one box + gap
    const newPosition =
      direction === 'left'
        ? Math.max(0, scrollPosition - scrollAmount)
        : scrollPosition + scrollAmount;

    containerRef.current.scrollTo({
      left: newPosition,
      behavior: 'smooth',
    });

    setScrollPosition(newPosition);
  };

  return (
    <div className="w-full  from-white to-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">Our Collection</h2>
          <p className="text-gray-600">Explore our featured items</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 hover:shadow-xl"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={containerRef}
            className="flex overflow-x-hidden gap-4 scroll-smooth px-16"
            style={{
              scrollBehavior: 'smooth',
            }}
          >
           
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
              <div
                
                className=" w-80 h-64   from-gray-200 to-gray-300 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:from-gray-300 hover:to-gray-400 flex flex-col items-center justify-center p-6 cursor-pointer group"
              >
                <div className="text-center">
                  <h1 className="text-2xl md:text-3xl font-bold text-black mb-2 group-hover:text-gray-800 transition-colors">
                   tanzil
                  </h1>
                  <p className="text-gray-700 text-sm md:text-base group-hover:text-gray-900 transition-colors">
                    tanzil
                  </p>
                  <div className="mt-4 w-12 h-1 bg-black rounded mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>
          
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors duration-200 hover:shadow-xl"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Responsive Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Total Items: <span className="font-bold text-black">{items.length}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
