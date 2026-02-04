"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[var(--background)] overflow-hidden   mt-14 ">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-light)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:pt-0 md:pt-0  sm:pt-2">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT: Text */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-block mb-5 px-4 py-1.5 text-xs tracking-wider rounded-full bg-[var(--bg-light)] text-[var(--primary)]"
            >
              PREMIUM VAPE STORE • GOA
            </motion.span>

            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight mb-6 text-[var(--foreground)]"
            >
              Premium{" "}
              <span className="text-[var(--primary)]">Vape Equipment</span>
              <br className="hidden sm:block" />
              for a Smooth Experience
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-base md:text-lg text-[var(--text-muted)] max-w-xl mb-8"
            >
              Discover high-quality vape devices, accessories, and premium tools
              crafted for a smooth, refined vaping lifestyle.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition"
              >
                Explore Products
              </a>

              <a
                href="https://wa.me/919609563010"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-gray-300 text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
              >
                Order Now
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <img
              src="https://images.unsplash.com/photo-1569943316331-0fbeb72294b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjZ8fHZhcGV8ZW58MHx8MHx8fDA%3D"
              alt="Premium Vape Device"
              className="w-full max-w-sm md:max-w-md object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
