"use client";

import { useState, useEffect } from "react";

import { Menu, X, Search, Moon, Sun, LogIn } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [searchFocus, setSearchFocus] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Course", href: "/course" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <div className="max-w-screen-2xl container mx-auto px-2 ">
        <div className="flex justify-between items-center h-24">
          <div>
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-bold text-3xl max-[400px]:text-2xl max-[270px]:text-xl text-black dark:text-white  sm:inline group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                Book Store
              </span>
            </Link>
          </div>
          <div className="flex">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-black  dark:hover:text-white font-semibold text-1xl transition-colors duration-300 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden lg:flex items-center flex-1 mx-8 max-w-sm">
              <div
                className={`w-full relative transition-all duration-300 ${searchFocus ? "scale-105" : ""}`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  onFocus={() => setSearchFocus(true)}
                  onBlur={() => setSearchFocus(false)}
                  className="w-full px-8 py-2 bg-gray-100 dark:bg-slate-800 text-black dark:text-white rounded-lg border-none dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4 sm:gap-6">
              {/* Mobile Search */}

              {/* Theme Toggle */}

              {/* Login Button */}
              <Link to="/login" className="hidden lg:flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 group">
             
                <LogIn className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
                <span>Login</span>
              
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-2 border-t border-gray-200 dark:border-slate-800 animate-in slide-in-from-top-2 duration-300">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-4 py-2">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 pr-10 py-2 bg-gray-100 dark:bg-slate-800 text-black dark:text-white rounded-lg  dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 placeholder-gray-500 dark:placeholder-gray-400"
                />

                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="px-4 pt-2">
              <Link
                to="/login"
                className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:shadow-lg transition-all duration-300"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
