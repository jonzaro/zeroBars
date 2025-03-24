import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">ZERO BARS OUTPOST</h1>
            <p className="text-xl mb-8">Technical gear for urban exploration</p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">MORE INFO / ABOUT US / CALL TO ACTION</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add ProductCard components here */}
        </div>
      </div>
    </div>
  );
};