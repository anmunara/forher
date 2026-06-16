import Link from "next/link";

const COLS = [
  { title: "Latest", links: ["News", "Video", "Race Results", "Live Timing"] },
  { title: "Season", links: ["Schedule", "Standings", "Drivers", "Teams"] },
  { title: "F1 Experiences", links: ["Tickets", "Hospitality", "Paddock Club", "Travel"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] }
];

const SOCIAL = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/f1/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1280px-Instagram_logo_2016.svg.png"
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/f1",
    logo: "https://static.vecteezy.com/system/resources/previews/006/892/625/non_2x/discord-logo-icon-editorial-free-vector.jpg"
  }
];

export default function Footer() {
  return (
    <footer className="bg-black mt-24">
      {/* Social row */}
      <div className="border-y border-f1gray/40">
        <div className="max-w-[1400px] mx-auto px-4 py-5 flex flex-wrap items-center justify-between gap-4">
          <span className="font-black italic text-xl tracking-tighter">
            FOLLOW F1
          </span>
          <div className="flex gap-3">
            {SOCIAL.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="h-10 w-10 grid place-items-center rounded-full bg-white overflow-hidden border border-f1gray/60 hover:scale-110 transition"
              >
                <img
                  src={s.logo}
                  alt={s.name}
                  className="h-6 w-6 object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="max-w-[1400px] mx-auto px-4 py-12 grid gap-10 grid-cols-2 md:grid-cols-4">
        {COLS.map((col) => (
          <div key={col.title}>
            <h4 className="font-bold uppercase text-sm tracking-widest mb-4 text-white">
              {col.title}
            </h4>
            <ul className="space-y-2.5 text-f1silver text-sm">
              {col.links.map((l) => (
                <li key={l}>
                  <Link href="#" className="hover:text-white transition">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Legal */}
      <div className="border-t border-f1gray/40">
        <div className="max-w-[1400px] mx-auto px-4 py-5 flex flex-col md:flex-row gap-3 justify-between text-xs text-f1silver">
          <div className="flex items-center gap-2">
            <span className="font-black italic tracking-tighter text-white">F1</span>
            <span>© 2026 Formula One World Championship Limited — fan recreation.</span>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
