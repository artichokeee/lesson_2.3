const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scorePoints = [];

for (elementKey in players) {
  scorePoints.push(players[elementKey].scorePoints);
}

console.log(scorePoints);

console.log(`The max score point is ${Math.max(...scorePoints)}`);
