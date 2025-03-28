
import React from 'react';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/image/bisakirim.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <p className="text-gray-600 mb-6">
              Layanan pengiriman terpercaya untuk kebutuhan personal dan bisnis
              Anda. Kami membantu Anda mengirim paket dengan mudah, cepat, dan
              aman.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-500 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-500">
              Layanan
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Regular Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Express Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Same Day Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  International Shipping
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Cargo Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-500">
              Perusahaan
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Karir
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Partner Bisnis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-500 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-blue-500">Kontak</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="text-blue-500 mr-3 mt-1 flex-shrink-0"
                />
                <span className="text-gray-600">
                  Jl. Hj Ismail No. 10, Jakarta Selatan
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">085854431807</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-blue-500 mr-3 flex-shrink-0" />
                <span className="text-gray-600">hello@globallogistic.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} GlobalLogistic. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
            >
              Syarat & Ketentuan
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-500 text-sm transition-colors"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
