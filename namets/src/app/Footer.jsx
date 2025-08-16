import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About NAMETS */}
          <div>
            <h5 className="text-lg font-bold mb-3 text-[#f43f5e]">
              About NAMETS
            </h5>
            <p className="text-sm">
              NAMETS is dedicated to empowering Muslim engineers and technologists
              at ABU Zaria, fostering faith, knowledge, and leadership for
              societal advancement.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-bold mb-3 text-[#f43f5e]">Quick Links</h5>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-[#f43f5e]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f43f5e]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f43f5e]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f43f5e]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f43f5e]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#f43f5e]">
                  Join
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-bold mb-3 text-[#f43f5e]">Contact Us</h5>
            <div className="text-sm space-y-2">
              <p>
                  <span className="inline-block mr-2 align-middle"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>Faculty of Engineering, ABU Zaria, Nigeria
              </p>
              <a
                href="tel:+234123456789"
                className="block hover:text-[#f43f5e]"
              >
                  <span className="inline-block mr-2 align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.789 1.106l1.387 2.773a2 2 0 01-.217 2.18l-1.516 1.89a11.042 11.042 0 005.516 5.516l1.89-1.516a2 2 0 012.18-.217l2.773 1.387A2 2 0 0121 18.72V21a2 2 0 01-2 2h-1C9.163 23 1 14.837 1 5V4a2 2 0 012-2z" /></svg>
                  </span>+234 123 456 789
              </a>
              <a
                href="mailto:info@namets.org"
                className="block hover:text-[#f43f5e]"
              >
                  <span className="inline-block mr-2 align-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-4 4H8a4 4 0 01-4-4v-1" /></svg>
                  </span>info@namets.org
              </a>
            </div>
            <div className="flex gap-4 mt-4 text-xl">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-[#f43f5e]"
              >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-[#f43f5e]"
              >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.209c9.058 0 14.009-7.496 14.009-13.986 0-.21-.005-.423-.015-.634A9.936 9.936 0 0024 4.557z"/></svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-[#f43f5e]"
              >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9 114.9-51.3 114.9-114.9S287.7 141 224.1 141zm0 186c-39.5 0-71.5-32-71.5-71.5s32-71.5 71.5-71.5 71.5 32 71.5 71.5-32 71.5-71.5 71.5zm146.4-194.3c0 14.9-12 26.9-26.9 26.9s-26.9-12-26.9-26.9 12-26.9 26.9-26.9 26.9 12 26.9 26.9zm76.1 27.2c-1.7-35.3-9.9-66.7-36.2-92.9S388.6 7.7 353.3 6c-35.3-1.7-141.3-1.7-176.6 0-35.3 1.7-66.7 9.9-92.9 36.2S7.7 123.4 6 158.7c-1.7 35.3-1.7 141.3 0 176.6 1.7 35.3 9.9 66.7 36.2 92.9s57.6 34.5 92.9 36.2c35.3 1.7 141.3 1.7 176.6 0 35.3-1.7 66.7-9.9 92.9-36.2s34.5-57.6 36.2-92.9c1.7-35.3 1.7-141.3 0-176.6zM398.8 388c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132.3 9s-102.9 2.6-132.3-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132.3s-2.6-102.9 9-132.3c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132.3-9s102.9-2.6 132.3 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132.3s2.6 102.9-9 132.3z"/></svg>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-[#f43f5e]"
              >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
              </a>
            </div>
          </div>
          {/* Newsletter Signup */}
          <div>
            <h5 className="text-lg font-bold mb-3 text-[#f43f5e]">
              Stay Updated
            </h5>
            <p className="text-sm mb-3">
              Subscribe to our newsletter for the latest updates and events.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for Newsletter"
                required
                className="bg-white rounded-l px-3 py-2 w-full text-gray-900"
              />
              <button
                type="submit"
                aria-label="Subscribe to Newsletter"
                className="bg-[#f43f5e] text-white px-4 py-2 rounded-r hover:bg-[#e11d48] transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          &copy; 2025 NAMETS. All rights reserved. Designed by{" "}
          <a
            href="#"
            className="text-[#f43f5e] hover:underline"
          >
            NAMETS Web Team
          </a>
          .
        </div>
      </div>
    </footer>
  );
}