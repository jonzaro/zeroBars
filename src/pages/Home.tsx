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
            <Link to="/subscribe" className="text-gray-500 underline ml-2">
              SUBSCRIBE TO BE UPDATED{" "}
            </Link>
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
          <div
            className="bg-white font-custom2 p-5 rounded-md opacity-90 mb-6 text-center flex flex-col items-center mx-auto text-sm sm:text-base lg:text-lg"
            style={{
              width: "30%",
            }}
          >
            No Signal. No Limits.
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-2 bg-gray-100 text-black border-black border-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors mt-2"
              style={{ width: "auto" }}
            >
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </div>
          <div
            className="flex-1 overflow-auto pb-4 scrollbar-hide"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
            }}
          >
            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
          display: none;
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
