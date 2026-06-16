import Link from "next/link";
import { DRIVER_STANDINGS, CONSTRUCTOR_STANDINGS } from "@/lib/standings";
import { DRIVERS } from "@/lib/drivers";
import { TEAMS } from "@/lib/teams";

function driverName(id: string) {
  const d = DRIVERS.find((x) => x.id === id);
  return d ? `${d.lastName}` : id;
}
function teamColor(id: string) {
  return TEAMS.find((t) => t.id === id)?.color ?? "#E10600";
}
function teamName(id: string) {
  return TEAMS.find((t) => t.id === id)?.name ?? id;
}

export default function StandingsWidget() {
  const drivers = DRIVER_STANDINGS.slice(0, 5);
  const teams = CONSTRUCTOR_STANDINGS.slice(0, 5);

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-12 grid gap-8 lg:grid-cols-2">
      {/* Drivers */}
      <div>
        <div className="flex items-end justify-between mb-5">
          <h2 className="headline text-2xl md:text-3xl">Drivers</h2>
          <Link href="/standings" className="text-xs font-bold uppercase tracking-widest text-f1silver hover:text-white transition">
            Full table →
          </Link>
        </div>
        <div className="space-y-2">
          {drivers.map((s) => {
            const d = DRIVERS.find((x) => x.id === s.driverId);
            return (
              <div
                key={s.driverId}
                className="flex items-center gap-4 bg-f1dark rounded-md p-3 border border-f1gray/30 hover:border-f1red transition"
              >
                <span className="w-6 text-center font-black text-lg">{s.position}</span>
                <span
                  className="h-8 w-1.5 rounded-full"
                  style={{ background: teamColor(d?.teamId ?? "") }}
                />
                <div className="flex-1">
                  <p className="font-bold leading-tight">
                    {d?.flag} {driverName(s.driverId)}
                  </p>
                  <p className="text-xs text-f1silver">{teamName(d?.teamId ?? "")}</p>
                </div>
                <span className="font-black tabular-nums">{s.points}</span>
                <span className="text-[10px] text-f1silver uppercase">pts</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Constructors */}
      <div>
        <div className="flex items-end justify-between mb-5">
          <h2 className="headline text-2xl md:text-3xl">Constructors</h2>
          <Link href="/standings" className="text-xs font-bold uppercase tracking-widest text-f1silver hover:text-white transition">
            Full table →
          </Link>
        </div>
        <div className="space-y-2">
          {teams.map((s) => (
            <div
              key={s.teamId}
              className="flex items-center gap-4 bg-f1dark rounded-md p-3 border border-f1gray/30 hover:border-f1red transition"
            >
              <span className="w-6 text-center font-black text-lg">{s.position}</span>
              <span
                className="h-8 w-1.5 rounded-full"
                style={{ background: teamColor(s.teamId) }}
              />
              <div className="flex-1">
                <p className="font-bold leading-tight">{teamName(s.teamId)}</p>
                <p className="text-xs text-f1silver">{s.wins} wins</p>
              </div>
              <span className="font-black tabular-nums">{s.points}</span>
              <span className="text-[10px] text-f1silver uppercase">pts</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
