export type Driver = {
  id: string;
  number: number;
  firstName: string;
  lastName: string;
  code: string;
  country: string;
  flag: string;
  teamId: string;
  podiums: number;
  championships: number;
  born: string;
};

export const DRIVERS: Driver[] = [
  { id: "verstappen", number: 1, firstName: "Max", lastName: "Verstappen", code: "VER", country: "Netherlands", flag: "🇳🇱", teamId: "red-bull", podiums: 112, championships: 4, born: "1997-09-30" },
  { id: "hadjar", number: 6, firstName: "Isack", lastName: "Hadjar", code: "HAD", country: "France", flag: "🇫🇷", teamId: "red-bull", podiums: 1, championships: 0, born: "2004-09-28" },
  { id: "norris", number: 4, firstName: "Lando", lastName: "Norris", code: "NOR", country: "United Kingdom", flag: "🇬🇧", teamId: "mclaren", podiums: 28, championships: 0, born: "1999-11-13" },
  { id: "piastri", number: 81, firstName: "Oscar", lastName: "Piastri", code: "PIA", country: "Australia", flag: "🇦🇺", teamId: "mclaren", podiums: 12, championships: 0, born: "2001-04-06" },
  { id: "leclerc", number: 16, firstName: "Charles", lastName: "Leclerc", code: "LEC", country: "Monaco", flag: "🇲🇨", teamId: "ferrari", podiums: 43, championships: 0, born: "1997-10-16" },
  { id: "hamilton", number: 44, firstName: "Lewis", lastName: "Hamilton", code: "HAM", country: "United Kingdom", flag: "🇬🇧", teamId: "ferrari", podiums: 202, championships: 7, born: "1985-01-07" },
  { id: "russell", number: 63, firstName: "George", lastName: "Russell", code: "RUS", country: "United Kingdom", flag: "🇬🇧", teamId: "mercedes", podiums: 16, championships: 0, born: "1998-02-15" },
  { id: "antonelli", number: 12, firstName: "Andrea Kimi", lastName: "Antonelli", code: "ANT", country: "Italy", flag: "🇮🇹", teamId: "mercedes", podiums: 1, championships: 0, born: "2006-08-25" },
  { id: "alonso", number: 14, firstName: "Fernando", lastName: "Alonso", code: "ALO", country: "Spain", flag: "🇪🇸", teamId: "aston-martin", podiums: 106, championships: 2, born: "1981-07-29" },
  { id: "stroll", number: 18, firstName: "Lance", lastName: "Stroll", code: "STR", country: "Canada", flag: "🇨🇦", teamId: "aston-martin", podiums: 3, championships: 0, born: "1998-10-29" },
  { id: "gasly", number: 10, firstName: "Pierre", lastName: "Gasly", code: "GAS", country: "France", flag: "🇫🇷", teamId: "alpine", podiums: 4, championships: 0, born: "1996-02-07" },
  { id: "colapinto", number: 43, firstName: "Franco", lastName: "Colapinto", code: "COL", country: "Argentina", flag: "🇦🇷", teamId: "alpine", podiums: 0, championships: 0, born: "2003-05-27" },
  { id: "albon", number: 23, firstName: "Alex", lastName: "Albon", code: "ALB", country: "Thailand", flag: "🇹🇭", teamId: "williams", podiums: 2, championships: 0, born: "1996-03-23" },
  { id: "sainz", number: 55, firstName: "Carlos", lastName: "Sainz", code: "SAI", country: "Spain", flag: "🇪🇸", teamId: "williams", podiums: 27, championships: 0, born: "1994-09-01" },
  { id: "lawson", number: 30, firstName: "Liam", lastName: "Lawson", code: "LAW", country: "New Zealand", flag: "🇳🇿", teamId: "rb", podiums: 0, championships: 0, born: "2002-02-11" },
  { id: "lindblad", number: 8, firstName: "Arvid", lastName: "Lindblad", code: "LIN", country: "United Kingdom", flag: "🇬🇧", teamId: "rb", podiums: 0, championships: 0, born: "2007-09-08" },
  { id: "hulkenberg", number: 27, firstName: "Nico", lastName: "Hulkenberg", code: "HUL", country: "Germany", flag: "🇩🇪", teamId: "kick-sauber", podiums: 1, championships: 0, born: "1987-08-19" },
  { id: "bortoleto", number: 5, firstName: "Gabriel", lastName: "Bortoleto", code: "BOR", country: "Brazil", flag: "🇧🇷", teamId: "kick-sauber", podiums: 0, championships: 0, born: "2004-10-14" },
  { id: "ocon", number: 31, firstName: "Esteban", lastName: "Ocon", code: "OCO", country: "France", flag: "🇫🇷", teamId: "haas", podiums: 3, championships: 0, born: "1996-09-17" },
  { id: "bearman", number: 87, firstName: "Oliver", lastName: "Bearman", code: "BEA", country: "United Kingdom", flag: "🇬🇧", teamId: "haas", podiums: 0, championships: 0, born: "2005-05-08" },
  { id: "bottas", number: 77, firstName: "Valtteri", lastName: "Bottas", code: "BOT", country: "Finland", flag: "🇫🇮", teamId: "cadillac", podiums: 67, championships: 0, born: "1989-08-28" },
  { id: "perez", number: 11, firstName: "Sergio", lastName: "Perez", code: "PER", country: "Mexico", flag: "🇲🇽", teamId: "cadillac", podiums: 39, championships: 0, born: "1990-01-26" }
];

export function driversByTeam(teamId: string) {
  return DRIVERS.filter((d) => d.teamId === teamId);
}

// Drivers that have a unique generated portrait in /public/img/drivers/<id>.png.
// Others fall back to the team-coloured avatar at /public/img/drivers/<teamId>.png.
const DRIVERS_WITH_PORTRAIT = new Set([
  "verstappen",
  "lawson",
  "piastri",
  "norris",
  "leclerc",
  "antonelli",
  "hamilton",
  "russell"
]);

export function driverImage(d: { id: string; teamId: string }) {
  return DRIVERS_WITH_PORTRAIT.has(d.id)
    ? `/img/drivers/${d.id}.png`
    : `/img/drivers/${d.teamId}.png`;
}
