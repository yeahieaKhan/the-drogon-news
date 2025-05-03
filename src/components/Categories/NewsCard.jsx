import React, { useState } from "react";
import { FaStar, FaEye, FaShareAlt } from "react-icons/fa";

const NewsCard = ({ news }) => {
  const [showFull, setShowFull] = useState(false);

  if (!news) return null;

  const {
    author = {},
    title = "No Title",
    image_url,
    details = "No details available.",
    rating = { number: 0 },
    total_view = 0,
  } = news;

  const formattedDate = author?.published_date
    ? new Date(author.published_date).toLocaleDateString()
    : "Unknown Date";

  return (
    <div className="card border rounded-xl p-4 shadow space-y-4">
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src={author?.img || "https://via.placeholder.com/40"}
            alt={author?.name || "Unknown Author"}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author?.name || "Unknown"}</h3>
            <p className="text-gray-500 text-sm">{formattedDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-600 text-lg">
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Image */}
      <figure>
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Details */}
      <p className="text-gray-600">
        {showFull ? details : `${details.slice(0, 200)}...`}
      </p>

      {/* Toggle Read More / Show Less */}
      {details.length > 200 && (
        <button
          onClick={() => setShowFull(!showFull)}
          className="text-orange-500 font-semibold"
        >
          {showFull ? "Show Less" : "Read More"}
        </button>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between pt-2 border-t pt-3">
        <div className="flex items-center text-orange-500 gap-1">
          <FaStar />
          <span>{rating.number}</span>
        </div>

        <div className="flex items-center text-gray-600 gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
