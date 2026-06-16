import Link from "next/link";

export default function UnlockedBanner() {
  return (
    <section className="relative overflow-hidden bg-f1-hero border-y border-f1gray/40">
      <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(90deg,transparent,transparent_38px,rgba(255,255,255,0.06)_38px,rgba(255,255,255,0.06)_40px)]" />
      <div className="relative max-w-[1400px] mx-auto px-4 py-12 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <span className="chip">Free to join</span>
          <h2 className="headline text-3xl md:text-5xl mt-3">
            F1 <span className="text-f1red">Unlocked</span>
          </h2>
          <p className="mt-3 text-white/70 max-w-xl">
            Get closer to the action with exclusive rewards, presales, members-only
            content and prize draws. Join the global F1 community for free.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="#"
            className="bg-f1red hover:bg-red-700 transition text-white text-sm uppercase font-bold px-6 py-3 rounded-sm tracking-wide"
          >
            Sign Up Free
          </Link>
          <Link
            href="#"
            className="border border-white/40 hover:border-white transition text-white text-sm uppercase font-bold px-6 py-3 rounded-sm tracking-wide"
          >
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
