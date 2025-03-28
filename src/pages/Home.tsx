import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import LogoVid from "../assets/AnimatedLogoVid.mp4";
import MapImg from "../assets/MapGunBW.jpeg";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import BackpackModel from "../assets/Backpack.jpg";
// import BigFont from "../assets/Coolvetica Font/Coolvetica Rg It.otf";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white w-full p-4 overflow-hidden relative">
        <div
          className="whitespace-nowrap inline-block"
          style={{
            animation: "scroll-left 30s linear infinite",
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
          <span className="text-xl inline">🚨🚨🚨</span>{" "}
          <span className="text-sm inline text-gray-800">
            [!!] TRANSMISSION:0324205v1 [!!]... ** DON'T MISS OUT ** EXCLUSIVE
            MONTHLY DROPS INITIATED... [ * ] DARK MODE LOADOUTS * COMING SOON! *
            STAY TUNED * <span className="text-xl inline">🚨🚨🚨</span>
            <Link to="/subscribe" className="text-gray-500 underline ml-2">
              SUBSCRIBE TO BE UPDATED{" "}
            </Link>
          </span>
        </div>
      </div>
      <div className="relative h-screen">
        <img src={MapImg} alt="Hero" className="w-full h-full object-cover " />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
          <div className="text-center text-white rounded-lg overflow-hidden max-w-3xl mx-auto mt-[-100px]">
            <div className="flex justify-center mt-4 mb-10 max-w-5xl w-full mx-auto">
              {" "}
              <video
                src={LogoVid}
                autoPlay
                muted
                playsInline
                style={{ height: "250px", opacity: 0.9 }}
                className="transform -translate-y-10 rounded-lg w-full object-cover"
              />
            </div>
            <div className="flex justify-center mt-[-50px]">
              <div className="bg-white bg-opacity-90 flex flex-col md:flex-row rounded-lg shadow-lg max-w-5xl w-full">
                {/* Left side - Image */}
                <div className="w-full md:w-1/2">
                  <img
                    src={BackpackModel}
                    alt="Hero"
                    className="w-full h-full rounded-l-lg object-cover"
                  />
                </div>

                {/* Right side - Text content */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
                  <p
                    style={{
                      fontFamily: "BigFont, Coolvetica Hv Comp",
                    }}
                    className="text-2xl font-medium text-gray-800 mb-6 text-center"
                  >
                    No Signal. No Limits.
                  </p>
                  <p className="text-md font-medium text-gray-800 mb-6 text-center">
                    Your everyday grind demands gear that keeps up. Our tactical
                    bags are built for action—tough, versatile, and ready for
                    anything life throws your way. Pack it, strap it, own
                    it—because staying ready isn't a choice, it's a mindset.
                  </p>
                  <div className="flex justify-center">
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
        </div>
      </div>

      {/* Featured Section */}
      <div className="max-w-7xl mx-auto px-4">
        <Reviews />
      </div>
      <Footer />
    </div>
  );
};
