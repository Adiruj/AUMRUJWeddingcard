/** @type {import('next').NextConfig} */
const nextConfig = {
  // ✅ ใส่ config อื่นๆ ได้
  reactStrictMode: true,
  swcMinify: true,

  // ✅ เพิ่ม allowedDevOrigins
  allowedDevOrigins: [
    'http://192.168.1.35:3000', // เปลี่ยนเป็น IP เครื่องที่คุณใช้ทดสอบ
  ],
};

module.exports = nextConfig;
