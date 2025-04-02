import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`} className="group">
      <div className="relative overflow-hidden bg-gray-100">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-96 object-fill object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <p className="text-sm">{product.description}</p>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="mt-1 text-gray-500">${product.price.toFixed(2)}</p>
      </div>
    </Link>
  );
};
