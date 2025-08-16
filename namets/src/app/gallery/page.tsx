import React from "react";
import Image from "next/image";

const gallery = [
  {
    src: "/event.jpg",
    alt: "NAMETS Annual Conference 2024",
    name: "NAMETS Annual Conference 2024",
  },
  {
    src: "/taalim.jpg",
    alt: "Weekly Ta’alimat Series",
    name: "Weekly Ta’alimat Series",
  },
  {
    src: "/tutor.jpg",
    alt: "Academic Tutorial Workshop",
    name: "Academic Tutorial Workshop",
  },
  {
    src: "/program.jpg",
    alt: "Islamic Program 2023",
    name: "Islamic Program 2023",
  },
  {
    src: "/logo.jpg",
    alt: "Logo Launch Event",
    name: "Logo Launch Event",
  },
  {
    src: "/event.jpg",
    alt: "NAMETS Week 2023",
    name: "NAMETS Week 2023",
  },
  {
    src: "/taalim.jpg",
    alt: "Ramadan Lecture 2023",
    name: "Ramadan Lecture 2023",
  },
  {
    src: "/program.jpg",
    alt: "Engineering Symposium 2024",
    name: "Engineering Symposium 2024",
  },
  {
    src: "/tutor.jpg",
    alt: "Career Fair 2024",
    name: "Career Fair 2024",
  },
];

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-100 min-h-screen" id="gallery">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-12 text-center tracking-tight">
          Event Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {gallery.map((item, idx) => (
            <div
              key={item.name}
              className="relative rounded-xl overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105"
              style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={250}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#f43f5ee6] to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h5 className="text-white text-lg font-semibold text-center drop-shadow">
                  {item.name}
                </h5>
              </div>
              <div className="absolute top-0 left-0 w-full h-1 bg-[#f43f5e] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
