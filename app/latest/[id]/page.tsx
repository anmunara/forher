import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { NEWS } from "@/lib/news";

export function generateStaticParams() {
  return NEWS.map((n) => ({ id: n.id }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const n = NEWS.find((x) => x.id === params.id);
  return {
    title: n ? `${n.title} — F1 News` : "F1 News",
    description: n?.excerpt
  };
}

const IMAGES = ["/img/news1.png", "/img/news2.png", "/img/news3.png"];

function fmtDate(d: string) {
  return new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const idx = NEWS.findIndex((x) => x.id === params.id);
  const n = NEWS[idx];
  if (!n) notFound();

  const img = n.heroImage ?? IMAGES[idx % IMAGES.length];
  const related = NEWS.filter((x) => x.id !== n.id).slice(0, 3);

  return (
    <article>
      {/* Hero */}
      <section className="relative z-0 h-[380px] flex items-stretch overflow-hidden">
        <img src={img} alt={n.title} className="absolute z-10 inset-0 h-full w-full object-cover" />
        <span className="absolute z-20 inset-0" style={{ background: "linear-gradient(0deg, #15151E 8%, rgba(21,21,30,0.2) 70%, rgba(21,21,30,0.5) 100%)" }} />
        <div className="relative z-30 max-w-[900px] w-full mx-auto px-4 flex flex-col justify-end pb-8">
          <Link href="/" className="text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition mb-3">
            ← Latest news
          </Link>
          <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: n.accent }}>{n.category}</span>
          <h1 className="headline text-3xl md:text-5xl mt-2">{n.title}</h1>
          <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-wide text-white/70">
            <span>{n.author}</span>
            <span className="opacity-50">·</span>
            <span>{fmtDate(n.date)}</span>
            <span className="opacity-50">·</span>
            <span>{n.readMin} min read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-[900px] mx-auto px-4 py-12">
        <p className="text-xl text-white/90 leading-relaxed font-semibold">{n.excerpt}</p>
        <div className="mt-6 space-y-5 text-f1silver leading-relaxed">
          {n.body ? (
            n.body.map((para, i) => <p key={i}>{para}</p>)
          ) : (
            <>
              <p>
                The paddock was buzzing long before the lights went out, and by the time the
                chequered flag fell the story had written itself. What unfolded over the course
                of the weekend will be remembered as one of the defining chapters of the 2026
                campaign.
              </p>
              <p>
                Strategy played its part, as it so often does. Teams gambled on tyre windows,
                track position and the ever-present threat of changing conditions — and the
                decisions made on the pit wall proved every bit as decisive as the action on
                track.
              </p>
              <blockquote className="f1-edge pl-5 py-2 text-white text-lg font-semibold italic">
                "We knew the pace was there. It was about putting the whole weekend together,
                and today we finally did."
              </blockquote>
              <p>
                Attention now turns to the next round, where the championship picture could shift
                again. With the margins this fine, every session — every lap — counts.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Related */}
      <section className="max-w-[1400px] mx-auto px-4 pb-16">
        <h2 className="headline text-2xl mb-6">Related <span className="text-f1red">stories</span></h2>
        <div className="grid gap-6 sm:grid-cols-3">
          {related.map((r, i) => (
            <Link
              key={r.id}
              href={`/latest/${r.id}`}
              className="group bg-f1dark rounded-lg overflow-hidden border border-f1gray/30 hover:border-f1red transition"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={IMAGES[i % IMAGES.length]} alt={r.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                <span className="absolute left-0 top-0 h-full w-1.5" style={{ background: r.accent }} />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-bold uppercase tracking-widest" style={{ color: r.accent }}>{r.category}</span>
                <h3 className="mt-1 font-bold leading-tight group-hover:text-f1red transition">{r.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
