'use client';

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission here
    console.log('Email submitted:', email);
    alert('Thanks for signing up! We\'ll notify you when we launch.');
    setEmail('');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/sendmatch_background.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-10 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-1 h-1 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute top-80 right-1/3 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-pink-400 animate-flicker">SEND</span>
              <span className="text-blue-400 animate-flicker-delayed">MATCH</span>
              <span className="text-gray-300 text-sm sm:text-base ml-1">.com</span>
            </h1>
          </div>
        </div>

        {/* Main Heading */}
        <div className="text-center mb-8 sm:mb-12 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            A new era of dating has arrived!
          </h2>
          <div className="space-y-2 text-lg sm:text-xl md:text-2xl text-gray-200">
            <p className="font-light">Genuine connections, coming your way.</p>
          </div>
        </div>

        {/* Know More Button */}
        <div className="mb-12 sm:mb-16">
          <button className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Know More
          </button>
        </div>

        {/* Coming Soon Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Coming Soon...
          </h3>
          <p className="text-lg sm:text-xl text-gray-200 font-medium">
            Sign up and get notified.
          </p>
        </div>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-lg">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition-all duration-300"
          />
          <button
            type="submit"
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <p className="text-sm text-gray-400 text-center">
            Copyright © 2025 SendMatch • All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
