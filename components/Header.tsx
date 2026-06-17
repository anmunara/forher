"use client";

import Link from "next/link";
import { useState } from "react";
import { SCHEDULE, lastCompleted, nextRace } from "@/lib/schedule";
import { DRIVERS, driverImage } from "@/lib/drivers";
import { TEAMS } from "@/lib/teams";
import { NEWS } from "@/lib/news";

type MenuKey = "schedule" | "results" | "news" | "drivers" | "teams";

const NAV: { key: MenuKey; label: string; href: string }[] = [
  { key: "schedule", label: "Schedule", href: "/schedule" },
  { key: "results", label: "Results", href: "/standings" },
  { key: "news", label: "Articles", href: "/" },
  { key: "drivers", label: "Drivers", href: "/drivers" },
  { key: "teams", label: "Teams", href: "/teams" }
];

const UTILITY = [
  { label: "Authentics", href: "#" },
  { label: "Store", href: "#" },
  { label: "Tickets", href: "#" },
  { label: "Hospitality", href: "#" },
  { label: "Experiences", href: "#" },
  { label: "Arcade", href: "#" }
];

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "2-digit", month: "short" }).toUpperCase();
}
function teamColor(id: string) {
  return TEAMS.find((t) => t.id === id)?.color ?? "#E10600";
}
function teamName(id: string) {
  return TEAMS.find((t) => t.id === id)?.name ?? id;
}

function Chevron() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition group-hover:rotate-180">
      <path fill="currentColor" d="m18 9.4-6 6-6-6L7.4 8l4.6 4.6L16.6 8z" />
    </svg>
  );
}

function F1Logo() {
  return (
    <Link href="/" className="flex items-center" id="header-logo">
      <img
        src="/img/logo.png"
        alt="Formula for her"
        className="h-11 w-auto object-contain mix-blend-screen"
      />
    </Link>
  );
}

function RaceCard({
  slug,
  round,
  name,
  date,
  label,
  winner
}: {
  slug: string;
  round: number;
  name: string;
  date: string;
  label: string;
  winner?: string;
}) {
  const img = ["spain", "austria", "britain"].includes(slug)
    ? `/img/circuits/${slug}.png`
    : "/img/hero.png";
  return (
    <Link
      href="/schedule"
      className="group/card relative z-0 flex h-[300px] w-full items-stretch overflow-hidden rounded-lg bg-f1dark border border-f1gray/30 hover:border-f1red transition"
    >
      <img
        src={img}
        alt={name}
        className="absolute z-10 inset-0 h-full w-full object-cover transition duration-500 group-hover/card:scale-110"
      />
      <span className="absolute z-20 inset-x-0 top-0 h-2/3" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0) 0%, #000000 100%)" }} />
      <span className="absolute z-20 inset-x-0 bottom-0 h-1/2" style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, #000000 100%)" }} />
      <span className="relative z-30 flex w-full flex-col p-5 text-white">
        <span className="text-[11px] font-bold uppercase tracking-widest">Round {round}</span>
        <span className="mt-auto text-2xl font-black leading-tight group-hover/card:underline">{name}</span>
        <span className="text-sm font-semibold text-white/90">{date}</span>
        {winner && (
          <span className="mt-1 text-xs text-white/80">🏆 <span className="font-semibold text-white">{winner}</span></span>
        )}
      </span>
    </Link>
  );
}

function ScheduleMenu() {
  const prev = lastCompleted();
  const next = nextRace();
  const nextIdx = next ? SCHEDULE.findIndex((r) => r.slug === next.slug) : 0;
  const upcoming = SCHEDULE.slice(nextIdx + 1, nextIdx + 3);
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {prev && (
        <div className="flex flex-col">
          <p className="font-black text-lg mb-3">Previous</p>
          <RaceCard slug={prev.slug} round={prev.round} name={prev.name} date={fmtDate(prev.date)} label="Completed" winner={prev.winner} />
        </div>
      )}
      {next && (
        <div className="flex flex-col">
          <p className="font-black text-lg mb-3">Next</p>
          <RaceCard slug={next.slug} round={next.round} name={next.name} date={fmtDate(next.date)} label="Up next" winner={next.winner} />
        </div>
      )}
      {upcoming.map((r) => (
        <div key={r.slug} className="flex flex-col">
          <p className="font-black text-lg mb-3">Upcoming</p>
          <RaceCard slug={r.slug} round={r.round} name={r.name} date={fmtDate(r.date)} label="Upcoming" winner={r.winner} />
        </div>
      ))}
    </div>
  );
}

function Pill({ children, href }: { children: React.ReactNode; href: string }) {
  return (
    <Link href={href} className="inline-flex items-center rounded-full border border-f1gray/50 bg-f1dark px-4 py-2 text-xs font-bold hover:border-f1red hover:bg-f1red/10 transition">
      {children}
    </Link>
  );
}

function ResultsMenu() {
  return (
    <div className="flex flex-wrap gap-3">
      <Pill href="/standings">2026 Season</Pill>
      <Pill href="/standings">Driver Standings</Pill>
      <Pill href="/standings">Team Standings</Pill>
      <Pill href="/schedule">Race Results</Pill>
      <Pill href="/standings">Archive 1950-2025</Pill>
    </div>
  );
}

function NewsMenu() {
  const articles = NEWS.slice(0, 4);
  const videos = NEWS.slice(0, 2);
  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-6">
        <Pill href="/">What is F1?</Pill>
        <Pill href="/">What is F1 TV?</Pill>
        <Pill href="/">F1 Glossary</Pill>
        <Pill href="/">Get involved</Pill>
        <Pill href="/">2026 Regulations</Pill>
      </div>
      <div className="h-px bg-f1gray/20 mb-6" />
      <div className="grid gap-8 lg:grid-cols-[1fr_1px_524px]">
        {/* News column */}
        <div>
          <p className="font-black text-lg mb-4">News</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {articles.map((n) => (
              <Link key={n.id} href="/" className="flex gap-3 group/news">
                <span className="h-14 w-20 shrink-0 rounded overflow-hidden">
                  <img src="/img/news1.png" alt="" className="h-full w-full object-cover" />
                </span>
                <span className="min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: n.accent }}>{n.category}</span>
                  <span className="block text-sm font-semibold leading-tight group-hover/news:underline">{n.title}</span>
                </span>
              </Link>
            ))}
          </div>
          <Link href="/" className="mt-5 inline-flex items-center rounded-full border border-f1gray/50 px-4 py-2 text-xs font-bold hover:border-f1red hover:bg-f1red/10 transition">
            More news
          </Link>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px bg-f1gray/20" />

        {/* Videos column */}
        <div>
          <p className="font-black text-lg mb-4">Videos</p>
          <div className="grid gap-4 grid-cols-2">
            {videos.map((v, i) => (
              <Link key={v.id} href="/" className="group/vid">
                <span className="relative block aspect-video rounded overflow-hidden">
                  <img src={i === 0 ? "/img/news2.png" : "/img/news3.png"} alt="" className="h-full w-full object-cover transition group-hover/vid:scale-105" />
                  <span className="absolute inset-0 grid place-items-center">
                    <span className="h-8 w-8 rounded-full bg-f1red/90 grid place-items-center text-white text-xs pl-0.5">▶</span>
                  </span>
                </span>
                <span className="block mt-2 text-sm font-semibold leading-tight group-hover/vid:underline">{v.title}</span>
              </Link>
            ))}
          </div>
          <Link href="/" className="mt-5 inline-flex items-center rounded-full border border-f1gray/50 px-4 py-2 text-xs font-bold hover:border-f1red hover:bg-f1red/10 transition">
            More videos
          </Link>
        </div>
      </div>
    </div>
  );
}

function DriversMenu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-1">
      {[...DRIVERS].sort((a, b) => a.lastName.localeCompare(b.lastName)).map((d) => (
        <Link
          key={d.id}
          href="/drivers"
          className="flex items-center gap-3 p-2 rounded hover:bg-white/5 transition"
          style={{ borderLeft: `3px solid ${teamColor(d.teamId)}` }}
        >
          <span
            className="h-10 w-10 shrink-0 rounded-full overflow-hidden border-2"
            style={{ borderColor: teamColor(d.teamId), background: teamColor(d.teamId) }}
          >
            <img src={driverImage(d)} alt={d.lastName} className="h-full w-full object-cover object-top" />
          </span>
          <span className="text-sm">
            <span className="text-f1silver">{d.firstName} </span>
            <span className="font-bold uppercase">{d.lastName}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function TeamsMenu() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
      {TEAMS.map((t) => (
        <Link key={t.id} href="/teams" className="group/team rounded-lg border border-f1gray/30 bg-f1dark overflow-hidden hover:border-f1red transition">
          <span className="block h-1.5 w-full" style={{ background: t.color }} />
          <span className="flex items-center gap-2 p-3">
            <img src={`/img/helmets/${t.id}.png`} alt="" className="h-9 w-9 object-contain" />
            <span className="text-sm font-bold leading-tight">{teamName(t.id)}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

function MegaContent({ menu }: { menu: MenuKey }) {
  if (menu === "schedule") return <ScheduleMenu />;
  if (menu === "results") return <ResultsMenu />;
  if (menu === "news") return <NewsMenu />;
  if (menu === "drivers") return <DriversMenu />;
  return <TeamsMenu />;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50">

      {/* Main nav */}
      <div className="bg-f1black/95 backdrop-blur border-b border-f1gray/40">
        <div className="max-w-[1400px] mx-auto px-4 h-16 flex items-center gap-8">
          <F1Logo />

          <nav className="hidden lg:flex flex-1 items-stretch h-full">
            {NAV.map((n) => (
              <div key={n.key} className="group static flex items-stretch">
                <div className="relative flex items-stretch border-b-[3px] border-transparent hover:border-f1red transition">
                  <Link href={n.href} className="flex items-center gap-1 px-3 text-[15px] font-semibold text-white/90 hover:text-white whitespace-nowrap">
                    {n.label}
                    <span className="text-f1silver"><Chevron /></span>
                  </Link>
                </div>
                {/* Mega dropdown */}
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition absolute left-0 right-0 top-full bg-f1black border-t border-f1gray/40 shadow-2xl">
                  <div className="max-w-[1400px] mx-auto px-4 py-8">
                    <MegaContent menu={n.key} />
                  </div>
                </div>
              </div>
            ))}
          </nav>

          <div className="flex-1 lg:flex-none" />

          <button
            id="search-toggle"
            aria-label="Search"
            onClick={() => setSearch((v) => !v)}
            className="hidden lg:inline-flex items-center justify-center h-9 w-9 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M11 4a7 7 0 1 0 4.2 12.6l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="currentColor" />
            </svg>
          </button>

          <button className="hidden sm:inline-flex bg-f1red hover:bg-pink-600 transition text-white text-xs uppercase font-bold px-5 py-2.5 rounded-sm tracking-wide">
            Formula For Her
          </button>

          {/* Mobile toggle */}
          <button
            id="mobile-menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex flex-col gap-[5px] p-2"
          >
            <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>
      </div>

      {/* Search overlay */}
      {search && (
        <div className="bg-f1black border-b border-f1gray/40">
          <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center gap-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-f1silver shrink-0">
              <path d="M11 4a7 7 0 1 0 4.2 12.6l4.1 4.1 1.4-1.4-4.1-4.1A7 7 0 0 0 11 4Zm0 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="currentColor" />
            </svg>
            <input
              autoFocus
              type="text"
              placeholder="Search drivers, teams, races…"
              className="flex-1 bg-transparent text-white placeholder:text-f1silver/70 text-lg outline-none"
            />
            <button onClick={() => setSearch(false)} className="text-f1silver hover:text-white transition text-sm font-bold uppercase tracking-widest">
              Esc
            </button>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden bg-f1black border-b border-f1gray/40">
          <ul className="max-w-[1400px] mx-auto px-4 py-3 flex flex-col">
            {NAV.map((n) => (
              <li key={n.key} className="f1-edge pl-4 py-3 border-b border-f1gray/30">
                <Link href={n.href} onClick={() => setOpen(false)} className="font-bold uppercase tracking-wide text-white/90">
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-wrap gap-4 pt-4 text-xs uppercase font-semibold tracking-widest text-f1silver">
              {UTILITY.map((u) => (
                <a key={u.label} href={u.href}>{u.label}</a>
              ))}
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
