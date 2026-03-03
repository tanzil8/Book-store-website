'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';



const mockItems = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 129.99,
    image: '🎧',
    description: 'Premium sound quality',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: '⌚',
    description: 'Track your fitness',
  },
  {
    id: 3,
    name: 'Portable Charger',
    price: 49.99,
    image: '🔋',
    description: 'Fast charging',
  },
  {
    id: 4,
    name: 'USB-C Cable',
    price: 19.99,
    image: '🔌',
    description: 'Universal compatibility',
  },
  {
    id: 5,
    name: 'Phone Case',
    price: 24.99,
    image: '📱',
    description: 'Durable protection',
  },
  {
    id: 6,
    name: 'Screen Protector',
    price: 14.99,
    image: '🛡️',
    description: 'Crystal clear display',
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 89.99,
    image: '🔊',
    description: '360° sound',
  },
  {
    id: 8,
    name: 'Phone Stand',
    price: 29.99,
    image: '📺',
    description: 'Adjustable angles',
  },
];

export default function CartGrid() {
  const [showMore, setShowMore] = useState(false);

  // Show 8 cards (2 rows of 4) when expanded, 4 cards (1 row) by default
  const visibleItems = showMore ? mockItems : mockItems.slice(0, 4);

  return (
    <div className="min-h-screen  from-slate-50 via-gray-50 to-slate-100 p-6 sm:p-8">
      <style>{`
        @keyframes glow {
          0% {
            box-shadow: 0 0 0 0 rgba(100, 116, 139, 0.1);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(100, 116, 139, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(100, 116, 139, 0);
          }
        }

        .card-hover {
          transition: all 0.3s ease-in-out;
          border: 2px solid transparent;
        }

        .card-hover:hover {
          border-color: #cfd1d3;
          box-shadow: 0 20px 40px rgba(66, 75, 88, 0.15);
          transform: translateY(-4px);
        }
      `}</style>

      <div className="max-w-screen-2xl container mx-auto px-2">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Your Cart
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse and manage your selected items
          </p>
        </div>

        {/* Cart Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="card-hover group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0  from-slate-100/50 to-gray-100/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative z-10 space-y-4">
                {/* Image/Icon */}
                <div className="flex h-32 items-center justify-center rounded-xl  from-slate-200 to-gray-200 text-6xl">
                  {item.image}
                </div>

                {/* Name */}
                <h3 className="line-clamp-2 text-xl font-semibold text-gray-900 group-hover:text-gray-800">
                  {item.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 group-hover:text-gray-700">
                  {item.description}
                </p>

                {/* Price */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-baseline justify-between">
                    <span className="text-3xl font-bold text-gray-900">
                      ${item.price}
                    </span>
                  </div>

                  {/* Add to Cart Button */}
                  <button className="w-full rounded-lg  from-slate-700 to-gray-800 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-gray-400/40 active:scale-95">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {!showMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowMore(true)}
              className="group flex items-center gap-2 rounded-full  from-slate-700 to-gray-800 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/40 active:scale-95"
            >
              Show More Items
              <ChevronDown className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" />
            </button>
          </div>
        )}

        {/* Show Less Button */}
        {showMore && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowMore(false)}
              className="group flex items-center gap-2 rounded-full  from-slate-700 to-gray-800 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-gray-400/40 active:scale-95"
            >
              Show Less Items
              <ChevronDown className="h-5 w-5 rotate-180 transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
