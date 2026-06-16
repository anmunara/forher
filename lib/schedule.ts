export type Race = {
  round: number;
  slug: string;
  name: string;
  circuit: string;
  city: string;
  country: string;
  flag: string;
  date: string;
  time: string;
  status: "completed" | "upcoming" | "live";
  winner?: string;
};

export const SCHEDULE: Race[] = [
  { round: 1, slug: "australia", name: "Australian Grand Prix", circuit: "Albert Park Circuit", city: "Melbourne", country: "Australia", flag: "🇦🇺", date: "2026-03-08", time: "04:00 GMT", status: "completed", winner: "Russell" },
  { round: 2, slug: "china", name: "Chinese Grand Prix", circuit: "Shanghai International Circuit", city: "Shanghai", country: "China", flag: "🇨🇳", date: "2026-03-15", time: "07:00 GMT", status: "completed", winner: "Antonelli" },
  { round: 3, slug: "japan", name: "Japanese Grand Prix", circuit: "Suzuka International Racing Course", city: "Suzuka", country: "Japan", flag: "🇯🇵", date: "2026-03-29", time: "05:00 GMT", status: "completed", winner: "Antonelli" },
  { round: 4, slug: "bahrain", name: "Bahrain Grand Prix", circuit: "Bahrain International Circuit", city: "Sakhir", country: "Bahrain", flag: "🇧🇭", date: "2026-04-12", time: "15:00 GMT", status: "completed", winner: "Verstappen" },
  { round: 5, slug: "saudi-arabia", name: "Saudi Arabian Grand Prix", circuit: "Jeddah Corniche Circuit", city: "Jeddah", country: "Saudi Arabia", flag: "🇸🇦", date: "2026-04-19", time: "17:00 GMT", status: "completed", winner: "Norris" },
  { round: 6, slug: "miami", name: "Miami Grand Prix", circuit: "Miami International Autodrome", city: "Miami", country: "United States", flag: "🇺🇸", date: "2026-05-03", time: "19:30 GMT", status: "completed", winner: "Antonelli" },
  { round: 7, slug: "canada", name: "Canadian Grand Prix", circuit: "Circuit Gilles Villeneuve", city: "Montreal", country: "Canada", flag: "🇨🇦", date: "2026-05-24", time: "18:00 GMT", status: "completed", winner: "Antonelli" },
  { round: 8, slug: "monaco", name: "Monaco Grand Prix", circuit: "Circuit de Monaco", city: "Monte Carlo", country: "Monaco", flag: "🇲🇨", date: "2026-06-07", time: "13:00 GMT", status: "completed", winner: "Antonelli" },
  { round: 9, slug: "spain", name: "Barcelona-Catalunya Grand Prix", circuit: "Circuit de Barcelona-Catalunya", city: "Montmelo", country: "Spain", flag: "🇪🇸", date: "2026-06-14", time: "13:00 GMT", status: "completed", winner: "Hamilton" },
  { round: 10, slug: "austria", name: "Austrian Grand Prix", circuit: "Red Bull Ring", city: "Spielberg", country: "Austria", flag: "🇦🇹", date: "2026-06-28", time: "13:00 GMT", status: "upcoming" },
  { round: 11, slug: "britain", name: "British Grand Prix", circuit: "Silverstone Circuit", city: "Silverstone", country: "United Kingdom", flag: "🇬🇧", date: "2026-07-05", time: "14:00 GMT", status: "upcoming" },
  { round: 12, slug: "belgium", name: "Belgian Grand Prix", circuit: "Circuit de Spa-Francorchamps", city: "Stavelot", country: "Belgium", flag: "🇧🇪", date: "2026-07-19", time: "13:00 GMT", status: "upcoming" },
  { round: 13, slug: "hungary", name: "Hungarian Grand Prix", circuit: "Hungaroring", city: "Budapest", country: "Hungary", flag: "🇭🇺", date: "2026-07-26", time: "13:00 GMT", status: "upcoming" },
  { round: 14, slug: "netherlands", name: "Dutch Grand Prix", circuit: "Circuit Zandvoort", city: "Zandvoort", country: "Netherlands", flag: "🇳🇱", date: "2026-08-23", time: "13:00 GMT", status: "upcoming" },
  { round: 15, slug: "italy", name: "Italian Grand Prix", circuit: "Autodromo Nazionale Monza", city: "Monza", country: "Italy", flag: "🇮🇹", date: "2026-09-06", time: "13:00 GMT", status: "upcoming" },
  { round: 16, slug: "madrid", name: "Spanish Grand Prix", circuit: "Madring", city: "Madrid", country: "Spain", flag: "🇪🇸", date: "2026-09-13", time: "13:00 GMT", status: "upcoming" },
  { round: 17, slug: "azerbaijan", name: "Azerbaijan Grand Prix", circuit: "Baku City Circuit", city: "Baku", country: "Azerbaijan", flag: "🇦🇿", date: "2026-09-27", time: "11:00 GMT", status: "upcoming" },
  { round: 18, slug: "singapore", name: "Singapore Grand Prix", circuit: "Marina Bay Street Circuit", city: "Singapore", country: "Singapore", flag: "🇸🇬", date: "2026-10-11", time: "12:00 GMT", status: "upcoming" },
  { round: 19, slug: "usa", name: "United States Grand Prix", circuit: "Circuit of the Americas", city: "Austin", country: "United States", flag: "🇺🇸", date: "2026-10-25", time: "19:00 GMT", status: "upcoming" },
  { round: 20, slug: "mexico", name: "Mexico City Grand Prix", circuit: "Autodromo Hermanos Rodriguez", city: "Mexico City", country: "Mexico", flag: "🇲🇽", date: "2026-11-01", time: "20:00 GMT", status: "upcoming" },
  { round: 21, slug: "brazil", name: "Sao Paulo Grand Prix", circuit: "Autodromo Jose Carlos Pace", city: "Sao Paulo", country: "Brazil", flag: "🇧🇷", date: "2026-11-08", time: "17:00 GMT", status: "upcoming" },
  { round: 22, slug: "las-vegas", name: "Las Vegas Grand Prix", circuit: "Las Vegas Strip Circuit", city: "Las Vegas", country: "United States", flag: "🇺🇸", date: "2026-11-21", time: "06:00 GMT", status: "upcoming" },
  { round: 23, slug: "qatar", name: "Qatar Grand Prix", circuit: "Lusail International Circuit", city: "Lusail", country: "Qatar", flag: "🇶🇦", date: "2026-11-29", time: "16:00 GMT", status: "upcoming" },
  { round: 24, slug: "abu-dhabi", name: "Abu Dhabi Grand Prix", circuit: "Yas Marina Circuit", city: "Abu Dhabi", country: "UAE", flag: "🇦🇪", date: "2026-12-06", time: "13:00 GMT", status: "upcoming" }
];

export function nextRace(now: Date = new Date()): Race | undefined {
  return SCHEDULE.find((r) => new Date(r.date) >= now) ?? SCHEDULE[SCHEDULE.length - 1];
}

export function lastCompleted(): Race | undefined {
  const completed = SCHEDULE.filter((r) => r.status === "completed");
  return completed[completed.length - 1];
}
