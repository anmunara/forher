function StoreBadge({ store }: { store: "apple" | "google" }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-lg border border-f1gray/60 bg-black px-4 py-2.5 hover:border-white transition"
    >
      <span className="text-2xl">{store === "apple" ? "" : "▶"}</span>
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-widest text-f1silver">
          {store === "apple" ? "Download on the" : "Get it on"}
        </span>
        <span className="block text-sm font-bold">
          {store === "apple" ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}

export default function AppDownload() {
  return (
    <section className="bg-f1dark border-t border-f1gray/40">
      <div className="max-w-[1400px] mx-auto px-4 py-12 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h2 className="headline text-2xl md:text-4xl">
            Get the <span className="text-f1red">official F1 app</span>
          </h2>
          <p className="mt-2 text-f1silver max-w-xl">
            Live timing, breaking news, push alerts and exclusive video — the
            whole world of Formula 1 in your pocket.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <StoreBadge store="apple" />
          <StoreBadge store="google" />
        </div>
      </div>
    </section>
  );
}
