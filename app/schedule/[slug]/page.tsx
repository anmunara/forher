import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SCHEDULE } from "@/lib/schedule";
import { DRIVERS } from "@/lib/drivers";
import { TEAMS } from "@/lib/teams";

export function generateStaticParams() {
  return SCHEDULE.map((r) => ({ slug: r.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const r = SCHEDULE.find((x) => x.slug === params.slug);
  return {
    title: r ? `${r.name} 2026 — Race Result` : "F1 Race",
    description: r ? `Result, circuit and details for the ${r.name}.` : undefined
  };
}

const CIRCUITS = ["spain", "austria", "britain", "night"];
function circuitImg(slug: string, i: number) {
  if (["spain", "austria", "britain"].includes(slug)) return `/img/circuits/${slug}.png`;
  return `/img/circuits/${CIRCUITS[i % CIRCUITS.length]}.png`;
}

function teamColor(id: string) {
  return TEAMS.find((t) => t.id === id)?.color ?? "#E10600";
}

// Deterministic mock finishing order for completed races, led by the winner.
function buildResult(winnerLastName?: string) {
  const ordered = [...DRIVERS];
  if (winnerLastName) {
    const wi = ordered.findIndex((d) => d.lastName === winnerLastName);
    if (wi > 0) {
      const [w] = ordered.splice(wi, 1);
      ordered.unshift(w);
    }
  }
  const POINTS = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
  return ordered.slice(0, 10).map((d, i) => ({
    pos: i + 1,
    driver: d,
    points: POINTS[i] ?? 0
  }));
}

export default function RaceDetailPage({ params }: { params: { slug: string } }) {
  const idx = SCHEDULE.findIndex((x) => x.slug === params.slug);
  const r = SCHEDULE[idx];
  if (!r) notFound();

  const fmtFull = new Date(r.date).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const result = r.status === "completed" ? buildResult(r.winner) : [];

  return (
    <div>
      {/* Hero */}
      <section className="relative z-0 h-[320px] flex items-stretch overflow-hidden">
        <img src={circuitImg(r.slug, idx)} alt={r.name} className="absolute z-10 inset-0 h-full w-full object-cover" />
        <span className="absolute z-20 inset-0" style={{ background: "linear-gradient(0deg, #15151E 5%, rgba(21,21,30,0.3) 60%, rgba(21,21,30,0.6) 100%)" }} />
        <div className="relative z-30 max-w-[1400px] w-full mx-auto px-4 flex flex-col justify-end pb-8">
          <Link href="/schedule" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition mb-3">
            ← Full schedule
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-widest text-f1red">Round {r.round}</span>
          <h1 className="headline text-4xl md:text-6xl mt-1">
            {r.flag} {r.name}
          </h1>
          <p className="mt-2 text-white/80">{r.circuit} · {r.city}, {r.country}</p>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 py-12">
        {/* Info row */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-10">
          {[
            ["Date", fmtFull],
            ["Start Time", r.time],
            ["Status", r.status.toUpperCase()],
            ["Winner", r.winner ?? "TBD"]
          ].map(([k, v]) => (
            <div key={k} className="f1-edge pl-4 bg-f1dark rounded-lg p-5 border border-f1gray/30">
              <p className="text-lg font-black leading-tight">{v}</p>
              <p className="text-[10px] uppercase tracking-widest text-f1silver mt-1">{k}</p>
            </div>
          ))}
        </div>

        {/* Result table or upcoming notice */}
        {result.length > 0 ? (
          <div>
            <h2 className="headline text-2xl mb-4">Race Result</h2>
            <div className="overflow-hidden rounded-lg border border-f1gray/30">
              <div className="hidden sm:flex items-center gap-4 px-4 py-2 bg-f1black text-[10px] uppercase tracking-widest text-f1silver font-bold">
                <span className="w-8 text-center">Pos</span>
                <span className="flex-1">Driver</span>
                <span className="w-32">Team</span>
                <span className="w-12 text-right">Pts</span>
              </div>
              {result.map((row) => {
                const t = TEAMS.find((x) => x.id === row.driver.teamId);
                return (
                  <Link
                    key={row.driver.id}
                    href={`/drivers/${row.driver.id}`}
                    className="flex items-center gap-4 px-4 py-3 border-t border-f1gray/20 bg-f1dark hover:bg-f1gray/20 transition"
                  >
                    <span className="w-8 text-center font-black">{row.pos}</span>
                    <span className="h-8 w-1.5 rounded-full" style={{ background: teamColor(row.driver.teamId) }} />
                    <span className="flex-1 min-w-0">
                      <span className="font-bold leading-tight block truncate">
                        {row.driver.flag} {row.driver.firstName} {row.driver.lastName}
                      </span>
                      <span className="text-xs text-f1silver sm:hidden">{t?.name}</span>
                    </span>
                    <span className="w-32 text-sm text-f1silver hidden sm:block truncate">{t?.name}</span>
                    <span className="w-12 text-right font-black tabular-nums">{row.points}</span>
                  </Link>
                );
              })}
            </div>
            <p className="text-xs text-f1silver mt-3">
              Finishing order is illustrative mock data led by the actual race winner.
            </p>
          </div>
        ) : (
          <div className="rounded-lg border border-f1red/40 bg-f1red/10 p-8 text-center">
            <p className="headline text-2xl text-f1red">Race weekend upcoming</p>
            <p className="text-f1silver mt-2">
              Results will appear here once the {r.name} has been run.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
