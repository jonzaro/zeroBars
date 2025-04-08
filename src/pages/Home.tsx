import React from "react";
import { Link } from "react-router-dom";
import LogoVid from "../assets/AnimatedLogoVid.mp4";
import MapImg from "../assets/MapGunBW.jpeg";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Timeline from "../components/Timeline";
import { ArrowRight } from "lucide-react";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-white w-full p-4 overflow-hidden relative">
        <div
          className="whitespace-nowrap w-full"
          style={{
            animation: "scroll-left 20s linear infinite",
            maxWidth: "100%",
            display: "block",
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
          <span className="text-xl inline">⚠️⚠️⚠️</span>{" "}
          <span className="text-sm inline text-gray-800">
            [!!] TRANSMISSION:0324205v1 [!!]... **** EXCLUSIVE MONTHLY DROPS
            INITIATED... [ * ] DARK MODE LOADOUTS * COMING SOON! * STAY TUNED *{" "}
            <span className="text-xl inline">⚠️⚠️⚠️</span>
            {/* <Link to="/subscribe" className="text-gray-500 underline ml-2">
              SUBSCRIBE TO BE UPDATED{" "}
            </Link> */}
          </span>
        </div>
      </div>
      <div className="relative h-screen">
        <img src={MapImg} alt="Hero" className="w-full h-full object-cover " />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col overflow-hidden">
          <div className="rounded-lg overflow-hidden mx-auto w-full flex-shrink-0">
            <div className="mt-2 mb-6 w-auto mx-auto px-4 lg:w-4/5 flex justify-center">
              <video
                src={LogoVid}
                autoPlay
                muted
                playsInline
                className="transform rounded-lg max-w-5xl object-cover w-full h-auto opacity-90"
                style={{
                  maxWidth: "50vw",
                  zIndex: 10,
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div className="backdrop-blur-md bg-white font-custom2 p-6 rounded-lg shadow-2xl mb-8 text-center flex flex-col items-center mx-auto max-w-md w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
            <h2 className="text-black text-xl sm:text-2xl lg:text-3xl font-bold mb-3">
              No Signal. No Limits.
            </h2>
            <p className="text-black text-sm sm:text-base mb-4 opacity-80">
              Your everyday grind demands gear that keeps up. Our tactical bags
              are tough, versatile, and ready for anything life throws your way.
              Pack it, strap it, own it—because staying ready isn’t a choice,
              it’s a mindset.
            </p>
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3 bg-white text-black font-medium rounded-md overflow-hidden transition-all duration-300 hover:bg-gray-900 hover:text-white"
            >
              <span className="relative z-10 flex items-center">
                Shop Now{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div
            className="flex-1 overflow-auto pb-4 scrollbar-hide md:pb-4 sm:max-h-[calc(100vh-400px)] max-h-[calc(100vh-300px)]"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
            }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
              display: none;
              }
              @media (max-width: 640px) {
              .timeline-container {
                height: auto;
                flex: 1;
              }
              }
            `}</style>
            <Timeline />
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <Reviews />

      <Footer />
    </div>
  );
};
