import Link from "next/link";
import { lastCompleted } from "@/lib/schedule";

export default function HeroFeature() {
  const last = lastCompleted();

  return (
    <section className="relative bg-f1black">
      <div className="max-w-[1400px] mx-auto px-4 pt-6 pb-10 grid gap-5 lg:grid-cols-3">
        {/* Main feature */}
        <Link
          href="/latest/silver-red-legend"
          className="lg:col-span-2 group relative rounded-lg overflow-hidden min-h-[340px] md:min-h-[460px]"
          id="hero-feature-main"
        >
          <img
            src="/img/hero-feature.jpg"
            alt="Susie Wolff — the woman changing F1"
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute left-0 top-6 bg-f1red text-white text-[11px] font-bold uppercase tracking-widest px-4 py-1.5">
            Feature
          </div>
          <div className="absolute bottom-0 p-6 md:p-8">
            <span className="chip">Championship</span>
            <h1 className="headline text-3xl md:text-5xl mt-3 max-w-2xl text-white">
              A legend forged in silver resumes in red
            </h1>
            <p className="mt-3 text-white/70 max-w-xl hidden md:block">
              From a record-breaking Mercedes era to a new chapter in scarlet —
              inside Lewis Hamilton's reinvention at Ferrari.
            </p>
          </div>
        </Link>

        {/* Side rail */}
        <div className="flex flex-col gap-5">
          <Link
            href="/latest/susie-wolff-feature"
            className="group relative rounded-lg overflow-hidden flex-1 min-h-[160px]"
          >
            <img
              src="/img/hero-side1.jpeg"
              alt="Driver focus"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <span className="text-f1red text-[11px] font-bold uppercase tracking-widest">
                Driver focus
              </span>
              <h2 className="font-bold text-lg leading-tight text-white mt-1">
                Susie Wolff: sosok perempuan inspiratif
              </h2>
            </div>
          </Link>

          <Link
            href="/latest/what-is-drs"
            className="group relative rounded-lg overflow-hidden flex-1 min-h-[160px]"
          >
            <img
              src="/img/hero-side2.jpeg"
              alt="Latest winner"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            <div className="absolute bottom-0 p-5">
              <span className="text-f1red text-[11px] font-bold uppercase tracking-widest">
                Race report
              </span>
              <h2 className="font-bold text-lg leading-tight text-white mt-1">
                Apa itu DRS atau Drag Reduction System
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
