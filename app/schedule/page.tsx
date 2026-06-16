import type { Metadata } from "next";
import Link from "next/link";
import { SCHEDULE } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "2026 F1 Schedule — Race Calendar",
  description: "The full 24-race Formula 1 2026 season calendar with dates, circuits and results."
};

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });
}

const STATUS_STYLE: Record<string, string> = {
  completed: "bg-black/50 text-white",
  upcoming: "bg-f1red text-white",
  live: "bg-f1red text-white"
};

const CIRCUITS = ["spain", "austria", "britain", "night"];
function circuitImg(slug: string, i: number) {
  if (["spain", "austria", "britain"].includes(slug)) return `/img/circuits/${slug}.png`;
  return `/img/circuits/${CIRCUITS[i % CIRCUITS.length]}.png`;
}

export default function SchedulePage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="f1-edge pl-5 mb-10">
        <span className="text-[11px] font-bold uppercase tracking-widest text-f1red">
          2026 Season
        </span>
        <h1 className="headline text-4xl md:text-6xl mt-1">Race Schedule</h1>
        <p className="text-f1silver mt-2">24 rounds across five continents.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {SCHEDULE.map((r, i) => (
          <Link
            key={r.slug}
            href={`/schedule/${r.slug}`}
            className="group relative z-0 flex h-[280px] items-stretch rounded-lg overflow-hidden border border-f1gray/30 hover:border-f1red hover:-translate-y-1 transition-all duration-300"
          >
            <img
              src={circuitImg(r.slug, i)}
              alt={r.name}
              className="absolute z-10 inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
            <span className="absolute z-20 inset-x-0 top-0 h-1/2" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, #000 100%)" }} />
            <span className="absolute z-20 inset-x-0 bottom-0 h-2/3" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000 100%)" }} />
            <div className="relative z-30 flex w-full flex-col p-5 text-white">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest">Round {r.round}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded ${STATUS_STYLE[r.status]}`}>
                  {r.status}
                </span>
              </div>
              <div className="mt-auto">
                <div className="text-3xl mb-1">{r.flag}</div>
                <h2 className="font-black text-xl leading-tight group-hover:text-f1red transition">{r.name}</h2>
                <p className="text-sm text-white/80 mt-0.5">{r.circuit}</p>
                <div className="mt-2 flex items-center justify-between text-sm">
                  <span className="font-bold">{fmtDate(r.date)}</span>
                  {r.winner ? (
                    <span className="text-white/80">🏆 <span className="text-white font-semibold">{r.winner}</span></span>
                  ) : (
                    <span className="text-white/80">{r.time}</span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
