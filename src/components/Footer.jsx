"use client";

import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">
              VIP Vape Store
            </h3>
            <p className="text-sm text-[var(--text-muted)] mt-1">
              Premium vape equipment & accessories
            </p>
          </div>

          {/* Social */}
          <div className="flex gap-4 text-xl">
            <a
              href="https://wa.me/919609563010"
              target="_blank"
              className="text-green-500 hover:opacity-80 transition"
            >
              <FaWhatsapp />
            </a>

            <a href="#" className="text-pink-500 hover:opacity-80 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Bottom */}
        <div className="text-center text-xs text-[var(--text-muted)] space-y-2">
          <p>
            © {new Date().getFullYear()} VIP Vape Store. All rights reserved.
          </p>
          <p>🔞 This website is intended for adults aged 18+ only.</p>
        </div>
      </div>
    </footer>
  );
}
