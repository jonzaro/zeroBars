import React from "react";
import StripeImg from "../assets/Powered by Stripe /Powered by Stripe - blurple.svg";
import TrustImg from "../assets/Trustpilot.png";
import McAfeeImg from "../assets/McAfee.png";

interface Review {
  id: number;
  name: string;
  reviewText: string;
  rating: number; // Rating out of 5
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Jason Benton",
    reviewText:
      " I’ve gotten compliments from both gun guys AND sneakerheads, which is basilcally impossible. Johns Wick meets Travis Scott. Pure tactical drip.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kate Bishop",
    reviewText:
      "I’m convinced this fanny pack was forged in the fires of Mount Doom. I’ve dragged it through rain, dirt, concrete jungles, and probably a few battle zones (okay, just my daily commute, but still), and it still looks brand new.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sam Wilson",
    reviewText:
      "The concealed carry pocket is PERFECT—quick access, secure, and discreet. I can grab my wallet, keys, or my ‘insurance policy’ without looking like I’m in a Wild West duel. 10/10 would recommend to anyone who wants to carry in stealth mode.",
    rating: 5,
  },
];

const Reviews: React.FC = () => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-white shadow-md rounded-lg p-4 border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105"
        >
          <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
          <p className="text-gray-600 text-sm mb-4">{review.reviewText}</p>
          <div className="text-yellow-500 font-medium">
            {"⭐".repeat(review.rating)}{" "}
            <span className="text-gray-500">({review.rating}/5)</span>
          </div>
        </div>
      ))}
      <div className="col-span-3 mt-4 flex justify-between items-center w-full max-w-xl mx-auto px-4">
        <img src={McAfeeImg} alt="McAfee SECURE" className="h-20" />
        <img src={StripeImg} alt="Powered by Stripe" className="h-10" />
        <img src={TrustImg} alt="Trustpilot 5* Website" className="h-12" />
      </div>
    </div>
  );
};

export default Reviews;
