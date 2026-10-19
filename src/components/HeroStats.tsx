import React from "react";
import { Package, MapPin, TrendingUp, Users } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  {
    icon: <Package size={22} />,
    iconBg: "bg-blue-100 text-blue-500",
    label: "Ribuan Pengiriman Setiap Hari",
    value: "10.000+",
    badge: "Paket",
    badgeClass: "bg-blue-50 text-blue-600",
  },
  {
    icon: <MapPin size={22} />,
    iconBg: "bg-orange-100 text-orange-500",
    label: "Jangkauan Seluruh Indonesia",
    value: "500+",
    badge: "Kota",
    badgeClass: "bg-orange-50 text-orange-600",
  },
  {
    icon: <TrendingUp size={22} />,
    iconBg: "bg-green-100 text-green-500",
    label: "Tingkat Ketepatan Pengiriman",
    value: "99.5%",
    badge: "Tepat Waktu",
    badgeClass: "bg-green-50 text-green-600",
  },
  {
    icon: <Users size={22} />,
    iconBg: "bg-purple-100 text-purple-500",
    label: "Pengguna Terpercaya",
    value: "10.000+",
    badge: "Pengguna",
    badgeClass: "bg-purple-50 text-purple-600",
  },
];

const HeroStats: React.FC = () => {
  return (
    <section className="relative z-10">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:px-6 sm:py-8 sm:gap-6 md:grid-cols-4 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-3 sm:gap-4">
                <div
                  className={`h-11 w-11 rounded-xl flex items-center justify-center flex-shrink-0 sm:h-14 sm:w-14 ${stat.iconBg}`}
                >
                  {stat.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 leading-tight sm:text-sm">
                    {stat.label}
                  </p>
                  <div className="flex flex-wrap items-center gap-1.5 mt-1 sm:gap-2">
                    <span className="text-lg font-bold text-gray-900 sm:text-xl">
                      {stat.value}
                    </span>
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full ${stat.badgeClass}`}
                    >
                      {stat.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HeroStats;
