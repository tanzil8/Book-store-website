'use client'

import { Book, Heart, Zap, Users } from 'lucide-react'



const values = [
  {
    icon: <Book className="w-8 h-8" />,
    title: 'Quality Collections',
    description:
      'Carefully curated selections spanning all genres, from classics to contemporary works. Every book is chosen to delight our readers.',
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'Reader First',
    description:
      'Your satisfaction is our priority. We offer personalized recommendations, easy returns, and dedicated customer service.',
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: 'Fast Shipping',
    description:
      'Get your books quickly with our efficient shipping network. Track your order in real-time from warehouse to doorstep.',
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Community',
    description:
      'Join our vibrant community of readers. Participate in book clubs, author events, and literary discussions year-round.',
  },
]

export default function ValuesSection() {
  return (
    <section id="values" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-2">Why Choose Us</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-4">Our Core Values</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            What sets BookHaven apart in the world of literature
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-8 bg-white border border-black/10 rounded-xl hover:border-black hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div className="mb-6 p-4 bg-gray-100 w-fit rounded-lg group-hover:bg-black group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                <div className="text-gray-900 group-hover:text-white transition-colors duration-300">{value.icon}</div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors duration-300">
                {value.title}
              </h3>

              <p className="text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                {value.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 h-1 w-0 bg-black group-hover:w-8 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { number: '2010', label: 'Founded' },
            { number: '500+', label: 'Staff Members' },
            { number: '50+', label: 'Locations Worldwide' },
          ].map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 border border-black/10 rounded-xl text-center hover:bg-gray-100 hover:border-black transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-4xl sm:text-5xl font-bold text-black mb-2">{item.number}</p>
              <p className="text-gray-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
