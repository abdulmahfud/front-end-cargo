import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-16 md:pt-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-50 via-white to-white -z-10 rounded-bl-[100px]" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight text-balance">
                Semua Ekspedisi
                <br />
                <span className="text-blue-500">Satu Solusi</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Nikmati kemudahan mengelola seluruh kebutuhan pengiriman
                dalam satu platform. Bandingkan tarif, pilih ekspedisi
                terbaik, kirim paket lebih cepat, lacak status pengiriman
                secara real-time, dan kelola bisnis dengan lebih efisien.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 md:order-2" delay={200}>
            <Image
              src="/images/hero.jpg"
              alt="Semua Ekspedisi Satu Solusi"
              width={900}
              height={450}
              className="w-full h-auto object-contain rounded-3xl shadow-xl"
              priority
            />
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Hero;
