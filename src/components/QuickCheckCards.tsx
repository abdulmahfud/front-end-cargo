"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeftRight, ArrowRight, MapPin, Package } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import AnimatedSection from "./AnimatedSection";

const cityOptions = [
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Medan",
  "Semarang",
  "Yogyakarta",
  "Makassar",
  "Denpasar",
  "Palembang",
  "Balikpapan",
];

const QuickCheckCards: React.FC = () => {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [weight, setWeight] = useState("1");
  const [resi, setResi] = useState("");

  const handleSwap = () => {
    setOrigin(destination);
    setDestination(origin);
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Endpoint pelacakan resi menyusul setelah BE tersedia
  };

  return (
    <section className="relative z-10 py-10 md:py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Cek Ongkir */}
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-start gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Cek Ongkir
                  </h3>
                  <p className="text-sm text-gray-500">
                    Bandingkan tarif dari berbagai ekspedisi
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-3 items-end mb-4">
                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Dari
                  </label>
                  <Select value={origin} onValueChange={setOrigin}>
                    <SelectTrigger className="min-h-[48px] rounded-xl border-gray-200">
                      <SelectValue placeholder="Pilih kota asal" />
                    </SelectTrigger>
                    <SelectContent>
                      {cityOptions.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <button
                  type="button"
                  onClick={handleSwap}
                  aria-label="Tukar kota asal dan tujuan"
                  className="hidden sm:flex h-10 w-10 mb-1 items-center justify-center rounded-full border border-gray-200 text-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <ArrowLeftRight size={16} />
                </button>

                <div>
                  <label className="text-sm text-gray-600 mb-1 block">
                    Tujuan
                  </label>
                  <Select value={destination} onValueChange={setDestination}>
                    <SelectTrigger className="min-h-[48px] rounded-xl border-gray-200">
                      <SelectValue placeholder="Pilih kota tujuan" />
                    </SelectTrigger>
                    <SelectContent>
                      {cityOptions.map((city) => (
                        <SelectItem key={city} value={city}>
                          {city}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-6">
                <label className="text-sm text-gray-600 mb-1 block">
                  Berat (kg)
                </label>
                <Input
                  type="number"
                  min={0}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className="min-h-[48px] rounded-xl border-gray-200"
                />
              </div>

              <Link
                href="/cek-ongkir"
                className="mt-auto w-full inline-flex items-center justify-center gap-2 min-h-[52px] rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
              >
                Cek Ongkir <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Lacak Paket */}
          <AnimatedSection delay={100}>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-start gap-3 mb-6">
                <div className="h-12 w-12 rounded-xl bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0">
                  <Package size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Lacak Paket
                  </h3>
                  <p className="text-sm text-gray-500">
                    Cek status pengiriman dengan mudah dan cepat
                  </p>
                </div>
              </div>

              <form
                onSubmit={handleTrackSubmit}
                className="flex flex-col flex-1"
              >
                <div className="relative mb-6">
                  <Input
                    type="text"
                    placeholder="Masukkan nomor resi"
                    value={resi}
                    onChange={(e) => setResi(e.target.value)}
                    className="min-h-[48px] rounded-xl border-gray-200 pr-10"
                  />
                  <Package
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="mt-auto w-full min-h-[52px] rounded-full bg-blue-600 text-white hover:bg-blue-700 flex items-center justify-center gap-2"
                >
                  Lacak Paket <ArrowRight size={18} />
                </Button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default QuickCheckCards;
