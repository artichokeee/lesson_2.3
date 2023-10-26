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

// задание 2.3.1.2

const newPlayers = [
    {
      id: 5,
      name: "Elena",
      scorePoints: 2800,
    },
    {
      id: 6,
      name: "Alex",
      scorePoints: 4100,
    },
    {
      id: 7,
      name: "Sasha",
      scorePoints: 3200,
    },
    {
      id: 8,
      name: "Nina",
      scorePoints: 3900,
    },
    {
      id: 9,
      name: "Dmitri",
      scorePoints: 5000,
    },
    {
      id: 10,
      name: "Lena",
      scorePoints: 2750,
    },
    {
      id: 11,
      name: "Andrey",
      scorePoints: 3800,
    },
    {
      id: 12,
      name: "Maria",
      scorePoints: 2950,
    },
    {
      id: 13,
      name: "Anton",
      scorePoints: 3600,
    },
    {
      id: 14,
      name: "Svetlana",
      scorePoints: 2700,
    }
  ];
  
  let newScorePoints = [];
  
  for (elementKey in newPlayers) {
    newScorePoints.push(newPlayers[elementKey].scorePoints);
  }
  
  console.log(newScorePoints);
  
  console.log(`The max score point is ${Math.max(...newScorePoints)}`);
