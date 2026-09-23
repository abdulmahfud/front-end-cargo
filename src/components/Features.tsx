"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import {
  Award,
  Truck,
  TrendingUp,
  Settings,
  Rocket,
  Monitor,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const Features: React.FC = () => {
  const features = [
    {
      icon: <Award size={28} />,
      iconBg: "bg-amber-100 text-amber-500",
      title: "Kirim Lebih Mudah, Lebih Cepat, dan Lebih Hemat.",
      description:
        "Tidak perlu membuka banyak aplikasi ekspedisi. Dengan Bhisakirim, Anda dapat membandingkan ongkir, membuat pengiriman, melacak paket, hingga mengelola seluruh transaksi dalam satu platform yang praktis dan efisien.",
    },
    {
      icon: <Truck size={28} />,
      iconBg: "bg-blue-100 text-blue-500",
      title: "Kirim Paket Jadi Lebih Mudah",
      description:
        "Tak perlu berpindah aplikasi untuk mengelola pengiriman. Dengan Bhisakirim, Anda dapat memilih berbagai ekspedisi, memantau status paket, mengelola COD, hingga mengintegrasikan toko online dalam satu dashboard.",
    },
    {
      icon: <TrendingUp size={28} />,
      iconBg: "bg-purple-100 text-purple-500",
      title: "Solusi Pengiriman untuk Bisnis yang Terus Bertumbuh",
      description:
        "Mulai dari satu paket hingga ribuan pengiriman setiap hari, Bhisakirim membantu Anda mengelola seluruh proses pengiriman dengan lebih cepat, praktis, dan efisien.",
    },
    {
      icon: <Settings size={28} />,
      iconBg: "bg-blue-100 text-blue-500",
      title: "Kelola Pengiriman Tanpa Batas",
      description:
        "Sederhanakan proses logistik bisnis Anda dengan akses ke berbagai layanan ekspedisi, fitur otomatisasi, pelacakan real-time, dan dashboard yang dirancang untuk mendukung pertumbuhan bisnis.",
    },
    {
      icon: <Rocket size={28} />,
      iconBg: "bg-red-100 text-red-500",
      title: "Lebih Cepat Mengirim, Lebih Mudah Berkembang",
      description:
        "Kami menghadirkan platform pengiriman yang membantu bisnis menghemat waktu, menekan biaya operasional, dan meningkatkan pengalaman pelanggan melalui layanan ekspedisi yang terintegrasi.",
    },
    {
      icon: <Monitor size={28} />,
      iconBg: "bg-blue-100 text-blue-500",
      title: "Semua Ekspedisi. Satu Dashboard.",
      description:
        "Kelola pengiriman, bandingkan ongkir, lacak paket, hingga proses COD dalam satu platform yang cepat, praktis, dan terpercaya.",
    },
    {
      icon: <Handshake size={28} />,
      iconBg: "bg-orange-100 text-orange-600",
      title: "Mitra Pengiriman untuk Bisnis Modern",
      description:
        "Bhisakirim menghubungkan bisnis Anda dengan berbagai layanan ekspedisi terpercaya melalui platform yang dirancang untuk pengiriman yang lebih cepat, efisien, dan mudah dikelola.",
    },
    {
      icon: <ShieldCheck size={28} />,
      iconBg: "bg-green-100 text-green-500",
      title: "Aman & Terpercaya",
      description:
        "Keamanan data dan transaksi Anda adalah prioritas kami. Bhisakirim berkomitmen memberikan layanan terpercaya dengan sistem yang aman, stabil, dan selalu dioptimalkan.",
    },
  ];

  return (
    <section id="features" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 py-10">
        <AnimatedSection delay={100}>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Bangun Bisnis Tanpa Ribet,
              <br />
              Permudah Operasional Bersama{" "}
              <span className="text-blue-500">bhisakirim</span>
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={150 + index * 50}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="bg-white rounded-2xl p-6 shadow-sm card-hover border border-gray-100 h-full cursor-pointer"
              >
                <div
                  className={`inline-flex items-center justify-center h-14 w-14 rounded-xl mb-6 ${feature.iconBg}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
