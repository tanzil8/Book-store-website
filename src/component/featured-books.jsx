'use client';

import { Button } from "../components/ui/button";
import { ShoppingCart, Star } from 'lucide-react';


const featured = [
  {
    id: 1,
    title: 'The Midnight Library',
    author: 'Matt Haig',
    price: 18.99,
    rating: 4.8,
    reviews: 3210,
    emoji: '✨',
    color: 'from-blue-100 to-blue-50',
  },
  {
    id: 2,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 16.99,
    rating: 4.9,
    reviews: 5840,
    emoji: '⚡',
    color: 'from-amber-100 to-amber-50',
  },
  {
    id: 3,
    title: 'The Silent Patient',
    author: 'Alex Michaelides',
    price: 17.99,
    rating: 4.7,
    reviews: 2945,
    emoji: '🔪',
    color: 'from-red-100 to-red-50',
  },
  {
    id: 4,
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    price: 19.99,
    rating: 4.8,
    reviews: 4120,
    emoji: '🚀',
    color: 'from-purple-100 to-purple-50',
  },
];

export function FeaturedBooks() {
  return (
    <section id="bestsellers" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Bestsellers & <span className="text-primary">Trending</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover the most loved books by our readers. These titles are making waves and capturing hearts everywhere.
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map((book) => (
            <div
              key={book.id}
              className="group flex flex-col h-full bg-card rounded-xl overflow-hidden border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Book Cover */}
              <div className={` ${book.color} h-64 flex items-center justify-center relative overflow-hidden`}>
                <div className="text-7xl group-hover:scale-110 transition-transform duration-500 transform">
                  {book.emoji}
                </div>
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {book.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{book.author}</p>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    ({book.reviews.toLocaleString()})
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-end justify-between pt-2 mt-auto">
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-foreground">
                      ${book.price.toFixed(2)}
                    </span>
                  </div>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary text-primary-foreground group-hover:shadow-lg transition-all duration-300"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 transition-all duration-300"
          >
            View All Books
          </Button>
        </div>
      </div>
    </section>
  );
}
