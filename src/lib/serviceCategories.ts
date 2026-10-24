import { Boxes, Globe, Package, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Sumber tunggal data layanan - dipakai bareng oleh section "Layanan
// Pengiriman Bhisakirim" di beranda (ServiceCategories.tsx), dropdown menu
// "Layanan" di Navbar, link di Footer, dan halaman detail per layanan
// (app/layanan/[slug]/page.tsx) - supaya kontennya selalu konsisten di
// semua tempat.
export interface ServiceCategory {
  slug: string;
  icon: LucideIcon;
  iconBg: string;
  checkColor: string;
  title: string;
  subtitle: string;
  description: string;
  checklist: string[];
  image: string;
  buttonLabel: string;
}

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "reguler",
    icon: Package,
    iconBg: "bg-amber-100 text-amber-500",
    checkColor: "bg-amber-500",
    title: "Pengiriman Paket Reguler",
    subtitle: "Praktis untuk kebutuhan sehari-hari",
    description:
      "Kirim paket dengan aman dan ekonomis dengan pilihan layanan reguler dari berbagai ekspedisi. Cocok untuk kebutuhan personal maupun bisnis.",
    checklist: [
      "Pilihan ekspedisi beragam",
      "Tarif lebih hemat",
      "Cocok untuk pengiriman rutin",
    ],
    image: "/images/box.png",
    buttonLabel: "Cek Pengiriman Reguler",
  },
  {
    slug: "instan",
    icon: Zap,
    iconBg: "bg-blue-100 text-blue-500",
    checkColor: "bg-blue-500",
    title: "Pengiriman Paket Instan",
    subtitle: "Untuk kebutuhan yang mendesak",
    description:
      "Saat waktu menjadi prioritas, pilih layanan instan yang tersedia di wilayah Anda. Pengiriman lebih cepat dengan proses yang praktis.",
    checklist: [
      "Proses pengiriman lebih cepat",
      "Cakupan layanan luas",
      "Cocok untuk kebutuhan mendesak",
    ],
    image: "/images/bike.png",
    buttonLabel: "Cek Pengiriman Instan",
  },
  {
    slug: "cargo",
    icon: Boxes,
    iconBg: "bg-purple-100 text-purple-500",
    checkColor: "bg-purple-500",
    title: "Pengiriman Paket Cargo",
    subtitle: "Untuk barang berat dan berukuran besar",
    description:
      "Kirim barang dalam jumlah besar atau berat dengan pilihan layanan kargo yang tersedia. Solusi tepat untuk kebutuhan bisnis Anda.",
    checklist: [
      "Mendukung pengiriman barang besar",
      "Beragam pilihan ekspedisi kargo",
      "Sesuai untuk kebutuhan bisnis",
    ],
    image: "/images/forklift.png",
    buttonLabel: "Cek Pengiriman Cargo",
  },
  {
    slug: "internasional",
    icon: Globe,
    iconBg: "bg-green-100 text-green-500",
    checkColor: "bg-green-500",
    title: "Pengiriman Paket Internasional",
    subtitle: "Jangkau tujuan ke luar negeri",
    description:
      "Kirim paket ke berbagai negara dengan pilihan layanan internasional yang tersedia. Perhatikan persyaratan dokumen dan ketentuan negara tujuan.",
    checklist: [
      "Pilihan ekspedisi internasional",
      "Cakupan banyak negara",
      "Informasi dokumen dan ketentuan",
    ],
    image: "/images/airplane.png",
    buttonLabel: "Cek Pengiriman Internasional",
  },
];

export function getServiceCategoryBySlug(
  slug: string
): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug);
}
