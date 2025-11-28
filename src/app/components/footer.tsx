"use client";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <h3 className="text-3xl font-bold bg-yellow-400 bg-clip-text text-transparent">
            ОМНИ Ассет 2
          </h3>
        </motion.div>
      </div>
    </footer>
  );
}
