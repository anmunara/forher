"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Race } from "@/lib/schedule";

function useCountdown(target: string) {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = new Date(target).getTime() - Date.now();
      const clamp = Math.max(0, diff);
      setLeft({
        d: Math.floor(clamp / 86400000),
        h: Math.floor((clamp / 3600000) % 24),
        m: Math.floor((clamp / 60000) % 60),
        s: Math.floor((clamp / 1000) % 60)
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  return left;
}

function Box({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-black tabular-nums leading-none">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-f1silver mt-1">
        {label}
      </span>
    </div>
  );
}

export default function NextRaceWidget({ race }: { race: Race }) {
  const t = useCountdown(race.date);

  return (
    <section className="bg-f1-grid border-y border-f1gray/40">
      <div className="max-w-[1400px] mx-auto px-4 py-10 flex flex-col md:flex-row md:items-center gap-8">
        <div className="f1-edge pl-5">
          <span className="text-[11px] font-bold uppercase tracking-widest text-f1red">
            Round {race.round} · Next Race
          </span>
          <h2 className="headline text-2xl md:text-4xl mt-1">
            {race.flag} {race.name}
          </h2>
          <p className="text-f1silver mt-1">
            {race.circuit} · {race.city}, {race.country}
          </p>
        </div>

        <div className="md:ml-auto flex items-center gap-4 md:gap-6">
          <Box value={t.d} label="Days" />
          <span className="text-2xl text-f1gray font-black">:</span>
          <Box value={t.h} label="Hrs" />
          <span className="text-2xl text-f1gray font-black">:</span>
          <Box value={t.m} label="Min" />
          <span className="text-2xl text-f1gray font-black">:</span>
          <Box value={t.s} label="Sec" />
        </div>

        <Link
          href="/schedule"
          className="bg-f1red hover:bg-red-700 transition text-white text-xs uppercase font-bold px-6 py-3 rounded-sm tracking-wide text-center"
        >
          Full Schedule
        </Link>
      </div>
    </section>
  );
}
