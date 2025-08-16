"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import "./header-underline.css";

import {
  HomeIcon,
  InformationCircleIcon,
  DocumentTextIcon,
  UsersIcon,
  CalendarDaysIcon,
  ClockIcon,
  BoltIcon,
  PhotoIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const router = useRouter();

  const [aboutOpen, setAboutOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);

  // Close dropdowns after link click
  const handleDropdownLinkClick = () => {
    setTimeout(() => {
      setAboutOpen(false);
      setEventsOpen(false);
    }, 100);
  };
  // Close dropdowns when clicking outside
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        navRef.current &&
        !(navRef.current as HTMLDivElement).contains(event.target as Node)
      ) {
        setAboutOpen(false);
        setEventsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Helper to handle dropdown toggling
  const handleAboutClick = () => {
    setAboutOpen((open) => !open);
    setEventsOpen(false);
  };
  const handleEventsClick = () => {
    setEventsOpen((open) => !open);
    setAboutOpen(false);
  };
  const [mobileOpen, setMobileOpen] = useState(false); // State for mobile menu

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md" ref={navRef}>
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="NAMETS Logo"
            width={40}
            height={40}
            className="rounded-full border-2 border-[#f43f5e] object-cover"
          />
          <span className="ml-2 font-bold text-[#f43f5e] text-lg">NAMETS</span>
        </Link>
        <button
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? (
            // X icon
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        {/* items beginning */}
        <ul
          className={`absolute lg:static top-16 left-0 w-full lg:w-auto bg-white transition-all duration-300 ease-in-out
          ${
            mobileOpen
              ? "flex flex-col items-center justify-center text-center gap-4 opacity-100 translate-y-0"
              : "hidden lg:flex lg:flex-row lg:items-center lg:space-x-6"
          }`}
        >
          <li>
            <Link
              href="/"
              className="nav-underline flex items-center gap-2 px-4 py-2 text-black hover:text-black hover:bg-transparent rounded font-medium"
            >
              <HomeIcon className="w-5 h-5" />
              Home
            </Link>
          </li>
          <li className="relative group">
            <button
              className="nav-underline flex items-center gap-2 px-4 py-2 text-black hover:text-black hover:bg-transparent rounded font-medium w-full text-left lg:text-center"
              onClick={handleAboutClick}
              aria-haspopup="true"
              aria-expanded={aboutOpen}
            >
              <InformationCircleIcon className="w-5 h-5" />
              About
              <svg
                className="inline ml-1 w-4 h-4"
                fill="black"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.063a.75.75 0 111.08 1.04l-4.25 4.667a.75.75 0 01-1.08 0l-4.25-4.667a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              className={`absolute left-0 top-full min-w-[200px] mt-2 bg-white rounded shadow-xl border border-gray-200 overflow-hidden z-10 ${
                aboutOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/about/documentation"
                  className="group flex items-center gap-2 px-4 py-3 text-black hover:bg-[#f43f5e] hover:text-white font-medium transition duration-150 w-full text-left"
                  onClick={handleDropdownLinkClick}
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/about/excos"
                  className="group flex items-center gap-2 px-4 py-3 text-black hover:bg-[#f43f5e] hover:text-white font-medium transition duration-150 w-full text-left"
                  onClick={handleDropdownLinkClick}
                >
                  Excos
                </Link>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button
              className="nav-underline flex items-center gap-2 px-4 py-2 text-black hover:text-black hover:bg-transparent transition rounded font-medium w-full text-left lg:text-center"
              onClick={handleEventsClick}
              aria-haspopup="true"
              aria-expanded={eventsOpen}
            >
              <CalendarDaysIcon className="w-5 h-5" />
              Events
              <svg
                className="inline ml-1 w-4 h-4"
                fill="black"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.063a.75.75 0 111.08 1.04l-4.25 4.667a.75.75 0 01-1.08 0l-4.25-4.667a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <ul
              className={`absolute left-0 top-full min-w-[200px] mt-2 bg-white rounded shadow-xl border border-gray-200 overflow-hidden z-10 ${
                eventsOpen ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="/events/past"
                  className="group flex items-center gap-2 px-4 py-3 text-black hover:bg-[#f43f5e] hover:text-white font-medium transition duration-150 w-full text-left"
                  onClick={handleDropdownLinkClick}
                >
                  Past
                </Link>
              </li>
              <li>
                <Link
                  href="/events/current"
                  className="group flex items-center gap-2 px-4 py-3 text-black hover:bg-[#f43f5e] hover:text-white font-medium transition duration-150 w-full text-left"
                  onClick={handleDropdownLinkClick}
                >                  
                  Current
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/gallery"
              className="nav-underline flex items-center gap-2 px-4 py-2 text-black hover:text-black hover:bg-transparent rounded"
            >
              <PhotoIcon className="w-5 h-5" />
              Gallery
            </Link>
          </li>
          <li>
            <Link
              href="/tutorials"
              className="nav-underline flex items-center gap-2 px-4 py-2 text-black hover:text-black hover:bg-transparent rounded"
            >
              <BookOpenIcon className="w-5 h-5" />
              Tutorials
            </Link>
          </li>
          <li>
            <Link
              href="/join"
              className="ml-2 px-4 py-2 bg-[#f43f5e] text-white font-bold rounded-lg shadow hover:bg-[#e11d48] transition duration-150"
            >
              Join
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
