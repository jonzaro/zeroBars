import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
// import { useCartStore } from "../store/cartStore";
// import { Plus, Minus } from "lucide-react";

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  // const { addItem } = useCartStore();

  if (!product) {
    return (
      <div className="text-center py-16 text-gray-300">Product not found</div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-stone-900 text-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden bg-gray-800">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                className="aspect-square overflow-hidden bg-gray-800 border border-gray-700"
              >
                <img
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-100">{product.name}</h1>
            <p className="text-2xl font-medium mt-2 text-gray-200">
              ${product.price.toFixed(2)}
            </p>
          </div>

          <p className="text-gray-400">{product.description}</p>

          <div>
            <h2 className="text-lg font-medium mb-4 text-gray-100">Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  {/* <Plus className="h-5 w-5 mr-2 flex-shrink-0" /> */}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={product.pmntLink}
            className="w-full btn py-3 text-base inline-block text-center bg-black hover:bg-gray-600 text-white"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};
