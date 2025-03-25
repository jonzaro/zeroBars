import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LogoVid from "../assets/AnimatedLogoVid.mp4";
import MapImg from "../assets/MapGunBW.jpeg";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="bg-white w-full p-4 whitespace-nowrap"
        style={{
          display: "flex",
          animation: "scroll-left 50s linear infinite",
        }}
      >
        <style>
          {`
      @keyframes scroll-left {
        0% {
        transform: translateX(100%);
        }
        100% {
        transform: translateX(-100%);
        }
      }
        `}
        </style>
        <p className="text-xl inline">🚨🚨🚨</p>{" "}
        <p className="text-sm inline text-gray-800  text-center">
          [!!] TRANSMISSION:0324205v1 [!!]... ** DON'T MISS OUT ** EXCLUSIVE
          MONTHLY DROPS INITIATED... [ * ] DARK MODE LOADOUTS * COMING SOON! *
          STAY TUNED * <p className="text-xl inline">🚨🚨🚨</p>
          <Link to="/subscribe" className="text-gray-500 underline ml-2">
            SUBSCRIBE TO BE UPDATED{" "}
          </Link>
        </p>
      </div>
      <div className="relative h-screen">
        <img src={MapImg} alt="Hero" className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white mb-80 align-middle rounded-lg overflow-hidden">
            <video
              src={LogoVid}
              autoPlay
              muted
              playsInline
              style={{ height: "250px", opacity: 0.9 }} // Adjust the height and opacity as needed
            />

            <div className="mt-4 flex justify-center">
              <div className="bg-white bg-opacity-90 w-3/5 p-6 rounded-md shadow-lg inline-block">
                <p className="text-lg font-medium text-gray-800 mb-6 text-center">
                  No Signal, No Limits — Stay Ready Anywhere.{" "}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center px-6 py-3 bg-white text-black border-black border-2 rounded-md hover:bg-gray-300 transition-colors"
                  style={{ width: "auto" }}
                >
                  Shop Now <ArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
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
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">About Us</h4>
              <p className="text-sm">
                We are committed to providing the best products and services to
                our customers. Stay connected and explore more.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <Link to="/home" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <ul className="text-sm space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-400">
            © 2023 Zero Bars Outpost. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};
