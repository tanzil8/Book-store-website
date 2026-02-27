'use client';

import { useState } from 'react';
import { ChevronRight, BookOpen, MoreHorizontal } from 'lucide-react';

const books = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    cover: '📚',
    year: 2020,
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    cover: '🚀',
    year: 2021,
    rating: 4.7,
  },
  {
    id: 3,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    cover: '🔍',
    year: 2019,
    rating: 4.5,
  },
  {
    id: 4,
    title: 'It Ends With Us',
    author: 'Colleen Hoover',
    cover: '💔',
    year: 2016,
    rating: 4.6,
  },
  {
    id: 5,
    title: 'Atomic Habits',
    author: 'James Clear',
    cover: '⚛️',
    year: 2018,
    rating: 4.9,
  },
  {
    id: 6,
    title: 'The Thursday Murder Club',
    author: 'Richard Osman',
    cover: '🕵️',
    year: 2020,
    rating: 4.7,
  },
  {
    id: 7,
    title: 'Educated',
    author: 'Tara Westover',
    cover: '✏️',
    year: 2018,
    rating: 4.8,
  },
  {
    id: 8,
    title: 'The House in the Cerulean Sea',
    author: 'TJ Klune',
    cover: '🏠',
    year: 2020,
    rating: 4.6,
  },
];



function BookCard({ book, isShowMore = false }) {
  const [isHovered, setIsHovered] = useState(false);

  if (isShowMore) {
    return (
      <div
        className="relative group cursor-pointer h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`h-full rounded-xl border border-gray-700  from-gray-900 to-gray-800 
          flex items-center justify-center transition-all duration-300 transform
          ${isHovered ? 'scale-105 border-gray-500 shadow-lg shadow-gray-900/50' : ''}`}
        >
          <div className="flex flex-col items-center gap-3">
            <MoreHorizontal className="w-8 h-8 text-gray-400" />
            <span className="text-gray-400 font-medium">Show More</span>
          </div>
        </div>

        {isHovered && (
          <div className="absolute inset-0 rounded-xl  from-gray-800/30 to-transparent opacity-50 transition-opacity duration-300" />
        )}
      </div>
    );
  }

  return (
    <div
      className="relative group cursor-pointer h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`h-full rounded-xl border border-gray-700  from-gray-900 via-gray-900 to-gray-800 
        overflow-hidden transition-all duration-300 transform flex flex-col
        ${isHovered ? 'scale-105 border-gray-500 shadow-xl shadow-gray-900/60' : ''}`}
      >
        {/* Book Cover Area */}
        <div className="flex-1  from-gray-800 to-gray-900 flex items-center justify-center min-h-48 relative overflow-hidden">
          <div
            className={`text-7xl transition-transform duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          >
            {book?.cover}
          </div>

          {/* Hover overlay effect */}
          {isHovered && (
            <div className="absolute inset-0  from-gray-900/60 via-transparent to-transparent opacity-40 transition-opacity duration-300" />
          )}
        </div>

        {/* Card Content */}
        <div className="p-4 flex flex-col ">
          <h3 className="text-gray-100 font-bold text-sm line-clamp-2 mb-1">
            {book?.title}
          </h3>
          <p className="text-gray-400 text-xs mb-3 line-clamp-1">{book?.author}</p>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(book?.rating || 0)
                      ? 'text-yellow-400'
                      : 'text-gray-700'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-400 text-xs">{book?.rating}</span>
          </div>

          {/* Year */}
          <p className="text-gray-500 text-xs mb-3">{book?.year}</p>

          {/* Hover Action */}
          <div
            className={`flex items-center gap-2 text-gray-400 text-xs font-medium transition-all duration-300 transform
            ${isHovered ? 'translate-x-0 opacity-100' : 'translate-x-1 opacity-50'}`}
          >
            <span>Read More</span>
            <ChevronRight className="w-3 h-3" />
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      {isHovered && (
        <div className="absolute -inset-px rounded-xl  from-gray-600 via-gray-500 to-gray-600 opacity-20 blur transition-opacity duration-300 -z-10" />
      )}
    </div>
  );
}

export default function CardPage() {
  return (
    <div className="min-h-screen  text-black py-12 px-6 md:px-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-white">
          Book Collection
        </h1>
        <p className="text-gray-400 text-lg">
          Explore our curated collection of bestselling novels and non-fiction.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Regular Books - First 8 */}
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}

          {/* Show More Card */}
          <BookCard isShowMore />
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          Hover over any card to see more details and interactions. The layout is fully
          responsive and optimized for all device sizes.
        </p>
      </div>
    </div>
  );
}