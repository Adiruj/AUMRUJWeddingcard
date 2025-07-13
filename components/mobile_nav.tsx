"use client";
import { Heart, CalendarDays, Image, MapPin } from "lucide-react"; 
import { Link } from "react-scroll";
import { useState } from "react";

export const Mobile_Navbar = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", icon: <Heart className="h-5 w-5" />, label: "Home" },
    { id: "program", icon: <CalendarDays className="h-5 w-5" />, label: "Program" },
    { id: "gallery", icon: <Image className="h-5 w-5" />, label: "Gallery" },
    { id: "location", icon: <MapPin className="h-5 w-5" />, label: "Location" },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-white rounded-2xl shadow-lg border border-gray-200 px-6 py-3 z-50">
      <div className="flex justify-between items-center text-gray-500 text-sm">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            duration={500}
            offset={-80} // เผื่อเผลอทับหัว
            onSetActive={() => setActive(item.id)}
            className={`flex flex-col items-center gap-1 cursor-pointer transition ${
              active === item.id ? "text-blue-600" : "text-gray-500"
            }`}
          >
            {item.icon}
            <span className="text-xs">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
