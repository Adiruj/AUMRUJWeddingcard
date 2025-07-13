'use client';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

// 💍 ตั้งวันแต่งงานตรงนี้
const weddingDate = dayjs('2025-11-01T15:00:00+07:00');

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    // คำนวณทันทีหลัง mount
    setTimeLeft(getTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) return null; // ยังไม่พร้อม render (กัน hydration mismatch)

  return (
    <div className="text-center text-gray-800 font-kanit">
      <div className="flex justify-center gap-4 text-lg md:text-xl font-medium">
        <TimeBox label="วัน" value={timeLeft.days} />
        <TimeBox label="ชั่วโมง" value={timeLeft.hours} />
        <TimeBox label="นาที" value={timeLeft.minutes} />
        <TimeBox label="วินาที" value={timeLeft.seconds} />
      </div>
    </div>
  );
}

function getTimeLeft() {
  const now = dayjs();
  const diff = weddingDate.diff(now);
  const dur = dayjs.duration(diff);

  return {
    days: Math.floor(dur.asDays()),
    hours: dur.hours(),
    minutes: dur.minutes(),
    seconds: dur.seconds(),
  };
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex flex-col items-center">
      <div className="text-4xl text-black">{String(value).padStart(2, '0')}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
