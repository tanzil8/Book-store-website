'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export default function Contact() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const carouselImages = [
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDHgui-aOlZ7169hjI6tg_IXFe1Jm-kitZA&s', alt: 'Bookstore Interior' },
    { src: 'https://thumbs.dreamstime.com/b/old-opened-antique-book-reading-library-banner-pages-old-opened-antique-book-wisdom-reading-library-banner-233721157.jpg', alt: 'Reading Area' },
    { src: 'https://img.freepik.com/premium-photo/colorful-collection-textbooks-modern-bookshelf-generated-by-ai_1078540-7839.jpg', alt: 'Bookstore Cafe' },
  ];

  const storeLocations = [
    {
      name: 'Downtown Branch',
      address: '123 Literary Lane, Downtown',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 9AM-9PM, Sat-Sun: 10AM-7PM',
    },
    {
      name: 'Uptown Branch',
      address: '456 Page Street, Uptown',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 10AM-8PM, Sat-Sun: 11AM-6PM',
    },
    {
      name: 'Mall Location',
      address: '789 Book Plaza, Shopping Center',
      phone: '(555) 345-6789',
      hours: 'Mon-Sun: 10AM-9PM',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? carouselImages.length - 1 : prev - 1
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
        <Navbar/>
      {/* Header */}
      
      {/* Hero Section */}
      <section className="  text-black py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg md:text-xl text-black">
            Have questions? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section id="carousel" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Explore Our Stores
          </h2>
          
          {/* Carousel Container */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl group">
            {/* Image */}
           <div className="relative h-96 w-full">
  <img
    src={carouselImages[currentSlide].src}
    alt={carouselImages[currentSlide].alt}
    className="w-full h-full object-cover transition-opacity duration-500"
  />

  {/* Overlay with info */}
  <div className="absolute inset-0 bg-black/30 hover:bg-black/20 transition-all duration-500 flex items-end">
    <div className="w-full p-8">
      <p className="text-white text-lg md:text-2xl font-semibold">
        {carouselImages[currentSlide].alt}
      </p>
    </div>
  </div>
</div>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 md:p-4 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-0"
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-3 md:p-4 transition-all duration-300 z-20 opacity-0 group-hover:opacity-100"
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Store Locations */}
      <section id="stores" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Our Locations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {storeLocations.map((store, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border-2 border-gray-200 hover:border-gray-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              >
                {/* Store Name */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 group-hover:text-gray-700 transition-colors duration-300">
                  {store.name}
                </h3>

                {/* Store Details */}
                <div className="space-y-4">
                  {/* Address */}
                  <div className="flex gap-4 items-start group/item">
                    <MapPin className="text-gray-600 mt-1 group-hover/item:text-gray-900 transition-colors duration-300" size={20} />
                    <p className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                      {store.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-start group/item">
                    <Phone className="text-gray-600 mt-1 group-hover/item:text-gray-900 transition-colors duration-300" size={20} />
                    <a
                      href={`tel:${store.phone}`}
                      className="text-gray-700 hover:text-black transition-colors duration-300 group-hover/item:text-gray-900"
                    >
                      {store.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4 items-start group/item">
                    <Clock className="text-gray-600 mt-1 group-hover/item:text-gray-900 transition-colors duration-300" size={20} />
                    <p className="text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                      {store.hours}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-black transition-all duration-300 hover:shadow-lg transform hover:scale-105">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-16 md:py-24 bg-white text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Send Us a Message
          </h2>
          <p className="text-black text-center mb-12 text-lg">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Input */}
              <div className="group">
                <label className="block text-sm font-semibold mb-3 text-black">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-gray-150  bg-gray-200 dark:bg-slate-800 text-black dark:text-white  border-none dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <label className="block text-sm font-semibold mb-3 text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3  bg-gray-150  bg-gray-200 dark:bg-slate-800 text-black dark:text-white rounded-lg border-none dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Phone and Subject */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Phone Input */}
              <div className="group">
                <label className="block text-sm font-semibold mb-3 text-black">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3  bg-gray-150  bg-gray-200 dark:bg-slate-800 text-black dark:text-white rounded-lg border-none dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>

              {/* Subject Input */}
              <div className="group">
                <label className="block text-sm font-semibold mb-3 text-black">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Book Inquiry"
                  className="w-full px-4 py-3  bg-gray-150  bg-gray-200 dark:bg-slate-800 text-black dark:text-white rounded-lg border-none dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Message Textarea */}
            <div className="group">
              <label className="block text-sm font-semibold mb-3 text-black">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows={6}
                className="w-full px-4 py-3  bg-gray-150  bg-gray-200 dark:bg-slate-800 text-black dark:text-white rounded-lg border-none dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400 resize-none"
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-center gap-4">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-gray-900 text-white hover:text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="w-full bg-green-500/20 border border-green-500 text-green-200 px-6 py-4 rounded-lg animate-pulse">
                  ✓ Message sent successfully! We'll get back to you soon.
                </div>
              )}
            </div>
          </form>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-gray-900 text-center cursor-pointer">
              <Mail className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:info@bookstore.com" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                info@bookstore.com
              </a>
            </div>

            {/* Call Us */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-gray-900 text-center cursor-pointer">
              <Phone className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+15551234567" className="text-gray-700 hover:text-gray-900 transition-colors duration-300">
                +1 (555) 123-4567
              </a>
            </div>

            {/* Visit Us */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-l-4 border-gray-900 text-center cursor-pointer">
              <MapPin className="mx-auto mb-4 text-gray-900" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-700">
                123 Literary Lane
                <br />
                Downtown, City 12345
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
     <Footer/>
    </div>
  );
}
