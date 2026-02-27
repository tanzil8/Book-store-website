'use client'

import { useState } from 'react'

import { ChevronDown, Heart, Share2, BookOpen } from 'lucide-react'


const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    price: "$18.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg",
  },
  {
    id: 2,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    price: "$15.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71UwSHSZRnS.jpg",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    price: "$14.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: "$12.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81bsw6fnUiL.jpg",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: "$11.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71UypkUjStL.jpg",
  },
  {
    id: 6,
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    price: "$19.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL.jpg",
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: "$10.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  },
  {
    id: 8,
    title: "Start With Why",
    author: "Simon Sinek",
    price: "$13.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg",
  },
  {
    id: 9,
    title: "Can't Hurt Me",
    author: "David Goggins",
    price: "$16.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81gTRv2HXrL.jpg",
  },
  {
    id: 10,
    title: "Ikigai",
    author: "Héctor García",
    price: "$9.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81l3rZK4lnL.jpg",
  },
]


export function BookCard({ id, title, author, price, image, rating, reviews }) {
  const [isExpanded, setIsExpanded] = useState(false)


  return (
    <div className="group relative">
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-lg bg-card border border-border shadow-lg transition-all duration-500 ease-out hover:shadow-2xl">
        {/* Image Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {books.map((books) => (
    <div key={books.id} className="group">
     <div className="relative w-full h-52 sm:h-60 md:h-64 lg:h-72 overflow-hidden bg-muted rounded-lg group">
  <img
    src={books.image}
    alt={books.title}
    className="w-full h-full object-cover 
               transition-transform duration-500 
               group-hover:scale-110
               grayscale hover:grayscale-0
               brightness-90 contrast-110"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/10 
                  opacity-0 
                  group-hover:opacity-100 
                  transition duration-300" />
</div>
    </div>
  ))}
</div>
        {/* Content Container */}
        <div className="relative p-4 transition-all duration-300 group-hover:bg-muted/30">
          {/* Title */}
          <h3 className="font-semibold text-card-foreground text-sm line-clamp-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>

          {/* Author */}
          <p className="text-xs text-muted-foreground mt-1">by {author}</p>

          {/* Rating */}
          <div className="flex items-center gap-1 mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400'
                      : 'text-muted'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          {/* Price */}
          <p className="text-lg font-bold text-primary mt-3">{price}</p>

          {/* Action Buttons - Hidden by default, visible on expand */}
          <div
            className={`grid grid-cols-2 gap-2 mt-4 overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <button className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-3 rounded text-xs font-medium transition-colors duration-200">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Wishlist</span>
            </button>
            <button className="flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground py-2 px-3 rounded text-xs font-medium transition-colors duration-200">
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">Preview</span>
            </button>
            <button className="col-span-2 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground py-2 px-3 rounded text-xs font-medium transition-colors duration-200">
              <Share2 className="w-4 h-4" />
              Share
            </button>
          </div>

          {/* Show More Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 flex items-center justify-center gap-2 py-2 px-3 rounded border border-border hover:bg-muted/50 text-card-foreground text-xs font-medium transition-all duration-300 group-hover:border-primary/50"
          >
            <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? 'rotate-180' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-primary/0 via-primary/0 to-primary/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}
