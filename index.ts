import { simulateMatch } from "./lib";
import { MatchInput } from "./lib/match";

const input: MatchInput = {
  homeTeam: {
    Name: "Team A",
    Players: [
      { Name: "Player 1" },
      { Name: "Player 2" },
      { Name: "Player 3" },
      { Name: "Player 4" },
    ],
    Stats: {
      AverageMarketValue: 1000,
      TotalMarketValue: 10000,
    },
  },
  awayTeam: {
    Name: "Team B",
    Players: [
      { Name: "Player 1" },
      { Name: "Player 2" },
      { Name: "Player 3" },
      { Name: "Player 4" },
    ],
    Stats: {
      AverageMarketValue: 1000,
      TotalMarketValue: 10000,
    },
  },
};

const actual = simulateMatch(input);

actual.events.forEach((e) => {
  console.log(e);
});
