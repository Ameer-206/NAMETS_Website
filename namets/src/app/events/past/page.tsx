import React from "react";
import Image from "next/image";
import { CalendarDaysIcon, ClockIcon, MapPinIcon } from "@heroicons/react/24/outline";

const events = [
	{
		img: "/event.jpg",
		title: "NAMETS Annual Conference 2024",
		desc: "A gathering of Muslim engineers to discuss innovations and Islamic values in technology.",
		date: "15th June, 2024",
		time: "9:00 AM - 4:00 PM",
		venue: "ABU Zaria, Engineering Lecture Theatre",
	},
	{
		img: "/taalim.jpg",
		title: "Weekly Ta’alimat Series",
		desc: "A spiritual session focusing on Islamic knowledge and personal growth.",
		date: "22nd April, 2024",
		time: "5:00 PM - 6:30 PM",
		venue: "Faculty Mosque, ABU Zaria",
	},
	{
		img: "/tutor.jpg",
		title: "Academic Tutorial Workshop",
		desc: "Intensive tutorials to boost academic performance in engineering courses.",
		date: "10th March, 2024",
		time: "10:00 AM - 2:00 PM",
		venue: "Seminar Room, Faculty of Engineering",
	},
	{
		img: "/program.jpg",
		title: "Islamic Program 2023",
		desc: "An event fostering unity and spiritual growth among Muslim students.",
		date: "5th December, 2023",
		time: "4:00 PM - 7:00 PM",
		venue: "ABU Zaria Main Auditorium",
	},
	{
		img: "/logo.jpg",
		title: "Logo Launch Event",
		desc: "Unveiling of the new NAMETS logo with a celebratory gathering.",
		date: "20th October, 2023",
		time: "3:00 PM - 5:00 PM",
		venue: "Faculty of Engineering Lawn",
	},
	{
		img: "/event.jpg",
		title: "NAMETS Week 2023",
		desc: "A week-long celebration of engineering, faith, and community.",
		date: "25th August, 2023",
		time: "8:00 AM - 6:00 PM",
		venue: "Various Locations, ABU Zaria",
	},
];

export default function PastEventsPage() {
	return (
		<section className="py-16 bg-gray-100 min-h-screen" id="past-events">
			<div className="max-w-6xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-extrabold text-[#f43f5e] mb-12 text-center tracking-tight">
					Past Events
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{events.map((event, idx) => (
						<div
							key={event.title}
							className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group animate-zoomIn"
							style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
						>
							<div className="relative w-full h-56 rounded-t-2xl overflow-hidden">
								<Image
									src={event.img}
									alt={event.title}
									fill
									className="object-cover"
									sizes="(max-width: 768px) 100vw, 33vw"
									priority={idx === 0}
								/>
							</div>
							<div className="p-6 flex flex-col flex-1">
								<h5 className="text-xl font-bold text-gray-900 mb-2">
									{event.title}
								</h5>
								<p className="text-gray-600 mb-4 flex-1">{event.desc}</p>
								<ul className="mb-4 space-y-1 text-gray-500 text-sm">
									<li className="flex items-center gap-2">
										<CalendarDaysIcon className="w-5 h-5 text-[#f43f5e]" />
										<span>Date: {event.date}</span>
									</li>
									<li className="flex items-center gap-2">
										<ClockIcon className="w-5 h-5 text-[#f43f5e]" />
										<span>Time: {event.time}</span>
									</li>
									<li className="flex items-center gap-2">
										<MapPinIcon className="w-5 h-5 text-[#f43f5e]" />
										<span>Venue: {event.venue}</span>
									</li>
								</ul>
								<a
									href="#"
									className="inline-block border border-[#0d9488] text-[#0d9488] px-4 py-2 rounded hover:bg-[#0d9488] hover:text-white transition mt-auto"
								>
									View Details
								</a>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
