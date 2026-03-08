'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ShoppingCart, Heart } from 'lucide-react';



const SAMPLE_PRODUCTS= [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 129.99,
    originalPrice: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.8,
    reviews: 324,
    badge: '35% OFF',
  },
  {
    id: 2,
    name: 'Ultra HD Smart Watch',
    price: 249.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    rating: 4.6,
    reviews: 512,
    badge: '37% OFF',
  },
  {
    id: 3,
    name: 'Professional Camera Lens',
    price: 599.99,
    originalPrice: 899.99,
    image: 'https://images.unsplash.com/photo-1606986628025-35d57e735ae0?w=500&h=500&fit=crop',
    rating: 4.9,
    reviews: 189,
    badge: '33% OFF',
  },
  {
    id: 4,
    name: 'Portable Bluetooth Speaker',
    price: 79.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1589003077984-894e133814c9?w=500&h=500&fit=crop',
    rating: 4.7,
    reviews: 678,
    badge: '38% OFF',
  },
];

export default function BookCart() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(true);
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [scrollMode, setScrollMode] = useState<'horizontal' | 'vertical'>('horizontal');
  const carouselRef = React.useRef(null);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth, scrollTop, scrollHeight, clientHeight } = carouselRef.current;
      setScrollPosition(scrollLeft);
      
      if (scrollMode === 'horizontal') {
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);
      } else {
        setCanScrollUp(scrollTop > 0);
        setCanScrollDown(scrollTop < scrollHeight - clientHeight - 20);
      }
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      
      if (scrollMode === 'horizontal') {
        const newScrollLeft =
          direction === 'left'
            ? carouselRef.current.scrollLeft - scrollAmount
            : carouselRef.current.scrollLeft + scrollAmount;

        carouselRef.current.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      } else {
        const newScrollTop =
          direction === 'up'
            ? carouselRef.current.scrollTop - scrollAmount
            : carouselRef.current.scrollTop + scrollAmount;

        carouselRef.current.scrollTo({
          top: newScrollTop,
          behavior: 'smooth',
        });
      }

      setTimeout(checkScroll, 300);
    }
  })

  return (
    <div className="w-full  from-slate-50 via-white to-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Featured Products
            </h2>
            <p className="mt-2 text-slate-600">
              Handpicked items just for you
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {/* Scroll Mode Toggle */}
            <div className="hidden sm:flex gap-2 bg-slate-100 p-1 rounded-full">
              <button
                onClick={() => {
                  setScrollMode('horizontal');
                  checkScroll();
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  scrollMode === 'horizontal'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Horizontal
              </button>
              <button
                onClick={() => {
                  setScrollMode('vertical');
                  checkScroll();
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                  scrollMode === 'vertical'
                    ? 'bg-blue-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Vertical
              </button>
            </div>

            {/* Scroll Buttons */}
            <div className="hidden sm:flex gap-2">
              {scrollMode === 'horizontal' ? (
                <>
                  <button
                    onClick={() => scroll('left')}
                    disabled={!canScrollLeft}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      canScrollLeft
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={() => scroll('right')}
                    disabled={!canScrollRight}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      canScrollRight
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => scroll('up')}
                    disabled={!canScrollUp}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      canScrollUp
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                    aria-label="Scroll up"
                  >
                    <ChevronLeft className="w-6 h-6 rotate-90" />
                  </button>
                  <button
                    onClick={() => scroll('down')}
                    disabled={!canScrollDown}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      canScrollDown
                        ? 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                    aria-label="Scroll down"
                  >
                    <ChevronRight className="w-6 h-6 rotate-90" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative group">
          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className={`gap-4 scrollbar-hide ${
              scrollMode === 'horizontal'
                ? 'flex overflow-x-auto overflow-y-hidden pb-4'
                : 'flex flex-col overflow-y-auto overflow-x-hidden pr-4 max-h-96'
            }`}
            style={{ scrollBehavior: 'smooth' }}
          >
            {SAMPLE_PRODUCTS.map((product) => (
              <div
                key={product.id}
                className={` transition-all duration-300 ${
                  scrollMode === 'horizontal' ? 'w-full sm:w-96' : 'w-full h-auto'
                }`}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Card Container */}
                <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-blue-300">
                  {/* Image Container */}
                  <div className="relative h-64 sm:h-72 bg-slate-100 overflow-hidden group/image">
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredProduct === product.id ? 'scale-110' : 'scale-100'
                      }`}
                    />

                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                        {product.badge}
                      </div>
                    )}

                    {/* Overlay Actions */}
                    <div
                      className={`absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300 ${
                        hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <button className="bg-white text-slate-900 p-3 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110">
                        <Heart className="w-6 h-6" />
                      </button>
                      <button className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 animate-bounce">
                        <ShoppingCart className="w-6 h-6" />
                      </button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 space-y-4">
                    {/* Product Name */}
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 line-clamp-2 hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Rating */}
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-slate-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-slate-700">
                        {product.rating}
                      </span>
                      <span className="text-sm text-slate-500">
                        ({product.reviews})
                      </span>
                    </div>

                    {/* Price Section */}
                    <div className="flex items-center gap-3 py-2">
                      <span className="text-2xl sm:text-3xl font-bold text-blue-600">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-lg text-slate-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full  from-blue-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                      <ShoppingCart className="w-5 h-5" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="flex sm:hidden gap-2 mt-4 justify-center flex-wrap">
            {scrollMode === 'horizontal' ? (
              <>
                <button
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    canScrollLeft
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    canScrollRight
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => scroll('up')}
                  disabled={!canScrollUp}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    canScrollUp
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label="Scroll up"
                >
                  <ChevronLeft className="w-5 h-5 rotate-90" />
                </button>
                <button
                  onClick={() => scroll('down')}
                  disabled={!canScrollDown}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    canScrollDown
                      ? 'bg-blue-500 hover:bg-blue-600 text-white'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                  aria-label="Scroll down"
                >
                  <ChevronRight className="w-5 h-5 rotate-90" />
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
