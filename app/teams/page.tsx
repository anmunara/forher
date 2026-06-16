import type { Metadata } from "next";
import Link from "next/link";
import { TEAMS } from "@/lib/teams";
import { driversByTeam } from "@/lib/drivers";

export const metadata: Metadata = {
  title: "F1 Teams 2026 — Constructors",
  description: "All 10 Formula 1 constructors for 2026: bases, power units, team principals and driver lineups."
};

export default function TeamsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="f1-edge pl-5 mb-10">
        <span className="text-[11px] font-bold uppercase tracking-widest text-f1red">
          2026 Season
        </span>
        <h1 className="headline text-4xl md:text-6xl mt-1">F1 Teams</h1>
        <p className="text-f1silver mt-2">10 constructors, one championship.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {TEAMS.map((t) => {
          const lineup = driversByTeam(t.id);
          return (
            <Link
              key={t.id}
              href={`/teams/${t.id}`}
              className="group bg-f1dark rounded-lg overflow-hidden border border-f1gray/30 hover:border-f1red transition-all duration-300"
            >
              <div
                className="h-2 w-full"
                style={{ background: t.color }}
              />
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="font-black text-2xl leading-tight">{t.name}</h2>
                    <p className="text-sm text-f1silver">{t.fullName}</p>
                  </div>
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded"
                    style={{ background: `${t.color}22`, color: t.color }}
                  >
                    {t.championships}× WCC
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-f1silver">Base</p>
                    <p className="font-semibold">{t.base}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-f1silver">Power Unit</p>
                    <p className="font-semibold">{t.powerUnit}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-f1silver">Team Chief</p>
                    <p className="font-semibold">{t.chief}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-f1silver">Founded</p>
                    <p className="font-semibold">{t.founded}</p>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-f1gray/30">
                  <p className="text-[10px] uppercase tracking-widest text-f1silver mb-2">
                    Lineup
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {lineup.map((d) => (
                      <span
                        key={d.id}
                        className="inline-flex items-center gap-2 bg-f1black rounded-full px-3 py-1 text-sm font-semibold border border-f1gray/40"
                      >
                        <span className="text-f1silver">{d.number}</span>
                        {d.flag} {d.lastName}
                      </span>
                    ))}
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
