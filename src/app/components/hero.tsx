"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-purple-50">
      <motion.div
        style={{ y }}
        className="container mx-auto px-6 py-32 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="text-slate-900">ӨНӨӨДРИЙН</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                  ХӨРӨНГӨ ОРУУЛАЛТ
                </span>
                <br />
                <span className="text-slate-900">МАРГААШИЙН БОЛОМЖ</span>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-slate-600 max-w-xl leading-relaxed"
              >
                Омни капитал ББСБ-аас үүсгэн байгуулсан Омни ассет хоёр ТЗК ХХК
                нь{" "}
                <strong className="text-yellow-400">14.0 тэрбум төгрөг</strong>
                -ийн үнийн дүн бүхий{" "}
                <strong className="text-yellow-400">
                  жилийн 19.2% өгөөжтэй
                </strong>{" "}
                үнэт цаасыг санал болгож байна.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <motion.a
                  href="tel:75107500"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 flex gap-3 py-4 rounded-2xl border-2 border-slate-300 text-slate-900 font-bold text-lg hover:border-[#344A6F] transition-colors"
                >
                  <Phone /> 7510-7500
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ height: "950px" }}
            >
              <iframe
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FApexCapitalMN%2Fvideos%2F4088786054732918&show_text=false"
                className="w-full h-full"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-yellow-400 to-purple-600 rounded-full blur-3xl opacity-30"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-20 h-20 bg-purple-200 rounded-full blur-2xl opacity-40"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute bottom-1/4 right-20 w-32 h-32 bg-yellow-200 rounded-full blur-2xl opacity-40"
      />
    </section>
  );
}
