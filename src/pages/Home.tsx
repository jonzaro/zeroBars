import React from "react";
import { Link } from "react-router-dom";
import LogoVid from "../assets/AnimatedLogoVid.mp4";
import HeroBlackBig from "../assets/HeroBlackBig.png";
import Footer from "../components/Footer";
import Reviews from "../components/Reviews";
import Timeline from "../components/Timeline";
import { ArrowRight } from "lucide-react";

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="bg-black w-full p-4 overflow-hidden relative">
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
          <span className="text-sm inline text-white">
            [!!] TRANSMISSION:0324205v1 [!!]... **** EXCLUSIVE MONTHLY DROPS
            INITIATED... [ * ] DARK MODE LOADOUTS * COMING SOON! * STAY TUNED *{" "}
            <span className="text-xl inline">⚠️⚠️⚠️</span>
            {/* <Link to="/subscribe" className="text-gray-500 underline ml-2">
              SUBSCRIBE TO BE UPDATED{" "}
            </Link> */}
          </span>
        </div>
      </div>

      <div className="relative h-screen mb-10">
        <img
          src={HeroBlackBig}
          alt="Hero"
          className="w-full h-full object-cover"
          style={{
            maxHeight: "100vh",
            objectPosition: "center top",
          }}
        />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col overflow-hidden">
          <div className="rounded-lg overflow-hidden mx-auto w-[95%] sm:w-4/5 lg:w-4/5 flex-shrink-0">
            <div className="mt-2 mb-6 w-full mx-auto px-4 flex justify-center">
              <video
                src={LogoVid}
                autoPlay
                muted
                playsInline
                className="transform rounded-lg max-w-5xl object-cover w-full mt-9 h-10vw opacity-70"
                style={{
                  WebkitFilter: "invert(100%)",
                  filter: "invert(100%)",
                  maxWidth: "80vw",
                  zIndex: 10,
                  position: "relative",
                }}
              />
            </div>
          </div>
          <div
            className="opacity-70 backdrop-blur-md bg-black p-4 sm:p-6 rounded-lg shadow-2xl mb-4 sm:mb-8 text-center flex flex-col items-center mx-auto w-[95%] sm:w-4/5"
            style={{ marginTop: "40vh" }}
          >
            <h2 className="text-white font-custom2 text-2xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3">
              No Signal. No Limits.
            </h2>
            <p className="text-white text-base sm:text-base mb-3 sm:mb-4 opacity-80">
              Your everyday grind demands gear that keeps up. Our tactical bags
              are tough, versatile, and ready for anything life throws your way.
              Pack it, strap it, own it—because staying ready isn't a choice,
              it's a mindset.
            </p>
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-8 py-3 text-lg bg-white text-black font-medium rounded-md overflow-hidden transition-all duration-300 hover:bg-gray-900 hover:text-white w-full sm:w-auto"
            >
              <span className="relative z-10 flex items-center justify-center">
                Shop Now{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-gray-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>
          <div
            className="flex-1 overflow-auto pb-4 scrollbar-hide md:pb-4"
            style={{
              scrollbarWidth: "none" /* Firefox */,
              msOverflowStyle: "none" /* IE and Edge */,
              marginTop: "40vh" /* Push the timeline down 100vh */,
              position: "relative",
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
          </div>
        </div>
      </div>

      {/* Timeline section */}
      <div className="w-full">
        <Timeline />
      </div>

      {/* Featured Section */}
      <div className="w-full">
        <Reviews />
      </div>

      <Footer />
    </div>
  );
};
