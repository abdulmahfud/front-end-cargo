"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X, CircleCheckBig, Newspaper, BookOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../components/ui/navigation-menu";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { serviceCategories } from "@/lib/serviceCategories";

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

  // Sub menu Blog: "Update Terkini" (semua kategori post kecuali Panduan)
  // dan "Panduan" (khusus kategori "panduan") - lihat app/blog/page.tsx dan
  // app/blog/panduan/page.tsx.
  const blogSubMenu = [
    {
      name: "Update Terkini",
      href: "/blog",
      icon: Newspaper,
      iconBg: "bg-blue-100 text-blue-500",
    },
    {
      name: "Panduan",
      href: "/blog/panduan",
      icon: BookOpen,
      iconBg: "bg-amber-100 text-amber-500",
    },
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
            <div className="relative w-[160px] h-[40px]">
              {" "}
              {/* Ukuran bisa disesuaikan */}
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
            <Link
              href="/"
              className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500"
            >
              Beranda
            </Link>

            {/* flex-none: NavigationMenu bawaan pakai flex-1 + justify-center,
                jadi dia "menyedot" sisa ruang di baris nav ini lalu
                menengahkan trigger-nya di situ - bikin jarak ke item
                tetangga jadi tidak presisi dibanding Link biasa yang cuma
                selebar kontennya. flex-none menyamakan perilakunya dengan
                Link lain supaya spasi antar menu rata (space-x-6 di <nav>
                berlaku sama ke semua item). Layanan & Blog juga sengaja
                dipisah jadi dua NavigationMenu sendiri-sendiri (bukan satu
                NavigationMenuList berisi dua trigger) supaya jarak Layanan-
                Blog ikut space-x-6 yang sama, bukan space-x-1 bawaan
                NavigationMenuList. */}
            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto bg-transparent p-0 font-medium text-gray-700 hover:bg-transparent hover:text-blue-500 focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-blue-500">
                    Layanan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-1 p-3">
                      {serviceCategories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <li key={category.slug}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={`/layanan/${category.slug}`}
                                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                              >
                                <span
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${category.iconBg}`}
                                >
                                  <Icon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-medium text-gray-700">
                                  {category.title}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks
              .filter((link) => !["Beranda", "Kontak"].includes(link.name))
              .map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-700 transition-colors duration-200 hover:text-blue-500"
                >
                  {link.name}
                </Link>
              ))}

            {/* Blog ditaruh persis sebelum Kontak. */}
            <NavigationMenu className="flex-none">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-auto bg-transparent p-0 font-medium text-gray-700 hover:bg-transparent hover:text-blue-500 focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-blue-500">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[220px] gap-1 p-3">
                      {blogSubMenu.map((item) => {
                        const Icon = item.icon;
                        return (
                          <li key={item.href}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-gray-50"
                              >
                                <span
                                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.iconBg}`}
                                >
                                  <Icon className="h-4 w-4" />
                                </span>
                                <span className="text-sm font-medium text-gray-700">
                                  {item.name}
                                </span>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {navLinks
              .filter((link) => link.name === "Kontak")
              .map((link) => (
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
            <a
              href="https://panel.bhisakirim.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 text-lg text-blue-500 bg-white border border-blue-500 rounded-2xl px-5 py-2 hover:bg-blue-50 hover:shadow-lg transition-all duration-300"
            >
              Masuk
            </a>

            {/* Coba Sekarang Button */}
            <a
              href="https://panel.bhisakirim.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </a>
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
          "md:hidden fixed inset-x-0 bg-white shadow-lg transition-all duration-300 ease-in-out max-h-[calc(100vh-60px)] overflow-y-auto",
          isMenuOpen ? "top-[60px] opacity-100" : "-top-[700px] opacity-0"
        )}
      >
        <div className="container flex flex-col px-4 py-5 mx-auto space-y-1">
          <Link
            href="/"
            className="py-2 font-medium text-gray-700 hover:text-blue-500"
            onClick={() => setIsMenuOpen(false)}
          >
            Beranda
          </Link>

          <Accordion type="single" collapsible>
            <AccordionItem value="layanan" className="border-none">
              <AccordionTrigger className="py-2 font-medium text-gray-700 hover:text-blue-500 hover:no-underline">
                Layanan
              </AccordionTrigger>
              <AccordionContent className="pb-2 pl-3">
                <div className="flex flex-col space-y-1">
                  {serviceCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <Link
                        key={category.slug}
                        href={`/layanan/${category.slug}`}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${category.iconBg}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {category.title}
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {navLinks
            .filter((link) => !["Beranda", "Kontak"].includes(link.name))
            .map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-2 font-medium text-gray-700 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

          {/* Blog ditaruh persis sebelum Kontak. */}
          <Accordion type="single" collapsible>
            <AccordionItem value="blog" className="border-none">
              <AccordionTrigger className="py-2 font-medium text-gray-700 hover:text-blue-500 hover:no-underline">
                Blog
              </AccordionTrigger>
              <AccordionContent className="pb-2 pl-3">
                <div className="flex flex-col space-y-1">
                  {blogSubMenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-center gap-2.5 py-1.5 text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md ${item.iconBg}`}
                        >
                          <Icon className="h-3.5 w-3.5" />
                        </span>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {navLinks
            .filter((link) => link.name === "Kontak")
            .map((link) => (
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
            <a
              href="https://panel.bhisakirim.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-blue-500">
                Masuk
              </Button>
            </a>
            <a
              href="https://panel.bhisakirim.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="text-white bg-blue-500 hover:bg-blue-600 hover:text-white">
                Daftar
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
