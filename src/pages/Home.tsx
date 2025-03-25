import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LogoSVGUrl from "../assets/AnimatedLogoVid.mp4";
import HeroImg from "../assets/HeroImg.png";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen">
        <img src={HeroImg} alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white mb-80 ">
            <video src={LogoSVGUrl} autoPlay muted playsInline /> <br></br>
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
        <h2 className="text-3xl font-bold mb-8">
          MORE INFO / ABOUT US / CALL TO ACTION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Add ProductCard components here */}
        </div>
      </div>
    </div>
  );
};
