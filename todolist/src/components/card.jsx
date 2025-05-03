import React from "react";

function Card({ id, title, deadline, onDelete }) {
  return (
    <div className="relative max-w-md mx-auto border border-blue-500 bg-white p-6 rounded mb-4">
      {/* Close button */}
      <button
        aria-label="Close"
        onClick={() => onDelete(id)}
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
      >
        &#10005;
      </button>

      {/* Title */}
      <p className="mb-4 font-medium text-lg">
        <span className="font-semibold">Title: </span>
        <span className="font-normal">{title}</span>
      </p>

      {/* Deadline */}
      <p className="font-medium text-lg">
        <span className="font-semibold">Deadline: </span>
        <span className="font-normal">{deadline}</span>
      </p>
    </div>
  );
}

export default Card;
