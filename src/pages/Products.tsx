import React from "react";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import { Footer } from "../components/Footer";

export const Products: React.FC = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-neutral-950">
        <h1 className="text-4xl font-bold font-custom2 mb-8 text-white">
          Carry Systems
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
