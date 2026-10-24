import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  getServiceCategoryBySlug,
  serviceCategories,
} from "@/lib/serviceCategories";

export function generateStaticParams() {
  return serviceCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getServiceCategoryBySlug(slug);
  if (!category) return { title: "Layanan tidak ditemukan — BhisaKirim" };

  return {
    title: `${category.title} — BhisaKirim`,
    description: category.description,
    openGraph: {
      title: category.title,
      description: category.description,
      type: "website",
    },
  };
}

export default async function ServiceCategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getServiceCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const Icon = category.icon;
  const otherCategories = serviceCategories.filter((c) => c.slug !== slug);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding bg-white py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <AnimatedSection>
            <Link
              href="/"
              className="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-blue-500 hover:text-blue-600"
            >
              <ArrowLeft className="h-4 w-4" />
              Kembali ke Beranda
            </Link>

            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div
                  className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${category.iconBg}`}
                >
                  <Icon size={28} />
                </div>

                <h1 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl">
                  {category.title}
                </h1>
                <p className="mb-4 text-lg text-gray-500">
                  {category.subtitle}
                </p>
                <p className="mb-6 text-gray-600">{category.description}</p>

                <div className="mb-8 space-y-3">
                  {category.checklist.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-white ${category.checkColor}`}
                      >
                        <Check className="h-3.5 w-3.5" strokeWidth={3} />
                      </span>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="https://panel.bhisakirim.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className="w-full gap-2 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:scale-105 transition-transform sm:w-auto">
                      {category.buttonLabel}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/6281330323559"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="w-full gap-2 rounded-full border-blue-500 text-blue-500 hover:bg-blue-50 sm:w-auto"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Hubungi Kami
                    </Button>
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-center rounded-2xl bg-gray-50 p-10">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={320}
                  height={280}
                  unoptimized
                  className="h-auto w-full max-w-sm object-contain"
                />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="mt-20 border-t border-gray-100 pt-12">
              <h2 className="mb-6 text-xl font-semibold text-gray-800">
                Layanan Lainnya
              </h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {otherCategories.map((other) => {
                  const OtherIcon = other.icon;
                  return (
                    <Link
                      key={other.slug}
                      href={`/layanan/${other.slug}`}
                      className="flex items-center gap-3 rounded-xl border border-gray-100 p-4 transition-colors hover:border-blue-200 hover:bg-blue-50/40"
                    >
                      <span
                        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${other.iconBg}`}
                      >
                        <OtherIcon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-gray-700">
                        {other.title}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
}
