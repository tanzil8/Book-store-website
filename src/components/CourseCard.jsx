'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Star } from 'lucide-react'

import axios from 'axios'


export default function CourseCard() {

  const [displayCount, setDisplayCount] = useState(8)
  const [book, setBook] = useState([])

  const displayedBooks = book.slice(0, displayCount)
  const hasMore = displayCount < book.length
  
  useEffect(()=>{
   
    const getBook = async()=>{
      
      try {
        const res = await axios.get("http://localhost:3000/book")
        setBook(res.data)

      } catch (error) {
        console.log(error);
        
      }
   
    }
  getBook()

  },[])


  return (
    <div className="min-h-screen">
      
      <main className="max-w-screen-2xl container mx-auto px-2 py-10">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          {displayedBooks.map((item) => (
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

        {/* Show More */}
        {hasMore && (
          <div className="flex justify-center">
            <Button
              onClick={() => setDisplayCount(displayCount + 4)}
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 text-lg font-semibold rounded-lg"
            >
              Show More Books
            </Button>
          </div>
        )}

        {!hasMore && displayedBooks.length > 8 && (
          <div className="text-center mt-8 text-gray-600">
            <p className="text-lg">You've reached the end of our collection!</p>
          </div>
        )}

      </main>
    </div>
  )
}