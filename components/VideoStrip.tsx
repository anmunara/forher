const VIDEOS = [
  { img: "/img/news1.png", tag: "Highlights", title: "Race highlights: 2026 Barcelona-Catalunya Grand Prix", dur: "8:24" },
  { img: "/img/news2.png", tag: "Onboard", title: "Top 10 onboard moments from Barcelona", dur: "6:12" },
  { img: "/img/news3.png", tag: "Analysis", title: "Palmer: How Hamilton mastered his maiden Ferrari win", dur: "12:09" },
  { img: "/img/hero.png", tag: "Radio", title: "Radio Rewind: the best team radio from Barcelona", dur: "9:45" }
];

export default function VideoStrip() {
  return (
    <section className="bg-f1black border-t border-f1gray/40">
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        <div className="flex items-end justify-between mb-7">
          <h2 className="headline text-2xl md:text-4xl">
            Latest <span className="text-f1red">Video</span>
          </h2>
          <a href="#" className="text-xs font-bold uppercase tracking-widest text-f1silver hover:text-white transition">
            F1 TV →
          </a>
        </div>

        <div className="flex gap-5 overflow-x-auto scroll-hide pb-2 snap-x">
          {VIDEOS.map((v, i) => (
            <a
              key={i}
              href="#"
              className="group relative shrink-0 w-72 snap-start rounded-lg overflow-hidden border border-f1gray/30 hover:border-f1red transition"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={v.img}
                  alt={v.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="h-12 w-12 rounded-full bg-f1red/90 grid place-items-center text-white text-lg pl-1">
                    ▶
                  </span>
                </div>
                <span className="absolute bottom-2 right-2 bg-black/80 text-white text-[11px] font-bold px-1.5 py-0.5 rounded">
                  {v.dur}
                </span>
              </div>
              <div className="p-4 bg-f1dark">
                <span className="text-f1red text-[11px] font-bold uppercase tracking-widest">
                  {v.tag}
                </span>
                <h3 className="mt-1 font-bold text-sm leading-tight line-clamp-2">
                  {v.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
