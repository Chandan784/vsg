"use client";

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[var(--bg-light)]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-[var(--primary)]">Touch</span>
        </h2>
        <p className="text-[var(--text-muted)] max-w-xl mx-auto mb-12">
          Have questions, want to place an order, or need product guidance?
          We’re always happy to help.
        </p>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {/* WhatsApp */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaWhatsapp className="text-3xl text-green-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">WhatsApp Support</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              Fastest way to order and get instant support.
            </p>
            <a
              href="https://wa.me/919609563010"
              target="_blank"
              className="inline-block px-6 py-2 rounded-full bg-green-500 text-white text-sm font-medium hover:opacity-90 transition"
            >
              Chat on WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaEnvelope className="text-3xl text-[var(--primary)] mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-[var(--text-muted)] mb-4">
              For bulk orders or business inquiries.
            </p>
            <p className="text-sm font-medium">vipstore@gmail.com</p>
          </div>

          {/* Location */}
          <div className="bg-[var(--bg-card)] rounded-2xl p-6 shadow hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-3xl text-red-500 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Store Location</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Goa, India
              <br />
              Premium Vape Store
            </p>
          </div>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-sm text-[var(--text-muted)]">
          🕒 WhatsApp support available 24/7 • Fast response guaranteed
        </p>
      </div>
    </section>
  );
}
