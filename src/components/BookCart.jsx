"use client";
import "../index.css";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import axios from "axios";

export default function Card() {
  const [book, setBook] = useState([]);
  const items = book.filter((data) => data.category === "free");
  console.log("items", items);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        setBook(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const containerRef = useRef(null);

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
          <div className="hidden sm:block">
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-black" />
            </button>
          </div>

          {/* Cards Container */}
          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 sm:px-12 no-scrollbar"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="min-w-full sm:min-w-[48%] lg:min-w-[31%] 
                 max-[444px]:p-3 max-[444px]:rounded-md
                 bg-gray-50 rounded-lg shadow-lg p-6
                 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-60 max-[444px]:h-40"
                  />

                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                    <button className="bg-white text-black px-6 py-2 rounded-full font-semibold max-[444px]:px-4 max-[444px]:py-1">
                      View Product
                    </button>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl max-[444px]:text-base font-bold mt-4">
                  {item.name}
                </h3>

                {/* Fixed Description */}
                <p className="text-gray-500 text-sm max-[444px]:text-xs mt-2 line-clamp-3">
                  {item.description}
                </p>

                {/* Bottom Section */}
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-lg font-bold max-[444px]:text-base">
                    ${item.price}
                  </span>

                  <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 max-[444px]:px-3 max-[444px]:py-1">
                    Buy now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <div className="hidden sm:block">
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-black" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-600">
          Total Items: <span className="font-bold">{items.length}</span>
        </div>
      </div>
    </div>
  );
}
