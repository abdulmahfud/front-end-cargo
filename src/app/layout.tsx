import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Bhisakirim - Jasa Kirim Paket Multi Ekspedisi Murah Seluruh Indonesia",
  description:
    "Bhisakirim adalah solusi jasa pengiriman paket murah dengan banyak pilihan ekspedisi (JNE, J&T, Sicepat, Anteraja, dll) ke seluruh Indonesia. Cek ongkir dan kirim paket lebih mudah dan cepat.",
  keywords: [
    "jasa kirim paket",
    "multi ekspedisi murah",
    "pengiriman paket indonesia",
    "cek ongkir",
    "ekspedisi terbaik",
    "Bhisakirim",
    "jasa ekspedisi murah",
    "pengiriman cepat seluruh Indonesia",
  ],
  icons: {
    icon: "/images/favicon.png",
    shortcut: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
  openGraph: {
    title:
      "Bhisakirim - Jasa Kirim Paket Multi Ekspedisi Murah Seluruh Indonesia",
    description:
      "Cek ongkir dan kirim paket lebih mudah bersama Bhisakirim. Dapatkan layanan pengiriman multi ekspedisi dengan harga terjangkau ke seluruh Indonesia.",
    url: "https://bhisakirim.com",
    siteName: "Bhisakirim",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bhisakirim - Jasa Kirim Paket Multi Ekspedisi Murah",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Bhisakirim - Jasa Kirim Paket Multi Ekspedisi Murah Seluruh Indonesia",
    description:
      "Layanan pengiriman paket murah multi ekspedisi (JNE, J&T, Sicepat, dll) ke seluruh Indonesia. Cek ongkir & kirim paket cepat bersama Bhisakirim.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  authors: [{ name: "Bhisakirim", url: "https://bhisakirim.com" }],
  creator: "Bhisakirim Team",
  publisher: "Bhisakirim",
  alternates: {
    canonical: "https://bhisakirim.com", // <--- Canonical URL di sini
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
