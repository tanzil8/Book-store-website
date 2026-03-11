'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
                Welcome to BookHaven
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-lg">
                Your sanctuary for literary treasures and unforgettable reading experiences. Discover thousands of stories
                that inspire, educate, and transform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-black text-black hover:bg-gray-50 transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-black/10">
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-black">50K+</p>
                <p className="text-sm text-gray-600">Books Available</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-black">100K+</p>
                <p className="text-sm text-gray-600">Happy Readers</p>
              </div>
              <div className="space-y-2">
                <p className="text-2xl sm:text-3xl font-bold text-black">30+</p>
                <p className="text-sm text-gray-600">Countries</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-96 sm:h-96 lg:h-full min-h-96">
            <div className="absolute inset-0  from-black/5 to-black/10 rounded-lg overflow-hidden">
              <div className="w-full h-full  from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-6xl">📖</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
