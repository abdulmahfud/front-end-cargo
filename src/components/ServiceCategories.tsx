"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { serviceCategories as categories } from "@/lib/serviceCategories";

export default function ServiceCategories() {
  return (
    <section className="section-padding bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-600 mb-4">
              Layanan Pengiriman Bhisakirim
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Berbagai Pilihan Layanan Pengiriman untuk{" "}
              <span className="text-blue-500">Setiap Kebutuhan Anda</span>
            </h2>
            <p className="text-lg text-gray-600">
              Temukan layanan pengiriman yang sesuai dengan kebutuhan personal
              maupun bisnis Anda. Bhisakirim membantu Anda membandingkan
              pilihan ekspedisi dalam satu platform.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedSection key={category.slug} delay={100 + index * 50}>
                <div className="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
                  <div
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${category.iconBg}`}
                  >
                    <Icon size={28} />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-800">
                    <Link
                      href={`/layanan/${category.slug}`}
                      className="hover:text-blue-500"
                    >
                      {category.title}
                    </Link>
                  </h3>
                  <p className="mb-4 text-sm text-gray-500">
                    {category.subtitle}
                  </p>
                  <p className="mb-4 text-sm text-gray-600">
                    {category.description}
                  </p>

                  <div className="mb-6 space-y-2.5 border-t border-gray-100 pt-4">
                    {category.checklist.map((item) => (
                      <div key={item} className="flex items-center gap-2.5">
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white ${category.checkColor}`}
                        >
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto mb-6 flex items-end justify-center rounded-xl bg-gray-50 p-4">
                    <Image
                      src={category.image}
                      alt={category.title}
                      width={160}
                      height={120}
                      unoptimized
                      className="h-28 w-auto object-contain"
                    />
                  </div>

                  <a
                    href="https://panel.bhisakirim.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2 rounded-full border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      {category.buttonLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
