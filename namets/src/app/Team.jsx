import React from "react";
import Image from "next/image";

const team = [
  {
    name: "Princess",
    role: "UI/UX Designer",
    img: "/female.png",
    bio: "Designs intuitive, beautiful interfaces for seamless user journeys.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Umar Suleiman",
    role: "Frontend Developer",
    img: "/tutor.jpg",
    bio: "Specializes in modern, performant React and Next.js applications.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Halliru Abdussamad Abubakar",
    role: "Fullstack Developer",
    img: "/logo.jpg",
    bio: "Full-stack developer passionate about building impactful web experiences and also specialises in modern, performant React and Next.js applications.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Mukhtar Bugaje",
    role: "Backend Developer",
    img: "/welfare.jpg",
    bio: "Ensures robust, scalable, and secure backend systems.",
    linkedin: "#",
    github: "#",
  },
   {
    name: "Abdullahi Node",
    role: "Backend Developer",
    img: "/welfare.jpg",
    bio: "Ensures robust, scalable, and secure backend systems.",
    linkedin: "#",
    github: "#",
  },
];

export default function Team() {
  return (
    <section className="w-full py-16 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-8 text-center tracking-tight">
          Meet the Team Behind This Website
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          This website was crafted by a dedicated team of developers and
          designers, blending modern web technologies with a passion for
          excellence and user experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center p-6 group"
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#f43f5e] mb-4 shadow group-hover:scale-105 transition">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-[#f43f5e] font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm mb-3 text-center">
                {member.bio}
              </p>
              <div className="flex gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-[#0A66C2] transition"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
                  </svg>
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-black transition"
                >
                  <svg
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.589 8.199-6.085 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
