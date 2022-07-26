const standings = [
  {
    team: "Team A",
    matchesPlayed: 34,
    points: 59,
    goals: 34,
    goalsAgainst: 24,
  },
  {
    team: "Team B",
    matchesPlayed: 34,
    points: 40,
    goals: 22,
    goalsAgainst: 30,
  },
];

const matchResults = [
  {
    homeGoals: 1,
    homeTeam: "Team A",
    awayGoals: 1,
    awayTeam: "Team B",
    events: [],
  },
  {
    homeGoals: 1,
    homeTeam: "Team B",
    awayGoals: 1,
    awayTeam: "Team A",
    events: [],
  },
];

const app = document.getElementById("app");
const table = document.createElement("table");

const titleRow = table.insertRow();
titleRow.insertCell().appendChild(document.createTextNode("Team"));
titleRow.insertCell().appendChild(document.createTextNode("Matches"));
titleRow.insertCell().appendChild(document.createTextNode("Points"));
titleRow.insertCell().appendChild(document.createTextNode("Goals"));
titleRow.insertCell().appendChild(document.createTextNode("Goals Against"));

standings.forEach((s) => {
  const r = table.insertRow();
  r.insertCell().appendChild(document.createTextNode(s.team));
  r.insertCell().appendChild(
    document.createTextNode(s.matchesPlayed.toString())
  );
  r.insertCell().appendChild(document.createTextNode(s.points.toString()));
  r.insertCell().appendChild(document.createTextNode(s.goals.toString()));
  r.insertCell().appendChild(
    document.createTextNode(s.goalsAgainst.toString())
  );
});

app?.appendChild(table);

const matches = document.createElement("p");

matchResults.forEach((m) => {
  matches.appendChild(
    document.createTextNode(
      `${m.homeTeam} - ${m.awayTeam} ${m.homeGoals}:${m.awayGoals}`
    )
  );
  matches.appendChild(document.createElement("br"));
});

app?.appendChild(matches);
