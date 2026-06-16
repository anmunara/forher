import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TEAMS } from "@/lib/teams";
import { driversByTeam, driverImage } from "@/lib/drivers";
import { CONSTRUCTOR_STANDINGS } from "@/lib/standings";

export function generateStaticParams() {
  return TEAMS.map((t) => ({ id: t.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const t = TEAMS.find((x) => x.id === params.id);
  return {
    title: t ? `${t.fullName} — F1 Team Profile` : "F1 Team",
    description: t ? `Profile, lineup and stats for ${t.name}.` : undefined
  };
}

export default function TeamDetailPage({ params }: { params: { id: string } }) {
  const t = TEAMS.find((x) => x.id === params.id);
  if (!t) notFound();

  const lineup = driversByTeam(t.id);
  const standing = CONSTRUCTOR_STANDINGS.find((s) => s.teamId === t.id);

  return (
    <div>
      {/* Hero */}
      <section className="relative z-0 overflow-hidden" style={{ background: `linear-gradient(135deg, ${t.color} -20%, #15151E 60%)` }}>
        <div className="absolute inset-0 opacity-10 [background:repeating-linear-gradient(90deg,transparent,transparent_38px,rgba(255,255,255,0.5)_38px,rgba(255,255,255,0.5)_40px)]" />
        <div className="relative max-w-[1400px] mx-auto px-4 py-12">
          <Link href="/teams" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition">
            ← All teams
          </Link>
          <div className="mt-4 flex items-center gap-4">
            <span className="h-12 w-2 rounded-full" style={{ background: t.color }} />
            <div>
              <h1 className="headline text-4xl md:text-6xl">{t.name}</h1>
              <p className="text-white/80 mt-1">{t.fullName}</p>
            </div>
          </div>
          <span
            className="inline-block mt-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
            style={{ background: `${t.color}33`, color: "#fff" }}
          >
            {t.championships}× Constructors' Champion
          </span>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-4 mb-10">
          {[
            ["Championship Pos", standing ? `P${standing.position}` : "—"],
            ["Points", standing?.points ?? 0],
            ["Wins", standing?.wins ?? 0],
            ["Titles", t.championships]
          ].map(([k, v]) => (
            <div key={k} className="f1-edge pl-4 bg-f1dark rounded-lg p-5 border border-f1gray/30">
              <p className="text-3xl font-black">{v}</p>
              <p className="text-[10px] uppercase tracking-widest text-f1silver mt-1">{k}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Details */}
          <div>
            <h2 className="headline text-2xl mb-4">Team Details</h2>
            <dl className="divide-y divide-f1gray/30 rounded-lg border border-f1gray/30 overflow-hidden">
              {[
                ["Full Name", t.fullName],
                ["Base", t.base],
                ["Team Principal", t.chief],
                ["Power Unit", t.powerUnit],
                ["First Entry", String(t.founded)],
                ["Championships", String(t.championships)]
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 px-4 py-3 bg-f1dark text-sm">
                  <dt className="text-f1silver uppercase tracking-wide text-xs font-semibold">{k}</dt>
                  <dd className="font-semibold text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Lineup */}
          <div>
            <h2 className="headline text-2xl mb-4">2026 Lineup</h2>
            <div className="space-y-3">
              {lineup.map((d) => (
                <Link
                  key={d.id}
                  href={`/drivers/${d.id}`}
                  className="flex items-center gap-4 bg-f1dark rounded-lg p-3 border border-f1gray/30 hover:border-f1red transition"
                >
                  <span className="h-14 w-14 rounded-full overflow-hidden border-2" style={{ borderColor: t.color, background: t.color }}>
                    <img src={driverImage(d)} alt="" className="h-full w-full object-cover object-top" />
                  </span>
                  <div className="flex-1">
                    <p className="font-bold leading-tight">{d.flag} {d.firstName} {d.lastName}</p>
                    <p className="text-xs text-f1silver">#{d.number} · {d.code} · {d.country}</p>
                  </div>
                  <span className="text-f1silver text-sm">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
