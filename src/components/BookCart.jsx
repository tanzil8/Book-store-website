'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, ShoppingBag, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Product = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: 2,
    name: 'Leather Crossbody Bag',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&h=500&fit=crop',
    category: 'Accessories',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Smart Watch Ultra',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.9,
  },
  {
    id: 4,
    name: 'Sunglasses Premium',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    category: 'Accessories',
    rating: 4.5,
  },
  {
    id: 5,
    name: 'Camera Pro 4K',
    price: 449.99,
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&h=500&fit=crop',
    category: 'Electronics',
    rating: 4.9,
  },
  {
    id: 6,
    name: 'Vintage Wrist Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523170335258-f875a49a11b4?w=500&h=500&fit=crop',
    category: 'Accessories',
    rating: 4.7,
  },
]

export default function BookCart() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [favorites, setFavorites] = useState<Set<number>>(new Set())
  const carouselRef = useRef<HTMLDivElement>(null)
  const [itemsPerView, setItemsPerView] = useState(4)

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1)
      } else if (window.innerWidth < 768) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(PRODUCTS.length / itemsPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.ceil(PRODUCTS.length / itemsPerView) - 1 : prev - 1
    )
  }

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  const displayedProducts = PRODUCTS.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  )

  return (
    <div className="min-h-screen  from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-2">
            Featured Collection
          </h1>
          <p className="text-gray-600 text-lg">
            Discover our hand-picked selection of premium products
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Products Grid */}
          <div
            ref={carouselRef}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {displayedProducts.map((product) => (
                <div
                  key={product.id}
                  className="group h-full transition-all duration-300"
                >
                  <div className="h-full flex flex-col bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden bg-gray-200">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors duration-300 ${
                            favorites.has(product.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>

                      {/* Category Badge */}
                      <div className="absolute top-3 left-3 bg-gray-900 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {product.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between">
                      <div>
                        <h3 className="text-black font-bold text-base sm:text-lg mb-2 line-clamp-2 group-hover:text-gray-800 transition-colors">
                          {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center gap-1 mb-3">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <span key={i} className="text-sm">
                                {'★'}
                              </span>
                            ))}
                          </div>
                          <span className="text-gray-600 text-sm ml-1">
                            {product.rating}
                          </span>
                        </div>
                      </div>

                      {/* Footer */}
                      <div className="space-y-3">
                        <div className="text-2xl font-bold text-black">
                          ${product.price.toFixed(2)}
                        </div>
                        <Button
                          className="w-full bg-gray-900 hover:bg-black text-white font-semibold py-2 transition-all duration-300 rounded-lg flex items-center justify-center gap-2 group/btn"
                        >
                          <ShoppingBag className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          {Math.ceil(PRODUCTS.length / itemsPerView) > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute -left-4 sm:-left-5 top-1/3 z-10 bg-white hover:bg-gray-100 text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute -right-4 sm:-right-5 top-1/3 z-10 bg-white hover:bg-gray-100 text-black p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(Math.ceil(PRODUCTS.length / itemsPerView))].map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === currentIndex
                      ? 'bg-gray-900 w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
