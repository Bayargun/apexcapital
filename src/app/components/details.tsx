"use client";
import { motion } from "framer-motion";
import {
  ChartNoAxesCombined,
  CircleDollarSign,
  Clock,
  Goal,
} from "lucide-react";

export default function Details() {
  return (
    <section id="section-1" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Омни Ассет 2 — Хөрөнгөөр баталгаажсан үнэт цаас
          </h2>
          <div className="w-24 h-1.5 bg-[#344A6F] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#344A6F] rounded-2xl flex items-center justify-center text-white text-2xl">
                📊
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Ерөнхий мэдээлэл
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                {
                  label: "Жилийн өгөөж",
                  value: "19.2%",
                  icon: <ChartNoAxesCombined />,
                },
                {
                  label: "Нэгж үнэт цаас",
                  value: "100,000₮",
                  icon: <CircleDollarSign />,
                },
                { label: "Хугацаа", value: "24 сар", icon: <Clock /> },
                {
                  label: "Анхдагч санал",
                  value: "14.0 тэрбум ₮",
                  icon: <Goal />,
                },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-slate-700"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.label}:</span>
                  <span className="font-bold text-[#344A6F]">{item.value}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            whileHover={{ y: -10 }}
            className="bg-[#344A6F] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all text-white"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center text-3xl">
                🛡️
              </div>
              <h3 className="text-2xl font-bold">Яагаад эрсдэл багатай вэ?</h3>
            </div>
            <div className="space-y-4 text-purple-50 leading-relaxed">
              <p>
                ХБҮЦ (хөрөнгөөр баталгаажсан үнэт цаас) нь зээлийн багцаар
                баталгаажсан байдаг. Зээлүүд нь санхүүгийн хуулийн шалгуур
                хангасан, өндөр чанартай —{" "}
                <strong className="text-white">
                  100% хэвийн төлөлтийн түүхтэй
                </strong>
                .
              </p>
              <p>
                Омни Ассет 2 ХБҮЦ нь 14 тэрбум төгрөгийн санхүүжилт татан
                төвлөрүүлэх ба зээлийн багцын үнэлгээ нь{" "}
                <strong className="text-white">15.8 тэрбум төгрөг</strong> тул
                баталгаа нь үнэ цэнэтэй — эрсдэл харьцангуй багатай.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
