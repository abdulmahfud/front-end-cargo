"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import FaqSection from "@/components/FaqSection";

export default function FaqPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-white py-16">
        <div className="container mx-auto px-4">
          <FaqSection titleAs="h1" />

          <AnimatedSection delay={200}>
            <p className="mt-10 text-center italic text-gray-400">
              BhisaKirim — pilih. kirim. selesai.
            </p>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
    </div>
  );
}
