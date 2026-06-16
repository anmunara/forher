export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-f1-hero">
      <div className="absolute inset-0 opacity-20 [background:repeating-linear-gradient(90deg,transparent,transparent_38px,rgba(255,255,255,0.06)_38px,rgba(255,255,255,0.06)_40px)]" />
      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
        <span className="chip">Next race · Round 09</span>
        <h1 className="headline text-5xl md:text-7xl mt-4 max-w-3xl">
          Welcome to <span className="text-f1red">the grid</span>.
        </h1>
        <p className="mt-6 text-f1silver max-w-xl text-lg">
          Lights out and away we go. Live standings, schedule and the
          weekend recap — staged and ready to plug into real data in
          Tahap 2.
        </p>
        <div className="mt-8 flex gap-3">
          <a
            href="/schedule"
            className="bg-f1red hover:bg-red-700 transition px-6 py-3 font-bold uppercase text-sm rounded-sm"
          >
            View schedule
          </a>
          <a
            href="/standings"
            className="border border-white/40 hover:border-white px-6 py-3 font-bold uppercase text-sm rounded-sm"
          >
            Standings
          </a>
        </div>
      </div>
    </section>
  );
}
