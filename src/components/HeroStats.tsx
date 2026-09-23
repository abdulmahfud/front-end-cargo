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
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div
                  className={`h-14 w-14 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.iconBg}`}
                >
                  {stat.icon}
                </div>
                <div>
                  <p className="text-sm text-gray-500 leading-tight">
                    {stat.label}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-bold text-gray-900">
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
