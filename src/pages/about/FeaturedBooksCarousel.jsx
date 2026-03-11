'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'



const featuredBooks = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    category: 'Fiction',
    description: 'A dazzling novel about all the choices that go into a life well lived.',
    icon: '🌙',
  },
  {
    id: 2,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    category: 'Science Fiction',
    description: 'A thrilling space adventure that will keep you turning pages.',
    icon: '🚀',
  },
  {
    id: 3,
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Help',
    description: 'Transform your life through small, incremental changes.',
    icon: '⚛️',
  },
  {
    id: 4,
    title: 'The Gentle Art of Living',
    author: 'Jane Author',
    category: 'Philosophy',
    description: 'Discover wisdom for everyday life and personal growth.',
    icon: '🌱',
  },
  {
    id: 5,
    title: 'Digital Dreams',
    author: 'Tech Writer',
    category: 'Technology',
    description: 'Explore the future of innovation and technology.',
    icon: '💻',
  },
]

export default function FeaturedBooksCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredBooks.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + featuredBooks.length) % featuredBooks.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % featuredBooks.length)
  }

  const goToSlide = (index) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  return (
    <section id="books" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50 border-y border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Discover</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Featured Books</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Hand-picked selections from our curators to inspire your next reading adventure
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative rounded-xl overflow-hidden bg-white shadow-xl border border-black/10"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          {/* Carousel Items */}
          <div className="relative h-96 sm:h-96 lg:h-96">
            {featuredBooks.map((book, index) => (
              <div
                key={book.id}
                className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? 'opacity-100 scale-100 z-10'
                    : 'opacity-0 scale-95 z-0'
                }`}
              >
                <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
                  {/* Image Side */}
                  <div className="flex items-center justify-center">
                    <div className="w-full h-full  from-gray-100 to-gray-200 rounded-lg flex items-center justify-center hover:shadow-lg transition-shadow duration-300 transform hover:scale-105">
                      <div className="text-7xl sm:text-8xl">{book.icon}</div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex flex-col justify-center space-y-6">
                    <div>
                      <span className="inline-block px-4 py-1 bg-black text-white text-sm font-semibold rounded-full mb-4 hover:bg-gray-900 transition-colors duration-300">
                        {book.category}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-3xl sm:text-4xl font-bold text-black">{book.title}</h3>
                      <p className="text-xl text-gray-600 font-medium">by {book.author}</p>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">{book.description}</p>

                    <div className="pt-4">
                      <Button className="bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95">
                        Add to Wishlist
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white p-2 rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {featuredBooks.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-black w-8 h-2 scale-110'
                    : 'bg-black/30 w-2 h-2 hover:bg-black/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Book Counter */}
        <div className="mt-8 text-center text-gray-600">
          <p className="font-medium">
            Book <span className="font-bold text-black">{currentIndex + 1}</span> of{' '}
            <span className="font-bold text-black">{featuredBooks.length}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
