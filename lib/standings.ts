export type DriverStanding = {
  position: number;
  driverId: string;
  points: number;
  wins: number;
};

export type ConstructorStanding = {
  position: number;
  teamId: string;
  points: number;
  wins: number;
};

export const DRIVER_STANDINGS: DriverStanding[] = [
  { position: 1, driverId: "antonelli", points: 156, wins: 4 },
  { position: 2, driverId: "hamilton", points: 115, wins: 1 },
  { position: 3, driverId: "russell", points: 106, wins: 1 },
  { position: 4, driverId: "leclerc", points: 75, wins: 0 },
  { position: 5, driverId: "norris", points: 73, wins: 1 },
  { position: 6, driverId: "piastri", points: 68, wins: 0 },
  { position: 7, driverId: "verstappen", points: 55, wins: 0 },
  { position: 8, driverId: "gasly", points: 41, wins: 0 },
  { position: 9, driverId: "hadjar", points: 34, wins: 0 },
  { position: 10, driverId: "lawson", points: 28, wins: 0 },
  { position: 11, driverId: "bearman", points: 18, wins: 0 },
  { position: 12, driverId: "colapinto", points: 16, wins: 0 },
  { position: 13, driverId: "lindblad", points: 13, wins: 0 },
  { position: 14, driverId: "sainz", points: 6, wins: 0 },
  { position: 15, driverId: "albon", points: 5, wins: 0 },
  { position: 16, driverId: "ocon", points: 3, wins: 0 },
  { position: 17, driverId: "bortoleto", points: 2, wins: 0 },
  { position: 18, driverId: "alonso", points: 1, wins: 0 },
  { position: 19, driverId: "hulkenberg", points: 0, wins: 0 },
  { position: 20, driverId: "bottas", points: 0, wins: 0 },
  { position: 21, driverId: "perez", points: 0, wins: 0 },
  { position: 22, driverId: "stroll", points: 0, wins: 0 }
];

export const CONSTRUCTOR_STANDINGS: ConstructorStanding[] = [
  { position: 1, teamId: "mercedes", points: 262, wins: 5 },
  { position: 2, teamId: "ferrari", points: 190, wins: 1 },
  { position: 3, teamId: "mclaren", points: 141, wins: 1 },
  { position: 4, teamId: "red-bull", points: 89, wins: 0 },
  { position: 5, teamId: "alpine", points: 60, wins: 0 },
  { position: 6, teamId: "rb", points: 38, wins: 0 },
  { position: 7, teamId: "haas", points: 21, wins: 0 },
  { position: 8, teamId: "williams", points: 11, wins: 0 },
  { position: 9, teamId: "kick-sauber", points: 2, wins: 0 },
  { position: 10, teamId: "aston-martin", points: 1, wins: 0 }
].sort((a, b) => b.points - a.points).map((s, i) => ({ ...s, position: i + 1 }));
