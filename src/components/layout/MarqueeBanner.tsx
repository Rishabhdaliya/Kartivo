"use client";

import { Star, Truck, Shield, Headphones } from "lucide-react";
import Marquee from "./Marquee";

export default function MarqueeBanner() {
  const announcements = [
    {
      icon: <Star className="h-4 w-4" />,
      text: "⭐ Free shipping on orders over $50",
    },
    {
      icon: <Truck className="h-4 w-4" />,
      text: "🚚 Same-day delivery available",
    },
    {
      icon: <Shield className="h-4 w-4" />,
      text: "🛡️ 30-day money-back guarantee",
    },
    {
      icon: <Headphones className="h-4 w-4" />,
      text: "🎧 24/7 customer support",
    },
    {
      icon: <Star className="h-4 w-4" />,
      text: "✨ New arrivals every week",
    },
    {
      icon: <Truck className="h-4 w-4" />,
      text: "📦 Track your order in real-time",
    },
  ];

  return (
    <div className="bg-primary text-primary-foreground  overflow-hidden">
      <Marquee pauseOnHover className="[--duration:50s]">
        {announcements.map((item, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 mx-8 whitespace-nowrap"
          >
            <span className="text-sm font-medium">{item.text}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
