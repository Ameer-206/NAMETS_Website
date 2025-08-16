import React from "react";

const announcements = [
  {
    text: "Tutorial for Mathematics 101 on 12th August, 2025, has been shifted to 8:30 PM at Wolfson Theater.",
  },
  {
    text: "Venue for 200-level tutorials on 15th August, 2025, changed to Seminar Room 2 due to maintenance at Kainji Theater.",
  },
];

const timetable = [
  {
    day: "Monday",
    level100: "Mathematics 101",
    level200: "Mathematics 201 (8:00 PM - 10:00 PM)",
  },
  {
    day: "Tuesday",
    level100: "Physics 102",
    level200: "Physics 202 (8:00 PM - 10:00 PM)",
  },
  {
    day: "Wednesday",
    level100: "Engineering Drawing 101",
    level200: "Engineering Drawing 201 (8:00 PM - 10:00 PM)",
  },
  {
    day: "Thursday",
    level100: "Ta'alimat (Wolfson Theater, 8:00 PM - 10:00 PM)",
    level200: "",
    colspan: 2,
  },
  {
    day: "Friday",
    level100: "Chemistry 101",
    level200: "Chemistry 201 (8:00 PM - 10:00 PM)",
  },
  {
    day: "Saturday",
    level100: "Mathematics 101",
    level200: "Mathematics 201 (8:00 PM - 10:00 PM)",
  },
  {
    day: "Sunday",
    level100: "Physics 102",
    level200: "Physics 202 (10:00 AM - 12:00 PM), Thermodynamics 202 (8:00 PM - 10:00 PM)",
  },
];

const examResults = [
  {
    subject: "Mathematics 101",
    desc: "Core course for 100-level students covering algebra and calculus.",
  },
  {
    subject: "Physics 102",
    desc: "Introduction to mechanics and thermodynamics for 100-level students.",
  },
  {
    subject: "Engineering Drawing 101",
    desc: "Fundamentals of technical drawing for engineering students.",
  },
  {
    subject: "Chemistry 101",
    desc: "Basic principles of chemistry for 100-level engineering students.",
  },
  {
    subject: "Mathematics 201",
    desc: "Advanced calculus and linear algebra for 200-level students.",
  },
  {
    subject: "Physics 202",
    desc: "Electromagnetism and optics for 200-level students.",
  },
  {
    subject: "Thermodynamics 202",
    desc: "Principles of thermodynamics for 200-level engineering students.",
  },
];

export default function TutorialsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Announcements & Timetable */}
      <section className="py-12" id="announcements">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-10 text-center tracking-tight">
            Tutorial Announcements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Announcements */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">
              <h4 className="font-bold text-[#f43f5e] mb-3 text-xl">Latest Updates</h4>
              <p className="text-gray-700 mb-4">
                Stay informed about any changes to our tutorial schedule, including shifts in dates, venues, or times.
              </p>
              <ul className="mb-4 space-y-2">
                {announcements.map((a, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#0d9488] mt-1">🔔</span>
                    <span>{a.text}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-block mt-3 bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#1e40af] transition">
                View All Updates
              </a>
            </div>
            {/* Timetable */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">
              <h4 className="font-bold text-[#f43f5e] mb-3 text-xl">Tutorial Timetable</h4>
              <p className="text-gray-700 mb-4">
                Tutorials run daily from 8:00 PM to 10:00 PM for 100 and 200 levels, with additional 200-level sessions on Sundays from 10:00 AM to 12:00 PM. Thursdays are reserved for Ta'alimat at Wolfson Theater.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full border text-sm">
                  <thead>
                    <tr className="bg-[#1e3a8a] text-white">
                      <th className="py-2 px-3">Day</th>
                      <th className="py-2 px-3">100 Level (Wolfson Theater, 8:00 PM - 10:00 PM)</th>
                      <th className="py-2 px-3">200 Level (Kainji Theater)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {timetable.map((row, i) => (
                      <tr key={row.day} className="hover:bg-[#f0fdfa]">
                        <td className="py-2 px-3 font-semibold">{row.day}</td>
                        {row.colspan ? (
                          <td colSpan={row.colspan} className="py-2 px-3 text-center">{row.level100}</td>
                        ) : (
                          <>
                            <td className="py-2 px-3">{row.level100}</td>
                            <td className="py-2 px-3">{row.level200}</td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be a Tutor */}
      <section className="py-12 bg-gray-200" id="be-a-tutor">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-[#f43f5e] mb-4">Contribute as a Tutor</h2>
          <p className="text-gray-700 mb-6">
            Passionate about teaching? Join our team of tutors to help fellow students excel academically while sharing your knowledge and skills.
          </p>
          <a href="#" className="inline-block bg-[#0d9488] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#0f766e] transition">
            Be a Tutor
          </a>
        </div>
      </section>

      {/* Brainstorm Exam Results */}
      <section className="py-12" id="exam-results">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-10 text-center tracking-tight">
            Brainstorm Exam Results
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <input
              type="text"
              className="border border-gray-300 rounded-l px-4 py-2 w-full md:w-1/2"
              placeholder="Search by subject..."
              aria-label="Search results"
            />
            <button className="bg-[#1e3a8a] text-white px-4 py-2 rounded-r hover:bg-[#1e40af] transition" aria-label="Search button">
              <span className="inline-block">🔍</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" id="resultsCards">
            {examResults.map((result, i) => (
              <div key={result.subject} className="bg-white rounded-xl shadow-sm p-6 text-center hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-2">{result.subject}</h4>
                <p className="text-gray-500 mb-4">{result.desc}</p>
                <a href="#" className="inline-block bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#1e40af] transition" aria-label={`Check results for ${result.subject}`}>
                  Check
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutor Evaluation */}
      <section className="py-12 bg-gray-200" id="tutor-evaluation">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-10 text-center tracking-tight">
            Tutor Evaluation
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Volunteer Tutor Screening Test */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">
              <h4 className="font-bold text-[#f43f5e] mb-3 text-xl">Volunteer Tutor Screening Test</h4>
              <p className="text-gray-700 mb-4">
                Aspiring tutors, take our screening test to demonstrate your expertise in your chosen course. Select a course below and proceed to the test form.
              </p>
              <select className="border border-gray-300 rounded px-4 py-2 mb-4 w-full" aria-label="Select course for screening test">
                <option>Select a Course</option>
                <option>Mathematics 101</option>
                <option>Physics 102</option>
                <option>Engineering Drawing 101</option>
                <option>Chemistry 101</option>
              </select>
              <a href="#" className="inline-block bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#1e40af] transition">
                Take Screening Test
              </a>
            </div>
            {/* Student Tutor Evaluation */}
            <div className="bg-white rounded-xl shadow-sm p-8 hover:shadow-lg transition">
              <h4 className="font-bold text-[#f43f5e] mb-3 text-xl">Student Tutor Evaluation</h4>
              <p className="text-gray-700 mb-4">
                Share your experience with our tutors! The evaluation form is available three weeks after tutorials begin to provide feedback on teaching methods.
              </p>
              <p className="text-gray-500 mb-4">
                <span className="inline-block text-[#0d9488] mr-2">ℹ️</span> Evaluation forms open on 31st August, 2025.
              </p>
              <a href="#" className="inline-block bg-[#1e3a8a] text-white px-4 py-2 rounded hover:bg-[#1e40af] transition">
                Evaluate Your Tutor
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
