import Link from "next/link";
import { NEWS } from "@/lib/news";

const IMAGES = ["/img/news1.png", "/img/news2.png", "/img/news3.png"];

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short"
  });
}

export default function NewsGrid() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 py-12">
      <div className="flex items-end justify-between mb-7">
        <h2 className="headline text-2xl md:text-4xl">
          Latest <span className="text-f1red">Articles</span>
        </h2>
        <Link
          href="/"
          className="text-xs font-bold uppercase tracking-widest text-f1silver hover:text-white transition"
        >
          View all →
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {NEWS.map((n, i) => (
          <Link
            key={n.id}
            href={`/latest/${n.id}`}
            className="group bg-f1dark rounded-lg overflow-hidden border border-f1gray/30 hover:-translate-y-1 hover:border-f1red transition-all duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <img
                src={IMAGES[i % IMAGES.length]}
                alt={n.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <span
                className="absolute left-0 top-0 h-full w-1.5"
                style={{ background: n.accent }}
              />
            </div>
            <div className="p-5">
              <span
                className="text-[11px] font-bold uppercase tracking-widest"
                style={{ color: n.accent }}
              >
                {n.category}
              </span>
              <h3 className="mt-2 font-bold text-lg leading-tight group-hover:text-f1red transition">
                {n.title}
              </h3>
              <p className="text-sm text-f1silver mt-2 line-clamp-2">
                {n.excerpt}
              </p>
              <div className="mt-4 flex items-center gap-3 text-xs text-f1silver uppercase tracking-wide">
                <span>{n.author}</span>
                <span className="opacity-50">·</span>
                <span>{fmtDate(n.date)}</span>
                <span className="opacity-50">·</span>
                <span>{n.readMin} min</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
