import React from "react";

export default function Mission() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#f43f5e] mb-12 text-center tracking-tight drop-shadow-sm">
          Our Mission & Vision
        </h2>
        {/* Vision Card */}
        <div className="mb-12">
          <div className="bg-white/95 border-l-8 border-[#f43f5e] rounded-2xl p-10 shadow-xl flex flex-col items-start w-full">
            <h3 className="text-2xl font-bold text-[#f43f5e] mb-4">Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To be a catalyst for positive change, empowering students to
              achieve their full potential and become compassionate, innovative
              leaders who contribute meaningfully to the global community.
            </p>
          </div>
        </div>
        {/* Mission Subhe</p>ading */}
        <h3 className="text-2xl font-bold text-[#f43f5e] mb-6 text-center">
          Mission
        </h3>
        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Academic Excellence",
              desc: "To foster academic excellence among mathematics students through tutorials, seminars, and workshops.",
            },
            {
              title: "Unity & Discipline",
              desc: "To promote the spirit of unity, discipline, and service among members.",
            },
            {
              title: "Mentorship",
              desc: "To provide a platform for mentorship and intellectual growth.",
            },
            {
              title: "Community Engagement",
              desc: "To engage in impactful community service and outreach programs.",
            },
            {
              title: "Leadership",
              desc: "To nurture leadership qualities and innovative thinking among students.",
            },
          ].map((item, idx) => (
            <div
              key={item.title}
              className="bg-white/90 border border-gray-200 rounded-2xl p-7 shadow-md hover:shadow-xl transition-all duration-300 group flex items-start gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#f43f5e]/10 flex items-center justify-center group-hover:bg-[#f43f5e]/20 transition">
                <span className="text-2xl font-bold text-[#f43f5e] select-none">
                  {idx + 1}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
