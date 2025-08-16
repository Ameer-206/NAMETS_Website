import React from "react";

const excos = [
  {
    name: "John Doe1",
    position: "WAKEEL",
    img: "/wakeel.jpg",
  },
  {
    name: "John Doe2",
    position: "SECRETARY GENERAL",
    img: "/sec gen.jpg",
  },
  {
    name: "Ahmed Suleiman Yarima",
    position: "WELFARE",
    img: "/welfare.jpg",
  },
  {
    name: "Yusuf Bida",
    position: "P.R.O",
    img: "/p.r.o.jpg",
  },
  {
    name: "John Doe3",
    position: "MASJID CHAIRMAN",
    img: "/masjid.jpg",
  },
  {
    name: "John Doe4",
    position: "DA'AWA OFFICER",
    img: "/daawa.jpg",
  },
];

export default function Excos() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-12 text-center tracking-tight">
          Meet Our Current Excos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {excos.map((exco) => (
            <div
              key={exco.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center p-8 group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#f43f5e] mb-4 shadow group-hover:scale-105 transition">
                <img
                  src={exco.img}
                  alt={exco.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{exco.name}</h3>
              <p className="text-[#f43f5e] font-medium">{exco.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
