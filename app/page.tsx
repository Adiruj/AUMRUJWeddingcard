import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { MapPin } from "lucide-react";

import CountdownTimer from "@/components/countdown";
import GalleryCarousel from "@/components/garllery";
import GoogleMap from "@/components/googlemap";

export default function Home() {
  return (
    <section className="w-full sm:min-h-screen relative pb-24">
      <div className="flex flex-col gap-2">
        {/**Home */}
        <section id="home">
          <div className="sm:hidden w-full">
            <Image
              alt="HeroUI hero Image"
              radius="none"
              src="/gallery/21.JPG"
            />
          </div>
          <div className="hidden sm:block w-full">
            <Image
              alt="HeroUI hero Image"
              radius="none"
              src="/gallery/01.JPEG"
            />
          </div>

          <div className="flex flex-col mx-4">
            <h1 className="text-center sm:text-sm md:text-4xl pt-8 md:pt-14 font-kanit">
              THE HONOUR OF YOUR PRESENCE IS REQUESTED AT THE MARRIAGE
              CELERATION OF
            </h1>

            {/* Ruj & Aum Profile */}
            <div className="flex flex-col sm:flex-row items-center justify-center text-center pt-8 md:pt-20 gap-12 md:gap-32">
              {/* Aum */}
              <div className="flex flex-col items-center gap-4 md:gap-10">
                <Image
                  alt="HeroUI hero Image"
                  height={300}
                  radius="full"
                  src="/main/A02.png"
                  width={300}
                />
                <h2 className="sm:text-xl md:text-3xl">
                  นางสาว พัชรียา อุตมา (อัม)
                </h2>
              </div>

              {/* Ruj */}
              <div className="flex flex-col items-center gap-4 md:gap-10">
                <Image
                  alt="HeroUI hero Image"
                  height={300}
                  radius="full"
                  src="/main/R02.png"
                  width={300}
                />
                <h2 className="sm:text-xl md:text-3xl">
                  นาย อดิรุจ สองสีใส (รุจ)
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section id="program">
          <div className="flex flex-col mx-4 ">
            {/**Countdown to Date */}
            <div className="flex flex-col justify-items-center items-center pt-10">
              <Image
                alt="HeroUI hero Image"
                radius="full"
                src="/main/logo01.png"
                width={120}
              />
              <h1 className="text-center sm:text-medium md:text-2xl mx-14">
                LET&apos;S CELEBRATE TOGETHER ON OUR SPECIAL DAY ON
              </h1>
              <h1 className="text-center text-5xl pt-6 mx-6">01 NOV 2025</h1>
              <div className="pt-6">
                <CountdownTimer />
              </div>
            </div>
          </div>
          {/**Schedule */}
          <div className="flex flex-col justify-items-center items-center pt-10 gap-4">
            <h1 className="md:text-2xl">SCHEDULE</h1>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <Image
                alt="Schedule Photo"
                className="w-full md:w-[500px] h-auto object-cover"
                radius="none"
                src="/gallery/23.JPG"
              />
              <Image
                alt="Plans"
                className="w-full md:w-[800px]"
                radius="none"
                src="/main/plans.svg"
              />
            </div>
          </div>
        </section>

        <section id="gallery">
          {/**Gallery */}
          <div className="w-full max-w-screen-md mx-auto px-4 flex flex-col justify-items-center items-center pt-10 gap-4">
            <h1>GALLERY</h1>
            <GalleryCarousel />
          </div>

          {/**Google Form */}
          <div className="flex flex-col justify-items-center items-center text-center pt-10 gap-4 mx-6">
            <h1 className="italic text-gray-700">
              &quot;เพื่อให้เราสามารถวางแผนในการดูแลท่าน
              ซึ่งเป็นแขกคนสำคัญได้อย่างเต็มที่
              ขอรบกวนทุกท่านทำแบบตอบรับการเข้าร่วมงานให้เราด้วยนะคะ/ครับ&quot;
            </h1>
            <h1 className="italic text-gray-700">
              HOPE TO SEE YOU AT OUR WEDDING
            </h1>
            <a
              className="w-full"
              href="https://docs.google.com/forms/d/e/1FAIpQLSf3tQf2DqjnpyWCZt8pnOb6LMnKSdAB_sTFaByIfQucD6ZXWw/viewform?usp=dialog"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-full" color="primary" variant="bordered">
                กดเพื่อลงทะเบียนการเข้าร่วมงาน
              </Button>
            </a>
          </div>
        </section>

        <section id="location">
          {/** Location */}
          <div className="flex flex-col justify-items-center items-center text-center pt-10 gap-2 mx-6">
            <MapPin />
            <h1>ลำปางรีสอร์ท</h1>
            <h1>Lampang Resort & Restaurant</h1>
            <GoogleMap />
            <div className="flex flex-row gap-2 pt-2">
              <MapPin className="w-5 h-5" />
              <h1 className="text-sm font-kanit">
                339 Phichai, Mueang Lampang District, Lampang 52000
              </h1>
            </div>
            <a
              className="w-full"
              href="https://maps.app.goo.gl/Dr22PqEbNsgdYwVLA"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Button className="w-full" color="primary" variant="bordered">
                DIRECTION
              </Button>
            </a>
          </div>

          {/** Promtpay */}
          <div className="flex flex-col justify-items-center items-center text-center pt-10 gap-2 mx-6">
            <h1>QR PROMPTPAY</h1>
            <Image
              alt="HeroUI hero Image"
              radius="none"
              src="/main/qrpay02.jpg"
              width={150}
            />
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center pt-10 gap-4 mx-6">
            <h1>CONTACT</h1>
            <div className="flex flex-col gap-2 text-sm text-gray-600 font-kanit">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Tel AUM:</span>
                <a
                  className="text-blue-500 hover:underline"
                  href="tel:0656519897"
                >
                  065-651-9897
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Tel RUJ:</span>
                <a
                  className="text-blue-500 hover:underline"
                  href="tel:0909091463"
                >
                  090-909-1463
                </a>
              </div>
            </div>
          </div>

          {/* Credit */}
          <div className="flex justify-center items-center gap-2 pt-10 mx-6">
            <span className="text-sm text-gray-500 font-kanit">
              Developed by
            </span>
            <a
              className="text-blue-500 font-semibold hover:underline"
              href="https://github.com/Adiruj" // ลิงก์ตัวอย่าง
              rel="noopener noreferrer"
              target="_blank"
            >
              NumChock
            </a>
          </div>
        </section>
      </div>
    </section>
  );
}

//flex flex-col items-center justify-center gap-4 py-8 md:py-10
