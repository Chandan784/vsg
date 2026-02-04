"use client";

import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Verma",
    location: "Goa",
    review:
      "Amazing vape quality and authentic products. Smooth experience and fast response on WhatsApp.",
    rating: 5,
  },
  {
    name: "Aman Sharma",
    location: "Mumbai",
    review:
      "Premium feel, genuine flavors, and great pricing. Highly recommended vape store.",
    rating: 5,
  },
  {
    name: "Rohit Das",
    location: "Bangalore",
    review:
      "Packaging was excellent and delivery was quick. Will definitely order again.",
    rating: 4,
  },
  {
    name: "Sahil Khan",
    location: "Pune",
    review:
      "Wide variety of vapes and flavors. Customer support is very friendly.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-[var(--bg-light)]">
      {/* Header */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our <span className="text-[var(--primary)]">Customers Say</span>
        </h2>
        <p className="text-[var(--text-muted)] mt-3 max-w-xl mx-auto">
          Trusted by vape lovers across India for quality, authenticity, and
          service.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="max-w-6xl mx-auto px-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-[var(--bg-card)] rounded-2xl p-6 shadow hover:shadow-lg transition"
          >
            {/* Rating */}
            <div className="flex gap-1 text-yellow-400 mb-3">
              {[...Array(r.rating)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-sm text-[var(--foreground)] mb-4">
              “{r.review}”
            </p>

            {/* User */}
            <div className="text-sm">
              <p className="font-semibold">{r.name}</p>
              <p className="text-[var(--text-muted)] text-xs">{r.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
