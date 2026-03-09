'use client';
import "../index.css";

import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Card() {
  const containerRef = useRef(null);

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Product ${i + 1}`,
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  }));

  const scroll = (direction) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const scrollAmount = container.offsetWidth / 3;

    const newPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full py-12 bg-white">
      <div className="max-w-screen-2xl container mx-auto px-2">

        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-black">Our Collection</h2>
          <p className="text-gray-600">Explore our featured items</p>
        </div>

        {/* Carousel */}
        <div className="relative">

          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>

          {/* Cards Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-12 no-scrollbar "
          >
            {items.map((item) => (
              <div
                key={item.id}
                className=" sm:min-w-[48%] lg:min-w-[31%] bg-gray-50 rounded-lg shadow-lg p-6 "
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-60"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold">
                      View Product
                    </button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mt-4">{item.title}</h3>

                <p className="text-gray-500 text-sm mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-lg font-bold">{item.price}</span>

                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Total Items: <span className="font-bold">{items.length}</span>
        </div>

      </div>
    </div>
  );
}