"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import QuickCheckCards from "@/components/QuickCheckCards";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";

import {
  ArrowRight,
  MessageCircle,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import Image from "next/image";

const partnerLogos = [
  "/images/anter-aja.png",
  "/images/jne.png",
  "/images/pos-indonesia.png",
  "/images/lion.png",
  "/images/borzo.png",
  "/images/central-cargo.png",
  "/images/id-express.png",
  "/images/jnt-cargo.png",
  "/images/lion.png",
  "/images/ncs.png",
  "/images/ninja.png",
  "/images/paxel.png",
  "/images/pos.png",
  "/images/rpx.png",
  "/images/sap.png",
  "/images/sicepat.png",
  "/images/tiki.png",
];

export default function Home() {
  // Handle smooth scroll for hash links
  useEffect(() => {
    const handleHashLinkClick = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Handle initial hash if present
    handleHashLinkClick();

    // Set up listener for hash changes
    window.addEventListener("hashchange", handleHashLinkClick);
    return () => window.removeEventListener("hashchange", handleHashLinkClick);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HeroStats />
      <QuickCheckCards />
      <Features />

      {/* Partner section */}
      <section className="section-padding bg-white py-8">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mt-5 max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Partner Logistik Terbaik dalam Satu Platform
              </h2>
              <p className="text-lg text-gray-600">
                Nikmati kemudahan mengirim paket melalui berbagai ekspedisi
                terpercaya. Semua terintegrasi dalam satu platform untuk
                memberikan pengalaman pengiriman yang lebih praktis dan
                efisien.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="overflow-hidden py-5 relative">
              <motion.div
                className="flex space-x-8"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              >
                {[...partnerLogos, ...partnerLogos].map((logo, i) => (
                  <div key={i} className="flex justify-center">
                    <div className="h-16 w-28 bg-gray-100 rounded-lg flex items-center justify-center shadow-sm">
                      <Image
                        src={logo}
                        alt={`Partner ${i + 1}`}
                        width={75}
                        height={75}
                        className="h-12 object-contain"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why choose us section */}
      <section id="about" className="section-padding bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Lebih dari Sekadar
                  <br />
                  Mengirim Paket
                </h2>
                <p className="text-lg text-gray-600">
                  Bhisakirim membantu Anda menghemat waktu dan
                  menyederhanakan proses pengiriman. Dengan akses ke berbagai
                  ekspedisi terpercaya, Anda dapat memilih layanan terbaik
                  sesuai kebutuhan tanpa berpindah aplikasi.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="space-y-4">
                {[
                  {
                    icon: <Star className="w-6 h-6" />,
                    title: "Kualitas Layanan",
                    desc: "Kami menghadirkan layanan yang mudah digunakan, didukung oleh partner logistik terpercaya untuk memastikan setiap pengiriman berjalan dengan baik.",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: "Terus Berinovasi",
                    desc: "Kami terus mengembangkan fitur dan layanan agar proses pengiriman menjadi lebih mudah, cepat, dan efisien.",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Keamanan Terjamin",
                    desc: "Data dan transaksi Anda terlindungi dengan sistem keamanan yang andal sehingga Anda dapat bertransaksi dengan tenang.",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: "Dukungan Pelanggan",
                    desc: "Tim Customer Support kami siap membantu Anda dengan cepat jika memiliki pertanyaan atau membutuhkan bantuan selama proses pengiriman.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
                  >
                    <div className="flex-shrink-0 h-14 w-14 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section
        id="contact"
        className="py-20 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg1.jpeg')" }}
      >
        {/* Overlay Hitam Pekat */}
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Siap Untuk Memulai?
              </h2>
              <p className="text-lg mb-10">
                Daftar sekarang dan dapatkan kemudahan dalam mengirim paket ke
                seluruh Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://panel.bhisakirim.com/"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full sm:w-auto hover:bg-blue-800 relative overflow-hidden bg-blue-500 text-white rounded-full text-xl px-6 py-3 min-h-[54px] flex items-center justify-center gap-2">
                    <ArrowRight />
                    Mulai Kirim
                    <motion.div
                      className="absolute top-0 h-full w-[150%] bg-gradient-to-r from-transparent via-white to-transparent rotate-30"
                      animate={{ left: "100%" }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </Button>
                </a>

                <a
                  href="https://wa.me/6281330323559"
                  target="_blank"
                  className="w-full sm:w-auto"
                >
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto text-blue-500 border-white rounded-full min-h-[54px]"
                  >
                    <MessageCircle />
                    Hubungi Kami
                  </Button>
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <FloatingWhatsApp />

      <Footer />
    </div>
  );
}
