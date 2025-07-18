"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import Link from "next/link";

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
  "/images/lion.png",
  "/images/borzo.png",
  "/images/central-cargo.png",
  "/images/id-express.png",
  "/images/JTCargo.png",
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
      <Features />

      {/* Partner section */}
      <section className="section-padding bg-white py-8">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mt-5 max-w-3xl mx-auto mb-12">
              <span className="inline-block px-4 py-1 bg-yellow-50 text-yellow-500 rounded-full text-sm font-semibold mb-4">
                Partner Tepercaya
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Didukung oleh Partner Logistik Terbaik
              </h2>
              <p className="text-lg text-gray-600">
                Kami berkolaborasi dengan berbagai partner logistik terkemuka
                untuk memberikan layanan pengiriman terbaik.
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
              <Image
                src="/images/gudang.png"
                alt="Team working together"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div>
                <span className="inline-block px-4 py-1 bg-blue-100 text-blue-500 rounded-full text-sm font-semibold mb-4">
                  Mengapa Memilih Kami
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Lebih dari Sekadar Layanan Pengiriman
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Kami bangga menjadi solusi logistik yang tidak hanya
                  mengirimkan paket, tetapi juga memberikan pengalaman terbaik
                  untuk setiap pelanggan.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      icon: <Star className="w-5 h-5" />,
                      title: "Kualitas Layanan Premium",
                      desc: "Konsistensi dan keandalan dalam setiap pengiriman",
                    },
                    {
                      icon: <TrendingUp className="w-5 h-5" />,
                      title: "Pertumbuhan Berkelanjutan",
                      desc: "Inovasi terus-menerus untuk meningkatkan layanan",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "Keamanan Terjamin",
                      desc: "Sistem keamanan yang menjaga kerahasiaan data Anda",
                    },
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Dukungan Pelanggan 24/7",
                      desc: "Tim siap membantu Anda kapan saja dibutuhkan",
                    },
                  ].map((item, i) => (
                    <div key={i} className="flex">
                      <div className="flex-shrink-0 mt-1 mr-4 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-500">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
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
                <Link href="https://panel.bhisakirim.com/" target="_blank">
                  <Button className="hover:bg-blue-800 relative overflow-hidden bg-blue-500 text-white rounded-full text-xl px-6 py-3 min-h-[54px] flex items-center justify-center gap-2">
                    <ArrowRight />
                    Mulai Kirim
                    <motion.div
                      className="absolute top-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white to-transparent rotate-30"
                      animate={{ left: "100%" }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </Button>
                </Link>
                <Link href="https://wa.me/6281330323559" passHref>
                  <Button
                    variant="outline"
                    className="text-blue-500 border-white rounded-full min-h-[54px]"
                  >
                    <MessageCircle />
                    Hubungi Kami
                  </Button>
                </Link>
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
