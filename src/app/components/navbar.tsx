"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full top-0 z-40 transition-all duration-300 `}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-bold text-2xl bg-[#344A6F] bg-clip-text text-transparent"
          >
            ОМНИ Ассет 2
          </motion.div>

          <nav className="hidden md:flex gap-8 items-center">
            {["Дэлгэрэнгүй", "Давуу тал", "Заавар"].map((item, i) => (
              <motion.a
                key={item}
                href={`#section-${i + 1}`}
                whileHover={{ scale: 1.1, color: "#344A6F" }}
                className="text-slate-700 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
            <motion.a
              href="tel:75107500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 rounded-full bg-[#344A6F] text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Утас: 7510-7500
            </motion.a>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {["Дэлгэрэнгүй", "Давуу тал", "Заавар"].map((item, i) => (
              <a
                key={item}
                href={`#section-${i + 1}`}
                className="block py-2 text-slate-700 hover:text-[#344A6F]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
