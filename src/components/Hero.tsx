import React from "react";
import { ArrowRight, Package, Truck, Clock } from "lucide-react";
import { Button } from "../components/ui/button";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div className="relative pt-24 pb-10 md:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-blue-50 via-white to-white -z-10 rounded-bl-[100px]" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedSection className="order-2 md:order-1">
            <div className="max-w-xl">
              <span className="inline-block px-4 py-1 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold mb-4">
                #BisaKirim
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight text-balance">
                Layanan Pengiriman yang{" "}
                <span className="text-blue-500">Cepat dan Terpercaya</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Kirim paket ke seluruh Indonesia dengan mudah, cepat, dan aman.
                Dapatkan harga terbaik dengan banyak pilihan kurir.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative">
                  <Button className="hover:bg-blue-800 relative overflow-hidden bg-blue-500 text-white rounded-full text-2xl px-6 py-3 min-h-[54px] flex items-center justify-center gap-2">
                    <ArrowRight />
                    Mulai Kirim
                    <motion.div
                      className="absolute top-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-30"
                      animate={{ left: "100%" }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  </Button>
                </div>
                <a href="#features">
                  <Button
                    variant="outline"
                    className="min-h-[54px] rounded-full text-lg border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500"
                  >
                    Lihat Layanan
                  </Button>
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 text-blue-500 mb-3">
                    <Package size={24} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Ribuan Pengiriman Setiap Hari
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-yellow-200 text-yellow-500 mb-3">
                    <Truck size={24} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Jaringan Luas ke Seluruh Indonesia
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-500 mb-3">
                    <Clock size={24} />
                  </div>
                  <p className="text-sm text-gray-500">
                    Proses Cepat & Tepat Waktu
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="order-1 md:order-2" delay={200}>
            <Image
              src="/images/gudang.png"
              alt="Team working together"
              width={500}
              height={500}
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </AnimatedSection>

          {/* <AnimatedSection className="order-1 md:order-2" delay={200}>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md mx-auto">
                <h3 className="text-xl font-bold mb-6 text-center">
                  Cek Tarif Pengiriman
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Kota Asal
                    </label>
                    <input
                      type="text"
                      placeholder="Pilih kota asal"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Kota Tujuan
                    </label>
                    <input
                      type="text"
                      placeholder="Pilih kota tujuan"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">
                      Berat Paket (kg)
                    </label>
                    <input
                      type="number"
                      placeholder="Masukkan berat paket"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <Button variant="outline" className='hover:bg-blue-800 hover:text-white w-full text-xl rounded-full bg-blue-500 text-white min-h-[54px]'>Cek Tarif</Button>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-yellow-100 rounded-lg -z-10 animate-gentle-float" />
              <div
                className="absolute -top-6 -right-6 w-16 h-16 bg-blue-200 rounded-lg -z-10 animate-gentle-float"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </AnimatedSection> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
