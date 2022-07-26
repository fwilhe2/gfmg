type TeamName = string;

interface Team {
  Name: TeamName;
  Stats: Stats;
  Players: Player[];
}

interface Player {
  Name: string;
}

interface Stats {
  AverageMarketValue: number;
  TotalMarketValue: number;
}

export interface MatchInput {
  homeTeam: Team;
  awayTeam: Team;
}

export interface MatchResult {
  homeTeam: TeamName;
  homeGoals: number;
  awayTeam: TeamName;
  awayGoals: number;
  events: string[];
}

export function simulateMatch(matchInput: MatchInput): MatchResult {
  let minute = 0;
  let matchResult: MatchResult = {
    awayGoals: 0,
    awayTeam: matchInput.awayTeam.Name,
    homeGoals: 0,
    homeTeam: matchInput.homeTeam.Name,
    events: [],
  };

  const myRandom = Math.random;

  do {
    const currentSituation = simulateMatchSituation(
      matchInput,
      minute,
      myRandom
    );

    if (currentSituation) {
      matchResult.events.push(
        `[${minute}]: ${currentSituation.type.toString()}, ${
          currentSituation.team
        }, ${currentSituation.player.Name}`
      );

      if (currentSituation.type === "Goal") {
        if (currentSituation.team === matchResult.homeTeam) {
          matchResult.homeGoals++;
        }
        if (currentSituation.team === matchResult.awayTeam) {
          matchResult.awayGoals++;
        }
      }
    }

    minute++;
  } while (minute < 90);

  return matchResult;
}

type Goal = {
  type: "Goal";
  player: Player;
  team: TeamName;
  minute: number;
};

type Foul = {
  type: "Foul";
  player: Player;
  team: TeamName;
  minute: number;
};

type MatchSituationResult = Goal | Foul | null;

export function simulateMatchSituation(
  matchInput: MatchInput,
  minute: number,
  myRandom: () => number
): MatchSituationResult {
  const random = myRandom();

  if (random < 0.01) {
    return {
      type: "Goal",
      player: matchInput.homeTeam.Players[0],
      team: matchInput.homeTeam.Name,
      minute: minute,
    };
  }

  if (random >= 0.01 && random < 0.02) {
    return {
      type: "Goal",
      player: matchInput.awayTeam.Players[0],
      team: matchInput.awayTeam.Name,
      minute: minute,
    } as Goal;
  }

  if (random >= 0.02 && random < 0.06) {
    return {
      type: "Foul",
      player: matchInput.homeTeam.Players[0],
      team: matchInput.homeTeam.Name,
      minute: minute,
    };
  }

  if (random >= 0.06 && random < 0.1) {
    return {
      type: "Foul",
      player: matchInput.awayTeam.Players[0],
      team: matchInput.awayTeam.Name,
      minute: minute,
    };
  }

  return null;
}
