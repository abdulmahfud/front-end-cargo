"use client";

import Image from "next/image";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Combobox } from "@headlessui/react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const kelurahanList = [
  "Jakarta",
  "Jakarta Selatang",
  "Jakarta Barat",
  "Bandung",
  "Surabaya",
  "Medan",
  "Yogyakarta",
  "Semarang",
];

export default function CekOngkir() {
  const [isVolumeChecked, setIsVolumeChecked] = useState<boolean>(false);

  const [queryAsal, setQueryAsal] = useState("");
  const [selectedAsal, setSelectedAsal] = useState<string | null>(null);

  const [queryTujuan, setQueryTujuan] = useState("");
  const [selectedTujuan, setSelectedTujuan] = useState<string | null>(null);

  // Filter kelurahan berdasarkan queryAsal
  const filteredKelurahanAsal =
    queryAsal.length >= 3
      ? kelurahanList.filter((kelurahan) =>
          kelurahan.toLowerCase().includes(queryAsal.toLowerCase())
        )
      : [];

  // Filter kelurahan berdasarkan queryTujuan
  const filteredKelurahanTujuan =
    queryTujuan.length >= 3
      ? kelurahanList.filter((kelurahan) =>
          kelurahan.toLowerCase().includes(queryTujuan.toLowerCase())
        )
      : [];

  const faqs = [
    {
      question: "Apa itu cek ongkir BisaKirim?",
      answer:
        "Cek ongkir BisaKirim adalah fitur untuk menghitung biaya pengiriman berdasarkan berat dan tujuan paket.",
    },
    {
      question: "Apa itu ongkos kirim?",
      answer:
        "Ongkos kirim adalah biaya yang dikenakan untuk mengirim barang dari satu lokasi ke lokasi lainnya.",
    },
    {
      question: "Apa manfaat dari penggunaan cek ongkir BisaKirim?",
      answer:
        "Memudahkan pengguna dalam menghitung estimasi biaya pengiriman sebelum mengirim barang.",
    },
    {
      question: "Bagaimana cara cek ongkir via BisaKirim?",
      answer:
        "Cukup masukkan kota asal, kota tujuan, dan berat paket, lalu sistem akan menampilkan biaya pengiriman.",
    },
    {
      question:
        "Apa saja jenis layanan pengiriman yang tersedia pada fitur cek ongkir BisaKirim?",
      answer:
        "Layanan yang tersedia meliputi reguler, express, dan same-day delivery.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-10 mt-16">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="md:w-1/2">
          <h1 className="md:text-6xl text-2xl font-bold text-gray-900">
            Cek Ongkir dari Berbagai Ekspedisi
          </h1>
          <p className="mt-2 md:text-3xl text-xl text-gray-600">
            Lebih mudah cek tarif pengiriman dari berbagai ekspedisi dengan
            BisaKirim.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/image/jasa-pengiriman.jpg"
            alt="Cek Ongkir"
            width={500}
            height={300}
            className="rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="mt-8 bg-blue-100 p-6 rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pilihan Kelurahan Asal */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Asal <span className="text-red-500">*</span>
            </label>
            <Combobox value={selectedAsal} onChange={setSelectedAsal}>
              <div className="relative pt-2 font-semibold">
                {/* Input Pencarian */}
                <Input
                  placeholder="Ketik minimal 3 huruf..."
                  value={queryAsal}
                  onChange={(e) => setQueryAsal(e.target.value)}
                  className="w-full bg-white min-h-[54px] rounded-2xl border-blue-500"
                />

                {/* Dropdown */}
                {queryAsal.length >= 3 && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-2xl border border-gray-300">
                    {filteredKelurahanAsal.length > 0 ? (
                      <div className="max-h-40 overflow-y-auto">
                        {filteredKelurahanAsal.map((kelurahan) => (
                          <div
                            key={kelurahan}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => {
                              setSelectedAsal(kelurahan);
                              setQueryAsal(kelurahan);
                            }}
                          >
                            {kelurahan}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-2 text-gray-500 text-center">
                        Tidak ditemukan
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Combobox>
          </div>

          {/* Pilihan Kelurahan Tujuan */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Tujuan <span className="text-red-500">*</span>
            </label>
            <Combobox value={selectedTujuan} onChange={setSelectedTujuan}>
              <div className="relative pt-2 font-semibold">
                {/* Input Pencarian */}
                <Input
                  placeholder="Ketik minimal 3 huruf..."
                  value={queryTujuan}
                  onChange={(e) => setQueryTujuan(e.target.value)}
                  className="w-full bg-white min-h-[54px] rounded-2xl border-blue-500"
                />

                {/* Dropdown */}
                {queryTujuan.length >= 3 && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-2xl border border-gray-300">
                    {filteredKelurahanTujuan.length > 0 ? (
                      <div className="max-h-40 overflow-y-auto">
                        {filteredKelurahanTujuan.map((kelurahan) => (
                          <div
                            key={kelurahan}
                            className="cursor-pointer p-2 hover:bg-gray-200"
                            onClick={() => {
                              setSelectedTujuan(kelurahan);
                              setQueryTujuan(kelurahan);
                            }}
                          >
                            {kelurahan}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-2 text-gray-500 text-center">
                        Tidak ditemukan
                      </div>
                    )}
                  </div>
                )}
              </div>
            </Combobox>
          </div>

          {/* Input Berat */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Berat Paket <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 items-center pt-2">
              <Input placeholder="Cth: 1000" type="number" className="w-full font-semibold bg-white min-h-[54px] rounded-2xl border-blue-500" />
              <span className="text-gray-600 font-semibold">gram</span>
            </div>
          </div>
        </div>

        {/* Checkbox Volume Paket */}
        <div className="mt-4">
          {/* Checkbox Volume Paket */}
          <div className="flex items-center gap-2">
            <Checkbox
              id="volume"
              checked={isVolumeChecked}
              onCheckedChange={(checked) => setIsVolumeChecked(checked === true)}
            />
            <label htmlFor="volume" className="text-gray-700 text-sm font-medium">
              Volume Paket
            </label>
          </div>

          {/* Input Panjang, Lebar, Tinggi - Muncul saat Checkbox dicentang */}
          {isVolumeChecked && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Panjang (cm) <span className="text-red-500">*</span>
                </label>
                <Input type="number" placeholder="Cth: 50" className="w-full font-semibold bg-white min-h-[54px] rounded-2xl border-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Lebar (cm) <span className="text-red-500">*</span>
                </label>
                <Input type="number" placeholder="Cth: 30" className="w-full font-semibold bg-white min-h-[54px] rounded-2xl border-blue-500" />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Tinggi (cm) <span className="text-red-500">*</span>
                </label>
                <Input type="number" placeholder="Cth: 20" className="w-full font-semibold bg-white min-h-[54px] rounded-2xl border-blue-500" />
              </div>
            </div>
          )}
        </div>

        {/* Tombol Cek Ongkir */}
        <div className="mt-4 flex justify-end">
          <Button className="bg-blue-600 text-white flex rounded-full min-h-[54px] items-center gap-2">
            <Search size={16} /> Cek Ongkir
          </Button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 text-center">
          Pertanyaan yang Sering Diajukan
        </h2>
        <Accordion
          type="single"
          collapsible
          className="mt-4 w-full max-w-2xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
