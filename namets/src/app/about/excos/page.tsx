"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

type Exco = {
  name: string;
  dept: string;
  role: string;
  year: string;
  img: string;
  phone: string;
  email: string;
};

const excosData: { [key: string]: Exco[] } = {
  wukalah: [
    {
      name: "Ahmad Musa",
      dept: "Mechanical Engineering",
      role: "Wakeel",
      year: "2024",
      img: "/wakeel.jpg",
      phone: "+234 901 234 5678",
      email: "ahmad.musa@namets.org",
    },
    {
      name: "Fatimah Abdullahi",
      dept: "Electrical Engineering",
      role: "Wakeelah",
      year: "2025",
      img: "/female.png",
      phone: "+234 902 345 6789",
      email: "fatimah.abdullahi@namets.org",
    },
    {
      name: "Umar Bello",
      dept: "Civil Engineering",
      role: "Secretary General",
      year: "2025",
      img: "/sec gen.jpg",
      phone: "+234 903 456 7890",
      email: "umar.bello@namets.org",
    },
    {
      name: "Hassan Idris",
      dept: "Chemical Engineering",
      role: "Treasurer",
      year: "2025",
      img: "/welfare.jpg",
      phone: "+234 904 567 8901",
      email: "hassan.idris@namets.org",
    },
    {
      name: "Amina Suleiman",
      dept: "Computer Engineering",
      role: "Assistant Secretary",
      year: "2025",
      img: "/p.r.o.jpg",
      phone: "+234 905 678 9012",
      email: "amina.suleiman@namets.org",
    },
  ],
  // Add other years as needed
};

const excoTabs = [
  { key: "wukalah", label: "Wukalah" },
  { key: "2025", label: "2025" },
  { key: "2024", label: "2024" },
  { key: "2023", label: "2023" },
  { key: "past", label: "Past" },
];

export default function ExcosPage() {
  const [activeTab, setActiveTab] = useState<string>("wukalah");
  const excos: Exco[] = excosData[activeTab] || [];

  return (
    <section className="py-16 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-10 text-center tracking-tight">
          Our Executive Committee
        </h2>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {excoTabs.map((tab) => (
            <button
              key={tab.key}
              className={`px-6 py-2 rounded-full font-semibold transition shadow-sm ${
                activeTab === tab.key
                  ? "bg-[#f43f5e] text-white"
                  : "bg-white text-[#f43f5e] border border-[#f43f5e] hover:bg-[#f43f5e] hover:text-white"
              }`}
              onClick={() => setActiveTab(tab.key)}
              aria-label={`View ${tab.label} Excos`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {excos.length > 0 ? (
            excos.map((exco: Exco, idx: number) => (
              <div
                key={exco.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center p-8 group animate-fadeInUp"
                style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#f43f5e] mb-4 shadow group-hover:scale-105 transition">
                  <Image
                    src={exco.img}
                    alt={exco.name}
                    width={120}
                    height={120}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-1">
                  {exco.name}
                </h5>
                <p className="text-gray-500">{exco.dept}</p>
                <p className="text-[#f43f5e] font-medium">{exco.role}</p>
                <p className="text-gray-400">{exco.year}</p>
                <p className="text-gray-400 flex items-center gap-2">
                  <PhoneIcon className="w-5 h-5" aria-hidden="true" />
                  {exco.phone}
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <EnvelopeIcon className="w-5 h-5" aria-hidden="true" />
                  {exco.email}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-400">
              No excos found for this year.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
