"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import AnimatedSection from "@/components/AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, MessageCircle, Clock } from "lucide-react";

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

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-white py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1 px-4 py-1 bg-blue-50 text-blue-500 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="h-4 w-4" />
                FAQ
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Pertanyaan yang Sering Diajukan
              </h1>
              <p className="text-lg text-gray-600">
                Temukan jawaban seputar layanan pengiriman BhisaKirim.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="max-w-3xl mx-auto rounded-2xl bg-gray-50 px-6 shadow-sm md:px-8">
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

          <AnimatedSection delay={200}>
            <p className="mt-10 text-center italic text-gray-400">
              BhisaKirim — pilih. kirim. selesai.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
