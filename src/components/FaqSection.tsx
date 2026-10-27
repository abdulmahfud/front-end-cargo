"use client";

import type { ReactNode } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, MessageCircle, Clock } from "lucide-react";

// Sumber tunggal daftar FAQ - dipakai oleh halaman /faq (berdiri sendiri)
// dan /blog/panduan (ditaruh setelah daftar artikel panduan).
const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "Apa itu BhisaKirim?",
    answer: (
      <p>
        BhisaKirim adalah platform agregator pengiriman yang menghubungkan
        kamu dengan berbagai ekspedisi dalam satu tempat. Cek ongkir, pilih
        ekspedisi, kirim paket, dan pantau pengiriman dengan lebih praktis.
      </p>
    ),
  },
  {
    question: "Kenapa harus menggunakan BhisaKirim?",
    answer: (
      <p>
        Tidak perlu cek ekspedisi satu per satu. Dengan BhisaKirim, kamu bisa
        melihat berbagai pilihan layanan pengiriman dalam satu platform dan
        memilih yang sesuai dengan kebutuhanmu. Lebih banyak pilihan, lebih
        praktis.
      </p>
    ),
  },
  {
    question: "Bagaimana cara mengirim paket melalui BhisaKirim?",
    answer: (
      <p>
        Mudah! Masukkan detail pengiriman → cek pilihan ekspedisi → pilih
        layanan → bayar → kirim paket → pantau pengiriman. Pastikan paket
        dikemas dengan aman dan informasi isi serta nilai barang diisi
        dengan benar.
      </p>
    ),
  },
  {
    question: "Apakah BhisaKirim menyediakan COD?",
    answer: (
      <p>
        Ya. BhisaKirim menyediakan layanan COD (Cash on Delivery) untuk akun
        yang sudah terverifikasi. Dana COD akan diproses dan ditransfer ke
        rekening pengirim sesuai ketentuan dan proses dari mitra ekspedisi.
      </p>
    ),
  },
  {
    question: "Bagaimana jika paket saya hilang atau rusak?",
    answer: (
      <p>
        Jangan khawatir, kamu dapat mengajukan klaim sesuai prosedur yang
        berlaku. Siapkan bukti seperti foto paket, kemasan, bukti pengiriman,
        dan dokumen pendukung lainnya. Klaim maksimal 3 × 24 jam sejak paket
        diterima atau sejak informasi kehilangan diterima.
      </p>
    ),
  },
  {
    question: "Bagaimana jika saya membutuhkan bantuan?",
    answer: (
      <div className="space-y-3">
        <p>Tim BhisaKirim siap membantu.</p>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 shrink-0 text-blue-500" />
            support@bhisakirim.com
          </li>
          <li className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4 shrink-0 text-blue-500" />
            +62 813-3032-3559
          </li>
          <li className="flex items-start gap-2">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" />
            <span>
              Senin&ndash;Jumat: 08.00&ndash;17.00 WIB
              <br />
              Sabtu&ndash;Minggu: 09.00&ndash;15.00 WIB
            </span>
          </li>
        </ul>
      </div>
    ),
  },
];

export default function FaqSection({
  title = "Pertanyaan yang Sering Diajukan",
  description = "Temukan jawaban seputar layanan pengiriman BhisaKirim.",
  // h1 di /faq (judul utama halaman itu), h2 di tempat lain (mis.
  // /blog/panduan yang h1-nya sudah dipakai judul halaman sendiri).
  titleAs = "h2",
}: {
  title?: string;
  description?: string;
  titleAs?: "h1" | "h2";
}) {
  const Heading = titleAs;

  return (
    <>
      <AnimatedSection>
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-1 rounded-full bg-blue-50 px-4 py-1 text-sm font-semibold text-blue-500">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </span>
          <Heading className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
            {title}
          </Heading>
          <p className="text-lg text-gray-600">{description}</p>
        </div>
      </AnimatedSection>

      <AnimatedSection delay={100}>
        <div className="mx-auto max-w-3xl rounded-2xl bg-gray-50 px-6 shadow-sm md:px-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base font-semibold text-gray-800">
                  {i + 1}. {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </AnimatedSection>
    </>
  );
}
