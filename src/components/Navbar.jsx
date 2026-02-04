"use client";

import { useState } from "react";
import { FaBars, FaTimes, FaWhatsapp } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--background)]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <h1 className="text-[var(--primary)] text-lg md:text-xl font-bold tracking-wide">
          Vape Store Goa
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {["Products", "Reviews", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[var(--foreground)] hover:text-[var(--primary)] transition"
              >
                {item}
              </a>
            </li>
          ))}

          {/* CTA */}
          <a
            href="https://wa.me/919609563010"
            target="_blank"
            className="flex items-center gap-2 bg-[var(--primary)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--primary-dark)] transition"
          >
            <FaWhatsapp />
            Buy Now
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-xl text-[var(--foreground)]"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute w-full bg-[var(--background)] border-t border-white/10 transition-all duration-300 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-6 gap-6">
          {["Products", "Reviews", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="block text-[var(--foreground)] text-base hover:text-[var(--primary)] transition"
              >
                {item}
              </a>
            </li>
          ))}

          {/* Mobile CTA */}
          <a
            href="https://wa.me/919609563010"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-[var(--primary)] text-white py-3 rounded-full text-base hover:bg-[var(--primary-dark)] transition"
          >
            <FaWhatsapp />
            Buy on WhatsApp
          </a>
        </ul>
      </div>
    </nav>
  );
}
