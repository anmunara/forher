import type { Metadata } from "next";
import { DRIVER_STANDINGS, CONSTRUCTOR_STANDINGS } from "@/lib/standings";
import { DRIVERS } from "@/lib/drivers";
import { TEAMS } from "@/lib/teams";

export const metadata: Metadata = {
  title: "F1 Standings 2026 — Drivers & Constructors",
  description: "Full 2026 Formula 1 World Championship standings for drivers and constructors."
};

function driver(id: string) {
  return DRIVERS.find((x) => x.id === id);
}
function team(id: string) {
  return TEAMS.find((t) => t.id === id);
}

export default function StandingsPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="f1-edge pl-5 mb-10">
        <span className="text-[11px] font-bold uppercase tracking-widest text-f1red">
          2026 Season
        </span>
        <h1 className="headline text-4xl md:text-6xl mt-1">Standings</h1>
        <p className="text-f1silver mt-2">World Championship — drivers and constructors.</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Drivers */}
        <div>
          <h2 className="headline text-2xl mb-4">Drivers</h2>
          <div className="overflow-hidden rounded-lg border border-f1gray/30">
            {DRIVER_STANDINGS.map((s) => {
              const d = driver(s.driverId);
              const t = team(d?.teamId ?? "");
              return (
                <div
                  key={s.driverId}
                  className="flex items-center gap-4 px-4 py-3 border-b border-f1gray/20 last:border-0 bg-f1dark hover:bg-f1gray/20 transition"
                >
                  <span className="w-7 text-center font-black">{s.position}</span>
                  <span
                    className="h-9 w-1.5 rounded-full"
                    style={{ background: t?.color ?? "#E10600" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold leading-tight truncate">
                      {d?.flag} {d?.firstName} {d?.lastName}
                    </p>
                    <p className="text-xs text-f1silver truncate">{t?.name}</p>
                  </div>
                  <span className="text-xs text-f1silver hidden sm:block">
                    {s.wins} wins
                  </span>
                  <span className="font-black tabular-nums w-12 text-right">
                    {s.points}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Constructors */}
        <div>
          <h2 className="headline text-2xl mb-4">Constructors</h2>
          <div className="overflow-hidden rounded-lg border border-f1gray/30">
            {CONSTRUCTOR_STANDINGS.map((s) => {
              const t = team(s.teamId);
              return (
                <div
                  key={s.teamId}
                  className="flex items-center gap-4 px-4 py-3 border-b border-f1gray/20 last:border-0 bg-f1dark hover:bg-f1gray/20 transition"
                >
                  <span className="w-7 text-center font-black">{s.position}</span>
                  <span
                    className="h-9 w-1.5 rounded-full"
                    style={{ background: t?.color ?? "#E10600" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold leading-tight truncate">{t?.name}</p>
                    <p className="text-xs text-f1silver truncate">{t?.fullName}</p>
                  </div>
                  <span className="text-xs text-f1silver hidden sm:block">
                    {s.wins} wins
                  </span>
                  <span className="font-black tabular-nums w-12 text-right">
                    {s.points}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
