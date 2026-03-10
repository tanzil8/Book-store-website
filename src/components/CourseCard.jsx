'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Star } from 'lucide-react'

// Sample book data
const allBooks = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: '$12.99',
    rating: 4.5,
    reviews: 320,
    cover: '📚',
    genre: 'Classic',
    description: 'A timeless classic of American literature.'
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: '$14.99',
    rating: 4.8,
    reviews: 580,
    cover: '📖',
    genre: 'Fiction',
    description: 'An epic of American frontier life.'
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: '$13.99',
    rating: 4.6,
    reviews: 450,
    cover: '📕',
    genre: 'Dystopian',
    description: 'A dark and intriguing novel.'
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: '$11.99',
    rating: 4.7,
    reviews: 520,
    cover: '📗',
    genre: 'Romance',
    description: 'A romantic classic for all ages.'
  },
  {
    id: 5,
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    price: '$15.99',
    rating: 4.8,
    reviews: 680,
    cover: '📘',
    genre: 'Fantasy',
    description: 'An adventure in Middle-earth.'
  },
  {
    id: 6,
    title: 'Dune',
    author: 'Frank Herbert',
    price: '$16.99',
    rating: 4.7,
    reviews: 420,
    cover: '📙',
    genre: 'Sci-Fi',
    description: 'A epic science fiction masterpiece.'
  },
  {
    id: 7,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    price: '$12.99',
    rating: 4.3,
    reviews: 280,
    cover: '📚',
    genre: 'Fiction',
    description: 'A coming of age story.'
  },
  {
    id: 8,
    title: 'Brave New World',
    author: 'Aldous Huxley',
    price: '$14.99',
    rating: 4.5,
    reviews: 350,
    cover: '📖',
    genre: 'Dystopian',
    description: 'A dystopian future unveiled.'
  },
  {
    id: 9,
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    price: '$18.99',
    rating: 4.9,
    reviews: 920,
    cover: '📕',
    genre: 'Fantasy',
    description: 'The ultimate fantasy trilogy.'
  },
  {
    id: 10,
    title: 'Moby Dick',
    author: 'Herman Melville',
    price: '$13.99',
    rating: 4.2,
    reviews: 210,
    cover: '📗',
    genre: 'Adventure',
    description: 'An epic tale of the sea.'
  },
  {
    id: 11,
    title: 'Jane Eyre',
    author: 'Charlotte Brontë',
    price: '$12.99',
    rating: 4.6,
    reviews: 390,
    cover: '📘',
    genre: 'Romance',
    description: 'A gothic romance classic.'
  },
  {
    id: 12,
    title: 'Wuthering Heights',
    author: 'Emily Brontë',
    price: '$14.99',
    rating: 4.4,
    reviews: 320,
    cover: '📙',
    genre: 'Romance',
    description: 'A dark romantic tale.'
  },
]

export default function CourseCard() {
  const [displayCount, setDisplayCount] = useState(8)

  const displayedBooks = allBooks.slice(0, displayCount)
  const hasMore = displayCount < allBooks.length

  return (
    <div className="min-h-screen  from-gray-50 via-gray-100 to-gray-200">
      {/* Header */}
      <header className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-gray-800" />
            <h1 className="text-4xl font-bold text-gray-900">BookStore</h1>
          </div>
          <p className="text-gray-600">Discover your next favorite book</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Grid of Books */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedBooks.map((book) => (
            <Card
              key={book.id}
              className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200 h-full flex flex-col group hover:border-gray-400"
            >
              {/* Cover Area */}
              <div className=" from-gray-700 to-gray-900 h-48 flex items-center justify-center overflow-hidden relative">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {book.cover}
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <CardTitle className="text-lg text-gray-900 line-clamp-2">
                      {book.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-sm mt-1">
                      by {book.author}
                    </CardDescription>
                  </div>
                </div>
                <Badge className="w-fit bg-gray-700 text-white hover:bg-gray-800">
                  {book.genre}
                </Badge>
              </CardHeader>

              <CardContent className=" pb-4">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {book.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(book.rating)
                            ? 'fill-yellow-500'
                            : 'fill-gray-300 text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">
                    {book.rating} ({book.reviews})
                  </span>
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {book.price}
                  </span>
                </div>
              </CardContent>

              {/* Action Button */}
              <div className="px-6 pb-6">
                <Button className="w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 rounded-lg transition-colors">
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="flex justify-center">
            <Button
              onClick={() => setDisplayCount(displayCount + 4)}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Show More Books
            </Button>
          </div>
        )}

        {/* Footer Message */}
        {!hasMore && displayedBooks.length > 8 && (
          <div className="text-center mt-8 text-gray-600">
            <p className="text-lg">You've reached the end of our collection!</p>
          </div>
        )}
      </main>
    </div>
  )
}
