"use client"

import React, { useState, useEffect, useRef } from 'react'

const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
  const timerRef = useRef(null);

  // Slide to next
  const nextSlide = () => {
    setPrev(current);
    setDirection(1);
    setCurrent((current + 1) % images.length);
  };

  // Slide to prev
  const prevSlide = () => {
    setPrev(current);
    setDirection(-1);
    setCurrent((current - 1 + images.length) % images.length);
  };

  // Auto-slide
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timerRef.current);
    // eslint-disable-next-line
  }, [current]);

  // Manual navigation resets timer
  const handleManualNav = (fn) => {
    clearInterval(timerRef.current);
    fn();
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 6000);
  };

  return (
    <div className="relative w-full h-[32rem] overflow-hidden bg-black">
      {/* Previous image for smooth transition */}
      {prev !== null && prev !== current && (
        <img
          src={images[prev]}
          alt={`Slide ${prev + 1}`}
          className={`
            absolute top-0 left-0 w-full h-full object-cover
            transition-all duration-700
            ${direction === 1
              ? "opacity-0 scale-105 blur-[2px] translate-x-[-48px] z-10"
              : "opacity-0 scale-105 blur-[2px] translate-x-[48px] z-10"}
          `}
          style={{ pointerEvents: 'none' }}
        />
      )}
      {/* Current image */}
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className={`
          absolute top-0 left-0 w-full h-full object-cover
          transition-all duration-700
          opacity-100 scale-100 blur-0 translate-x-0 z-20
          shadow-xl
        `}
        style={{ pointerEvents: 'auto' }}
      />
      {/* Controls */}
      <button
        onClick={() => handleManualNav(prevSlide)}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow hover:bg-white transition z-30"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={() => handleManualNav(nextSlide)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow hover:bg-white transition z-30"
        aria-label="Next"
      >
        &#8594;
      </button>
      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleManualNav(() => {
              setPrev(current);
              setDirection(idx > current ? 1 : -1);
              setCurrent(idx);
            })}
            className={`w-4 h-4 rounded-full border-2 border-white ${current === idx ? "bg-[#f43f5e]" : "bg-gray-300"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
