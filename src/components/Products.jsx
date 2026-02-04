"use client";

import { FaStar, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const products = [
  {
    name: "Mango Nic Salt E-Liquid",
    desc: "Rich mango flavor with smooth nicotine salt blend.",
    price: 2000,
    oldPrice: 2500,
    rating: 5,
    img: "https://plus.unsplash.com/premium_photo-1719431363708-30223a8f5280?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmFwZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Watermelon Nic Salt",
    desc: "Fresh watermelon taste for smooth daily vaping.",
    price: 2500,
    oldPrice: 3000,
    rating: 4,
    img: "https://images.unsplash.com/photo-1545095088-26a59e3f2717?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmFwZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Nasty Bar – All Flavors",
    desc: "Premium disposable vape with bold flavor output.",
    price: 1800,
    oldPrice: 2000,
    rating: 5,
    img: "https://images.unsplash.com/photo-1530745342582-0795f23ec976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZhcGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Lost Mary Vape – All Flavors",
    desc: "Stylish disposable vape with long-lasting puffs.",
    price: 1800,
    oldPrice: 2300,
    rating: 5,
    img: "https://images.unsplash.com/photo-1522741070277-b1b2ba3a7bd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHZhcGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Elfbar Raya D2 – 20K Puffs",
    desc: "High puff count with smooth airflow and rich taste.",
    price: 1800,
    oldPrice: 1900,
    rating: 4,
    img: "https://images.unsplash.com/photo-1699631559204-06999f354364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHZhcGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Caliburn A3",
    desc: "Compact pod system with excellent flavor delivery.",
    price: 2500,
    oldPrice: 3300,
    rating: 5,
    img: "https://images.unsplash.com/photo-1637303115143-68779e1b2f6b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHZhcGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Elfbar Rya D3",
    desc: "Smooth performance vape with modern design.",
    price: 2500,
    oldPrice: 3300,
    rating: 4,
    img: "https://images.unsplash.com/photo-1636455790899-9f336b1b082a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHZhcGV8ZW58MHx8MHx8fDA%3D",
  },

  {
    name: "Elfbar Rya D3 – Special Price",
    desc: "Limited-time deal on premium Elfbar vape.",
    price: 2000,
    oldPrice: 2500,
    rating: 4,
    img: "https://images.unsplash.com/photo-1606593955195-6a0a8b48efb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHZhcGV8ZW58MHx8MHx8fDA%3D",
  },
];

export default function Products() {
  const buyNow = (name, price) => {
    window.open(
      `https://wa.me/919609563010?text=Hi, I want to buy *${name}* for ₹${price}`,
      "_blank",
    );
  };

  return (
    <section id="products" className="py-20 bg-[var(--bg-light)]">
      {/* Section Header */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          Special <span className="text-[var(--primary)]">Offers</span>
        </h2>
        <p className="text-[var(--text-muted)] mt-3 max-w-xl mx-auto">
          Best-selling vapes with exclusive prices. Limited stock available.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-[var(--bg-card)] rounded-2xl shadow hover:shadow-xl transition overflow-hidden group"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="h-52 w-full object-cover group-hover:scale-105 transition duration-500"
              />
              <span className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
                Offer
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-sm mb-1">{p.name}</h3>
              <p className="text-xs text-[var(--text-muted)] mb-2">{p.desc}</p>

              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg font-bold text-[var(--primary)]">
                  ₹{p.price}
                </span>
                <span className="text-xs line-through text-gray-400">
                  ₹{p.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400 text-xs mb-3">
                {[...Array(p.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Button */}
              <button
                onClick={() => buyNow(p.name, p.price)}
                className="w-full flex items-center justify-center gap-2 py-2 rounded-full bg-[var(--primary)] text-white text-sm font-medium hover:bg-[var(--primary-dark)] transition"
              >
                Order Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
