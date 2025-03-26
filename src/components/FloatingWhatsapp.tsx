"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/6281221555105" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 shadow-lg"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image
        src="/image/whatsapp.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="rounded-full"
      />
    </motion.a>
  );
};

export default FloatingWhatsApp;
