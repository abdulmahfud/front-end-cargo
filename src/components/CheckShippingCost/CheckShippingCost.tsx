"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function CekOngkir() {
  const [faqOpen, setFaqOpen] = useState(null);

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
          <h1 className="text-4xl font-bold text-gray-900">
            Cek Ongkir dari Berbagai Ekspedisi
          </h1>
          <p className="mt-2 text-gray-600">
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
      <div className="mt-8 bg-blue-100 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pilihan Kelurahan Asal */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Kelurahan Asal" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="jakarta">Jakarta</SelectItem>
              <SelectItem value="bandung">Bandung</SelectItem>
            </SelectContent>
          </Select>

          {/* Pilihan Kelurahan Tujuan */}
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Kelurahan Tujuan" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="surabaya">Surabaya</SelectItem>
              <SelectItem value="medan">Medan</SelectItem>
            </SelectContent>
          </Select>

          {/* Input Berat */}
          <div className="flex gap-2 items-center">
            <Input placeholder="Cth: 1000" type="number" className="w-full" />
            <span className="text-gray-600">gram</span>
          </div>
        </div>

        {/* Checkbox Volume Paket */}
        <div className="mt-4 flex items-center gap-2">
          <Checkbox id="volume" />
          <label htmlFor="volume" className="text-gray-700">
            Volume Paket
          </label>
        </div>

        {/* Tombol Cek Ongkir */}
        <div className="mt-4 flex justify-end">
          <Button className="bg-blue-600 text-white flex items-center gap-2">
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
