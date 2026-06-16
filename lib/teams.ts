export type Team = {
  id: string;
  name: string;
  fullName: string;
  base: string;
  chief: string;
  powerUnit: string;
  color: string;
  founded: number;
  championships: number;
};

export const TEAMS: Team[] = [
  {
    id: "red-bull",
    name: "Red Bull",
    fullName: "Oracle Red Bull Racing",
    base: "Milton Keynes, United Kingdom",
    chief: "Christian Horner",
    powerUnit: "Honda RBPT",
    color: "#3671C6",
    founded: 2005,
    championships: 6
  },
  {
    id: "mclaren",
    name: "McLaren",
    fullName: "McLaren Formula 1 Team",
    base: "Woking, United Kingdom",
    chief: "Andrea Stella",
    powerUnit: "Mercedes",
    color: "#FF8000",
    founded: 1966,
    championships: 9
  },
  {
    id: "ferrari",
    name: "Ferrari",
    fullName: "Scuderia Ferrari HP",
    base: "Maranello, Italy",
    chief: "Frederic Vasseur",
    powerUnit: "Ferrari",
    color: "#E80020",
    founded: 1950,
    championships: 16
  },
  {
    id: "mercedes",
    name: "Mercedes",
    fullName: "Mercedes-AMG Petronas F1 Team",
    base: "Brackley, United Kingdom",
    chief: "Toto Wolff",
    powerUnit: "Mercedes",
    color: "#27F4D2",
    founded: 1954,
    championships: 8
  },
  {
    id: "aston-martin",
    name: "Aston Martin",
    fullName: "Aston Martin Aramco F1 Team",
    base: "Silverstone, United Kingdom",
    chief: "Mike Krack",
    powerUnit: "Mercedes",
    color: "#229971",
    founded: 2021,
    championships: 0
  },
  {
    id: "alpine",
    name: "Alpine",
    fullName: "BWT Alpine F1 Team",
    base: "Enstone, United Kingdom",
    chief: "Oliver Oakes",
    powerUnit: "Renault",
    color: "#0093CC",
    founded: 2021,
    championships: 0
  },
  {
    id: "williams",
    name: "Williams",
    fullName: "Williams Racing",
    base: "Grove, United Kingdom",
    chief: "James Vowles",
    powerUnit: "Mercedes",
    color: "#64C4FF",
    founded: 1977,
    championships: 9
  },
  {
    id: "rb",
    name: "Racing Bulls",
    fullName: "Visa Cash App Racing Bulls",
    base: "Faenza, Italy",
    chief: "Alan Permane",
    powerUnit: "Red Bull Ford",
    color: "#6692FF",
    founded: 2024,
    championships: 0
  },
  {
    id: "kick-sauber",
    name: "Audi",
    fullName: "Audi F1 Team",
    base: "Hinwil, Switzerland",
    chief: "Mattia Binotto",
    powerUnit: "Audi",
    color: "#BB0A30",
    founded: 1993,
    championships: 0
  },
  {
    id: "haas",
    name: "Haas",
    fullName: "MoneyGram Haas F1 Team",
    base: "Kannapolis, United States",
    chief: "Ayao Komatsu",
    powerUnit: "Ferrari",
    color: "#B6BABD",
    founded: 2016,
    championships: 0
  },
  {
    id: "cadillac",
    name: "Cadillac",
    fullName: "Cadillac F1 Team",
    base: "Indianapolis, United States",
    chief: "Graeme Lowdon",
    powerUnit: "Ferrari",
    color: "#B59410",
    founded: 2026,
    championships: 0
  }
];
