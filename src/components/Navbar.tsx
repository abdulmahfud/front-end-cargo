"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X, CircleCheckBig } from "lucide-react";
import { Button } from "../components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
    { name: "Cek Ongkir", href: "/cek-ongkir" },
    { name: "Cek Resi", href: "/#pricing" },
    { name: "Tentang Kami", href: "/#about" },
    { name: "Kontak", href: "/#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-morph bg-blue-50 py-3 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-8">
            <div>
              <Image
                src="/image/bisakirim.png"
                alt="Logo"
                width={100}
                height={100}
              />
            </div>
          </Link>
        </div>
        <div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-blue-500 font-medium transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="hidden md:flex md:pr-40 items-center space-x-4">
          <Button
            variant="outline"
            className="rounded-2xl text-blue-500 border-blue-500"
          >
            Masuk
          </Button>
          <Button className="hover:bg-blue-800 relative overflow-hidden bg-blue-500 text-white rounded-full text-xl px-6 py-3 min-h-[44px] flex items-center justify-center gap-2">
            <CircleCheckBig />
            Coba Sekarang
            <motion.div
              className="absolute top-0 button-0 left-[-150%] h-full w-[150%] bg-gradient-to-r from-transparent via-blue-500 to-transparent rotate-30"
              animate={{ left: "100%" }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
          </Button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
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
        <div className="container mx-auto py-5 px-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-500 py-2 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-3 pt-3">
            <Button variant="outline" className="border-blue-500">
              Masuk
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white">
              Daftar
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
