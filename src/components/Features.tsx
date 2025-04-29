"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";

const Features: React.FC = () => {
  const features = [
    {
      image: "/images/distribution.png",
      title: "Pickup Gratis Semua Ekspedisi",
      description:
        "Pesanan paket kamu otomatis di-pickup oleh kurir dan GRATIS tanpa biaya pickup.",
    },
    {
      image: "/images/sticker.png",
      title: "Cashback Sampai 50% Ongkir",
      description:
        "Khusus untuk kamu! Dapatkan langsung cashback sampai dengan 50% ongkir di tiap pengirimannya.",
    },
    {
      image: "/images/delivery.png",
      title: "Dana COD Otomatis Langsung Cair",
      description:
        "Demi cashflow yang lancar, dana COD akan langsung dan otomatis cair setelah paket sukses terkirim.",
    },
    {
      image: "/images/handle-with-care.png",
      title: "Gratis Biaya Ongkir Paket Retur",
      description:
        "Meskipun kami terus berusaha maksimal agar paket kamu tidak retur, biaya ongkir retur tetap akan kami gratiskan.",
    },
    {
      image: "/images/recommendation.png",
      title: "Pilihan Kurir Terbaik Ongkir Termurah",
      description:
        "Rekomendasi dari AI untuk kurir ekspedisi terbaik khusus pesanan kirim paket kamu agar minim retur.",
    },
    {
      image: "/images/technical-support.png",
      title: "Best Partner Support",
      description:
        "24 Jam NON-STOP melayani semua pertanyaan seputar kiriman paket kamu dengan setulus hati.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1 bg-blue-200 text-blue-600 rounded-full text-sm font-semibold mb-4">
              Fitur Unggulan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Solusi Pengiriman yang Dirancang untuk Anda
            </h2>
            <p className="text-lg text-gray-600">
              Nikmati berbagai fitur unggulan yang memudahkan proses pengiriman
              paket Anda dari awal hingga akhir.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={150 + index * 50}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="bg-white rounded-2xl p-8 shadow-sm card-hover border border-gray-100 h-full cursor-pointer"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-xl bg-blue-100 text-blue-500 mb-6 px-2 py-2">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={64}
                    height={64}
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
