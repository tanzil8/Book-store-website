'use client'

export default function StorySection() {
  return (
    <section id="story" className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Image */}
          <div className="relative h-96  rounded-lg overflow-hidden group">
            <div className="absolute inset-0  from-gray-200 to-gray-300 flex items-center justify-center">
              <div className="text-8xl group-hover:scale-110 transition-transform duration-500">✨</div>
            </div>
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Our Story</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-black leading-tight">
                Crafting Literary Dreams Since 2010
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Founded with a passion for connecting readers with their next favorite book, BookHaven has grown into a
                premier destination for bibliophiles worldwide. Our journey began in a small storefront with just 500 books
                and a big dream.
              </p>

              <p>
                Today, we pride ourselves on curating an exceptional collection spanning every genre imaginable. From timeless
                classics to contemporary bestsellers, from niche independent works to international treasures—our shelves tell
                the stories of human experience.
              </p>

              <p>
                But BookHaven is more than just a bookstore. We're a community. We host author events, book clubs, reading
                workshops, and literary discussions that bring our customers together. We believe in the transformative power
                of reading and the connections it creates.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="p-6 bg-gray-50 border border-black/10 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:bg-gray-100">
              <p className="font-semibold text-black mb-2">Our Mission</p>
              <p className="text-gray-700">
                To inspire, educate, and empower readers of all ages by providing access to diverse stories, fostering a love
                of literature, and building a vibrant community of book lovers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
