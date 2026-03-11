'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8  from-black to-gray-900">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Ready to Start Your Literary Journey?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers discovering their next favorite book. Get exclusive deals, personalized recommendations,
            and early access to new releases.
          </p>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 space-y-6">
          <div className="flex items-center gap-2 justify-center">
            <Mail className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Subscribe to Our Newsletter</span>
          </div>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300 hover:bg-white/20"
            />
            <Button className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95 px-8 font-semibold">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </form>

          <p className="text-sm text-gray-300">
            No spam, just book recommendations and exclusive offers. Unsubscribe anytime.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Start Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 transition-all duration-300"
          >
            Contact Us
          </Button>
        </div>

        {/* Testimonial Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10">
          {[
            { star: '⭐⭐⭐⭐⭐', text: '"Best bookstore experience ever!"' },
            { star: '⭐⭐⭐⭐⭐', text: '"Fast shipping and amazing selection."' },
            { star: '⭐⭐⭐⭐⭐', text: '"Found so many gems here!"' },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="space-y-2 text-white hover:bg-white/10 p-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <p className="text-lg">{testimonial.star}</p>
              <p className="text-sm italic">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
