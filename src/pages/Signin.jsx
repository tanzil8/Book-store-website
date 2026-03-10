'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';


export function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(`Signup successful! Welcome ${name} (${email})`);
    }, 1500);
  };

  return (
<>
<Navbar/>
    <div className=" w-full flex items-center justify-center  from-gray-200 to-gray-300 px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-md animate-fade-in">
        {/* Animated background decoration */}
        <div className="absolute inset-0 -z-10 h-full w-full  from-gray-300 via-gray-200 to-gray-300 opacity-20 blur-3xl animate-pulse" />

        <Card className="border border-gray-200 shadow-xl bg-white/95 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:border-gray-300">
          <CardHeader className="space-y-3 pb-8">
            
            
            <CardTitle className="text-2xl font-bold text-center text-gray-900">Create Account</CardTitle>
            <CardDescription className="text-center text-gray-600">
              Join us today by creating your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
             

              {/* Email Field */}
              <div className="space-y-2 group">
                <Label htmlFor="email" className="text-sm font-semibold text-gray-900 block">
                  Email Address
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-700">
                    <Mail className="w-5 h-5" />
                  </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-11 border-gray-300 focus:border-gray-700 focus:ring-gray-700 text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-400 focus:shadow-lg focus:shadow-gray-400/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="space-y-2 group">
                <Label htmlFor="password" className="text-sm font-semibold text-gray-900">
                  Password
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-700">
                    <Lock className="w-5 h-5" />
                  </div>
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 h-11 border-gray-300 focus:border-gray-700 focus:ring-gray-700 text-gray-900 placeholder-gray-400 transition-all duration-300 hover:border-gray-400 focus:shadow-lg focus:shadow-gray-400/20"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-all duration-300 hover:scale-110"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full h-11  from-gray-800 to-gray-700 hover:from-gray-900 hover:to-gray-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-gray-800/30 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Creating account...</span>
                  </div>
                ) : (
                  'Sign Up'
                )}
              </Button>

              {/* Divider */}
              <div className="relative flex items-center gap-4">
                <div className="flex-1 h-px bg-gray-300" />
                <span className="text-xs text-gray-600 font-medium">OR</span>
                <div className="flex-1 h-px bg-gray-300" />
              </div>

              {/* OAuth Buttons */}
              <Button
                type="button"
                variant="outline"
                className="w-full h-10 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-gray-900 transition-all duration-300 hover:shadow-md"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15.545 6.558a9.42 9.42 0 01.139 1.626c0 2.889-2.126 5.413-4.953 5.413-2.829 0-5.286-2.524-5.286-5.413 0-.575.062-1.138.166-1.626m5.891 7.75c3.682-1.608 5.7-5.297 5.7-9.127v-.375c0-1.1.693-2.05 1.696-2.418-.04.067-.079.136-.117.206A6.667 6.667 0 0020 10a6.667 6.667 0 01-2.665 5.332l-.126-.21c-1.003-.368-1.696-1.318-1.696-2.418v-.375z" />
                </svg>
                Sign up with Google
              </Button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600">
                Already have an account?{' '}
                <Link to="/signup" className="font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-300">
                  Sign up
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom decoration */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Protected by enterprise-grade security</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
    <Footer/>
    </>
  );
}
