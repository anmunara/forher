const PARTNERS = [
  "PIRELLI",
  "AWS",
  "DHL",
  "ARAMCO",
  "LENOVO",
  "QATAR AIRWAYS",
  "SALESFORCE",
  "MSC",
  "CRYPTO.COM",
  "AMEX"
];

export default function PartnerStrip() {
  return (
    <section className="bg-f1black border-t border-f1gray/40">
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <p className="text-center text-[11px] font-bold uppercase tracking-[0.25em] text-f1silver mb-7">
          Our Partners
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-8 items-center">
          {PARTNERS.map((p) => (
            <div
              key={p}
              className="flex items-center justify-center h-10 text-f1silver/70 hover:text-white transition font-black tracking-tight text-lg select-none"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
