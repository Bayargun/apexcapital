"use client";
import { motion } from "framer-motion";
export default function HowToTrade() {
  const steps = [
    {
      num: "01",
      title: "Онлайн захиалга",
      desc: "trader.apex.mn хаягаар орж захиалга өгөх",
      link: "https://trader.apex.mn",
    },
    {
      num: "02",
      title: "Утсаар захиалга",
      desc: "7510-7500 дугаараар урьдчилсан захиалга өгөх",
      link: "tel:75107500",
    },
    {
      num: "03",
      title: "Арилжаа",
      desc: "ХБҮЦ-ийг бирж дээрээс худалдан авч борлуулах",
    },
    { num: "04", title: "Хүү авах", desc: "Улирал тутмын хүүгийн төлөлт авах" },
  ];

  return (
    <section
      id="section-3"
      className="py-24 bg-[#344A6F] text-white relative overflow-hidden"
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-4xl lg:text-5xl font-black mb-4">
            Арилжаанд орох заавар
          </h4>
          <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-white mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.2, type: "spring" }}
                  className="text-6xl font-black text-yellow-400 mb-4 opacity-50"
                >
                  {step.num}
                </motion.div>
                <h5 className="text-xl font-bold mb-3">{step.title}</h5>
                <p className="text-purple-100 mb-4">{step.desc}</p>
                {step.link && (
                  <motion.a
                    href={step.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block text-yellow-400 font-semibold hover:text-yellow-300"
                  ></motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
