'use client';
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react"; // ใช้ไอคอนจาก lucide-react ถ้าไม่มีก็เปลี่ยนเป็น svg หรืออื่นๆ

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.pageYOffset > 50); // เลื่อนลงมา 300px ก็แสดงปุ่ม
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-6 z-[9999] p-3 rounded-full bg-white bg-opacity-30 text-gray-800 shadow-sm backdrop-blur-sm hover:bg-opacity-50 transition"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}
