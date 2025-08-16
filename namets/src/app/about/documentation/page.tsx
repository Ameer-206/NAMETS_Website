"use client"
import React, { useState } from "react";
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const resources = [
  { icon: "📄", label: "NAMETS BYE-LAW", href: "#" },
  { icon: "📚", label: "100 LEVEL MATERIALS", href: "#" },
  { icon: "📚", label: "200 LEVEL MATERIALS", href: "#" },
  { icon: "📓", label: "AL-IRSHAAD MAGAZINE", href: "#" },
  { icon: "📖", label: "ISLAMIYYA BOOKS", href: "#" },
];

export default function DocumentationPage() {
  const [search, setSearch] = useState("");
  const filteredResources = resources.filter(res =>
    res.label.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className="py-16 bg-gray-100 min-h-screen" id="documentation">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-12 text-center tracking-tight">
          Documentation
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* About NAMETS */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">
              <h3 className="font-bold text-2xl text-[#f43f5e] mb-4">
                About NAMETS
              </h3>
              <p className="text-lg text-gray-700 mb-4">
                The National Association of Muslim Engineering and Technology
                Students (NAMETS) at Ahmadu Bello University, Zaria, is a dynamic
                organization committed to fostering the holistic development of
                Muslim engineers and technologists. Established with the vision to
                nurture spiritually grounded and intellectually empowered
                individuals, NAMETS serves as a platform for students to integrate
                Islamic values with academic excellence and technical innovation.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our mission is to promote Qur’anic and Sunnah-based knowledge,
                foster unity and moral uprightness through Da’awah, enhance
                intellectual capacity for Shari’ah-aligned solutions, and
                safeguard the welfare of Muslim students. Through a range of
                activities including weekly Ta’alimat, tutorials, conferences, and
                community engagement, NAMETS empowers its members to become
                future leaders who contribute positively to the Ummah and society
                at large.
              </p>
              <p className="text-lg text-gray-700">
                NAMETS also provides resources such as academic materials,
                Islamic literature, and organizational bylaws to support the
                academic and spiritual growth of its members. Our commitment
                extends to building a network of professionals dedicated to
                sustainable development and ethical leadership within Nigeria and
                beyond.
              </p>
            </div>
          </div>
          {/* Resources */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">
              <h4 className="font-bold text-xl text-[#f43f5e] mb-4">
                Resources
              </h4>
              <div className="flex mb-4">
                <input
                  type="text"
                  className="border border-gray-300 rounded-l px-4 py-2 w-full"
                  placeholder="Search resources..."
                  aria-label="Search resources"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <button
                  className="bg-[#0d9488] text-white px-4 py-2 rounded-r hover:bg-[#0f766e] transition"
                  aria-label="Search button"
                  onClick={e => e.preventDefault()}
                >
                  <MagnifyingGlassIcon className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
              <ul className="divide-y divide-gray-100">
                {filteredResources.length > 0 ? filteredResources.map((res, i) => (
                  <li
                    key={res.label}
                    className="py-3 flex items-center gap-3 hover:bg-[#f0fdfa] transition"
                  >
                    <span className="text-[#0d9488] text-xl">{res.icon}</span>
                    <a
                      href={res.href}
                      className="text-gray-700 font-medium hover:text-[#f43f5e] transition"
                    >
                      {res.label}
                    </a>
                  </li>
                )) : (
                  <li className="py-3 text-gray-400 text-center">No resources found.</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
