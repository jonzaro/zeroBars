import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { ShoppingBag, Menu } from "lucide-react";
import { Cart } from "./Cart";
// import { useCartStore } from "../store/cartStore";

export const Navbar: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const items = useCartStore((state) => state.items);

  // const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-black bg-opacity-95 text-white z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link
              to="/"
              className="text-xl font-bold tracking-wider relative group overflow-hidden"
            >
              <span className="inline-block font-custom2 transform transition-transform duration-300 group-hover:-translate-y-full">
                ZERO BARS OUTPOST
              </span>
              <span className="inline-block font-custom2 absolute top-full left-0 transform transition-transform duration-300 group-hover:-translate-y-full">
                ZERO BARS OUTPOST
              </span>
            </Link>

            <div className="hidden md:flex space-x-8">
              {["Home", "Products"].map((item) => (
                <Link
                  key={item}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative group py-2"
                >
                  <span className="relative z-10 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="absolute -inset-2 bg-white/10 rounded-lg scale-95 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
                </Link>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* <button
                className="relative group p-2 hover:scale-110 transition-transform duration-300"
                onClick={() => setIsCartOpen(true)}
              > */}
              {/* <ShoppingBag className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                {itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110">
                    {itemCount}
                  </span>
                )}
                <span className="absolute inset-0 rounded-full bg-white/20 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
              </button>
              <button
                className="md:hidden relative group p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              > */}
              {/* <Menu className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" /> */}
              {/* <span className="absolute inset-0 rounded-full bg-white/20 scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"></span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {["Home", "Products"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="block px-3 py-2 relative group overflow-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10 transition-colors duration-300">
                  {item}
                </span>
                <span className="absolute inset-0 bg-white/10 transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0"></span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};
