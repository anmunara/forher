export default function LiveStrip() {
  return (
    <div className="bg-f1red text-white text-xs md:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3 overflow-x-auto scroll-hide">
        <span className="font-black uppercase tracking-widest">Live</span>
        <span className="opacity-80">·</span>
        <span className="whitespace-nowrap">
          Practice 1 starts Friday — countdown widget arrives in Tahap 3
        </span>
      </div>
    </div>
  );
}
