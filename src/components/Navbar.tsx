"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X, CircleCheckBig } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Fitur", href: "/#features" },
    // { name: "Cek Ongkir", href: "/cek-ongkir" },
    // { name: "Cek Resi", href: "/#pricing" },
    { name: "Tentang Kami", href: "/#about" },
    { name: "Kontak", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-morph bg-blue-50 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between px-4 mx-auto">
      <div className="flex items-center">
        <a href="#" className="mr-8">
          <div className="relative w-[160px] h-[40px]"> {/* Ukuran bisa disesuaikan */}
            <Image
              src="/images/BhisaKirim_3.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </a>
      </div>
        <div>
          <nav className="items-center hidden space-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="items-center hidden space-x-4 md:flex">
          <div className="flex items-center gap-4 mt-3">
            {/* Masuk Button */}
            <Link href="https://panel.bhisakirim.com/" passHref>
              <Button className="mt-1 text-lg text-blue-500 bg-white border border-blue-500 rounded-2xl px-5 py-2 hover:bg-blue-50 hover:shadow-lg transition-all duration-300">
                Masuk
              </Button>
            </Link>

            {/* Coba Sekarang Button */}
            <Link href="https://panel.bhisakirim.com/" passHref>
              <Button className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full text-xl px-6 py-3 min-h-[54px] flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-transform duration-300">
                <CircleCheckBig />
                Coba Sekarang

                {/* Shimmer Animation */}
                <motion.div
                  className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12"
                  animate={{ left: "100%" }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
              </Button>
            </Link>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 md:hidden"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 bg-white shadow-lg transition-all duration-300 ease-in-out",
          isMenuOpen ? "top-[60px] opacity-100" : "-top-[450px] opacity-0"
        )}
      >
        <div className="container flex flex-col px-4 py-5 mx-auto space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="py-2 font-medium text-gray-700 hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col pt-3 space-y-3">
            <Button variant="outline" className="border-blue-500">
              Masuk
            </Button>
            <Button className="text-white bg-blue-500 hover:bg-blue-600 hover:text-white">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
