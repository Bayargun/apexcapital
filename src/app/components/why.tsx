"use client";
import { motion } from "framer-motion";
export default function Why() {
  const benefits = [
    {
      icon: "💎",
      title: "Өндөр ликвидити",
      desc: "ХБҮЦ нь бирж дээр нээлттэй арилжаалагдана",
    },
    {
      icon: "🎯",
      title: "Бага дүнтэй эхлэх",
      desc: "Нэгж үнэ 100,000₮ байхад жижиг хөрөнгө оруулалт хийж болно",
    },
    {
      icon: "📈",
      title: "Татварын давуу тал",
      desc: "Татварын дараах өгөөж ойролцоогоор 18.24%",
    },
  ];

  return (
    <section id="section-2" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Омни Ассет 2 — Давуу тал
          </h3>
          <div className="w-24 h-1.5 bg-[#344A6F] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gradient-to-br from-slate-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all"
            >
              <motion.div
                transition={{ duration: 0.6 }}
                className="text-6xl mb-4"
              >
                {benefit.icon}
              </motion.div>
              <h4 className="text-2xl font-bold text-slate-900 mb-3">
                {benefit.title}
              </h4>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
