import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DRIVERS, driversByTeam, driverImage } from "@/lib/drivers";
import { TEAMS } from "@/lib/teams";
import { DRIVER_STANDINGS } from "@/lib/standings";

export function generateStaticParams() {
  return DRIVERS.map((d) => ({ id: d.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const d = DRIVERS.find((x) => x.id === params.id);
  return {
    title: d ? `${d.firstName} ${d.lastName} — F1 Driver Profile` : "F1 Driver",
    description: d ? `Profile, stats and team for ${d.firstName} ${d.lastName}.` : undefined
  };
}

function age(born: string) {
  const b = new Date(born);
  const now = new Date();
  let a = now.getFullYear() - b.getFullYear();
  const m = now.getMonth() - b.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < b.getDate())) a--;
  return a;
}

export default function DriverDetailPage({ params }: { params: { id: string } }) {
  const d = DRIVERS.find((x) => x.id === params.id);
  if (!d) notFound();

  const team = TEAMS.find((t) => t.id === d.teamId);
  const standing = DRIVER_STANDINGS.find((s) => s.driverId === d.id);
  const teammates = driversByTeam(d.teamId).filter((x) => x.id !== d.id);
  const color = team?.color ?? "#E10600";

  return (
    <div>
      {/* Hero */}
      <section className="relative z-0 overflow-hidden" style={{ background: `linear-gradient(135deg, ${color} -20%, #15151E 55%)` }}>
        <div className="absolute inset-0 opacity-10 [background:repeating-linear-gradient(90deg,transparent,transparent_38px,rgba(255,255,255,0.5)_38px,rgba(255,255,255,0.5)_40px)]" />
        <div className="relative max-w-[1400px] mx-auto px-4 py-10 grid gap-8 md:grid-cols-[1fr_360px] items-center">
          <div>
            <Link href="/drivers" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition">
              ← All drivers
            </Link>
            <div className="mt-4 flex items-end gap-4">
              <span className="text-7xl md:text-9xl font-black leading-none text-white/30">{d.number}</span>
              <span className="text-4xl">{d.flag}</span>
            </div>
            <h1 className="headline text-4xl md:text-6xl mt-2">
              <span className="block text-white/80 text-xl font-semibold uppercase tracking-wide">{d.firstName}</span>
              {d.lastName}
            </h1>
            <p className="mt-2 text-lg font-bold" style={{ color: "#fff" }}>{team?.name}</p>
          </div>
          <div className="relative h-72 md:h-80">
            <img
              src={driverImage(d)}
              alt={`${d.firstName} ${d.lastName}`}
              className="absolute inset-0 h-full w-full object-contain object-bottom drop-shadow-[0_16px_32px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
          {[
            { label: "Championship Pos", value: standing ? `P${standing.position}` : "—" },
            { label: "Points", value: standing?.points ?? 0 },
            { label: "Career Podiums", value: d.podiums },
            { label: "World Titles", value: d.championships }
          ].map((s) => (
            <div key={s.label} className="f1-edge pl-4 bg-f1dark rounded-lg p-5 border border-f1gray/30">
              <p className="text-3xl font-black">{s.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-f1silver mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Bio + team */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="headline text-2xl mb-4">Driver Details</h2>
            <dl className="divide-y divide-f1gray/30 rounded-lg border border-f1gray/30 overflow-hidden">
              {[
                ["Team", team?.name ?? "—"],
                ["Country", d.country],
                ["Car Number", `#${d.number}`],
                ["Driver Code", d.code],
                ["Age", `${age(d.born)} years`],
                ["Date of Birth", new Date(d.born).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })]
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between px-4 py-3 bg-f1dark text-sm">
                  <dt className="text-f1silver uppercase tracking-wide text-xs font-semibold">{k}</dt>
                  <dd className="font-semibold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="headline text-2xl mb-4">Teammate{teammates.length > 1 ? "s" : ""}</h2>
            <div className="space-y-3">
              {teammates.map((tm) => (
                <Link
                  key={tm.id}
                  href={`/drivers/${tm.id}`}
                  className="flex items-center gap-4 bg-f1dark rounded-lg p-3 border border-f1gray/30 hover:border-f1red transition"
                >
                  <span className="h-12 w-12 rounded-full overflow-hidden border-2" style={{ borderColor: color, background: color }}>
                    <img src={driverImage(tm)} alt="" className="h-full w-full object-cover object-top" />
                  </span>
                  <div className="flex-1">
                    <p className="font-bold leading-tight">{tm.flag} {tm.firstName} {tm.lastName}</p>
                    <p className="text-xs text-f1silver">#{tm.number} · {tm.code}</p>
                  </div>
                  <span className="text-f1silver text-sm">→</span>
                </Link>
              ))}
              <Link
                href="/teams"
                className="block text-center text-xs font-bold uppercase tracking-widest text-f1silver hover:text-white transition pt-2"
              >
                View {team?.name} team →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
