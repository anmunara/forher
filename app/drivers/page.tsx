import type { Metadata } from "next";
import Link from "next/link";
import { DRIVERS, driverImage } from "@/lib/drivers";
import { TEAMS } from "@/lib/teams";

export const metadata: Metadata = {
  title: "F1 Drivers 2026 — The Grid",
  description: "Meet the 2026 Formula 1 grid: every driver, their team, number and career stats."
};

function team(id: string) {
  return TEAMS.find((t) => t.id === id);
}

export default function DriversPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="f1-edge pl-5 mb-10">
        <span className="text-[11px] font-bold uppercase tracking-widest text-f1red">
          2026 Season
        </span>
        <h1 className="headline text-4xl md:text-6xl mt-1">F1 Drivers</h1>
        <p className="text-f1silver mt-2">The 20 drivers chasing the title.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {DRIVERS.map((d) => {
          const t = team(d.teamId);
          return (
            <Link
              key={d.id}
              href={`/drivers/${d.id}`}
              className="group relative z-0 flex flex-col rounded-lg overflow-hidden border border-f1gray/30 hover:-translate-y-1.5 hover:border-transparent transition-all duration-300"
            >
              {/* Team-color gradient backdrop */}
              <span
                className="absolute inset-0 z-0 opacity-90"
                style={{ background: `linear-gradient(150deg, ${t?.color ?? "#E10600"} -30%, #1F1F27 60%)` }}
              />
              {/* Big watermark number */}
              <span className="absolute z-10 right-2 top-1 text-8xl font-black leading-none text-white/10 group-hover:text-white/20 transition select-none">
                {d.number}
              </span>

              <div className="relative z-20 flex flex-col h-full p-5">
                <div className="flex items-start justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                    {t?.name}
                  </span>
                  <span className="text-2xl">{d.flag}</span>
                </div>

                {/* Driver portrait hero */}
                <div className="relative h-44 my-3 overflow-hidden rounded-md">
                  <img
                    src={driverImage(d)}
                    alt={`${d.firstName} ${d.lastName}`}
                    className="absolute inset-0 h-full w-full object-cover object-top drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] transition duration-500 group-hover:scale-110"
                  />
                </div>

                <h2 className="font-black text-2xl leading-none">
                  <span className="block text-white/70 text-sm font-semibold uppercase tracking-wide mb-0.5">
                    {d.firstName}
                  </span>
                  {d.lastName}
                </h2>

                <div className="mt-4 pt-3 border-t border-white/15 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <p className="font-black text-lg">{d.podiums}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/60">Podiums</p>
                  </div>
                  <div>
                    <p className="font-black text-lg">{d.championships}</p>
                    <p className="text-[10px] uppercase tracking-widest text-white/60">Titles</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
