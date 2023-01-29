import React, { useState } from "react";

export const App: React.FC = () => {
  const [week, setWeek] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [completions, setCompletions] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);
  const [rating, setRating] = useState(0);
  const [stats, setStats] = useState<
    Array<{
      week: string;
      attempts: number;
      completions: number;
      yards: number;
      touchdowns: number;
      interceptions: number;
      rating: number;
    }>
  >([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "week":
        setWeek(event.target.value);
        break;
      case "attempts":
        setAttempts(parseInt(event.target.value, 10));
        break;
      case "completions":
        setCompletions(parseInt(event.target.value, 10));
        break;
      case "yards":
        setYards(parseInt(event.target.value, 10));
        break;
      case "touchdowns":
        setTouchdowns(parseInt(event.target.value, 10));
        break;
      case "interceptions":
        setInterceptions(parseInt(event.target.value, 10));
        break;
      default:
        break;
    }
    setRating(getPasserRating(
      completionPercentage,
      yardsPerAttempt,
      touchdownPercentage,
      interceptionPercentage
    ));
    console.log(`just tried to get rating - it is ${rating}`);
  };

  const addStats = () => {
    setStats([
      ...stats,
      {
        week,
        attempts,
        completions,
        yards,
        touchdowns,
        interceptions,
        rating,
      },
    ]);
    setRating(rating);
    setAttempts(0);
    setCompletions(0);
    setYards(0);
    setTouchdowns(0);
    setInterceptions(0);
  };

  // Function to calculate completion percentage
  const getCompletionPercentage = (
    completions: number,
    attempts: number
  ): number => {
    return (completions / attempts) * 100;
  };

  // Function to calculate yards per attempt
  const getYardsPerAttempt = (yards: number, attempts: number): number => {
    return yards / attempts;
  };

  // Function to calculate touchdown percentage
  const getTouchdownPercentage = (
    touchdowns: number,
    attempts: number
  ): number => {
    return (touchdowns / attempts) * 100;
  };

  // Function to calculate interception percentage
  const getInterceptionPercentage = (
    interceptions: number,
    attempts: number
  ): number => {
    return (interceptions / attempts) * 100;
  };

  // Function to calculate passer rating
  const getPasserRating = (
    completionPercentage: number,
    yardsPerAttempt: number,
    touchdownPercentage: number,
    interceptionPercentage: number
  ): number => {
    const a = (completionPercentage - 30) / 20;
    const b = (yardsPerAttempt - 3) / 4;
    const c = (touchdownPercentage - 3) / 4;
    const d = 2.375 - interceptionPercentage / 2;

    return ((a + b + c + d) / 6) * 100;
  };

  const completionPercentage = getCompletionPercentage(completions, attempts);
  const yardsPerAttempt = getYardsPerAttempt(yards, attempts);
  const touchdownPercentage = getTouchdownPercentage(touchdowns, attempts);
  const interceptionPercentage = getInterceptionPercentage(
    interceptions,
    attempts
  );
  const passerRating = getPasserRating(
    completionPercentage,
    yardsPerAttempt,
    touchdownPercentage,
    interceptionPercentage
  );

  console.log(`passerRating is ${passerRating}`);

  return (
    <div>
      <h1>NFL Passer Rating Calculator</h1>
      <form>
        <label htmlFor="attempts">Season/Week:</label>
        <input
          type="string"
          id="week"
          name="week"
          onChange={handleInputChange}
          value={week}
        />
        <br />
        <label htmlFor="attempts">Attempts:</label>
        <input
          type="number"
          id="attempts"
          name="attempts"
          onChange={handleInputChange}
          value={attempts}
        />
        <br />
        <label htmlFor="completions">Completions:</label>
        <input
          type="number"
          id="completions"
          name="completions"
          onChange={handleInputChange}
          value={completions}
        />
        <br />
        <label htmlFor="yards">Yards:</label>
        <input
          type="number"
          id="yards"
          name="yards"
          onChange={handleInputChange}
          value={yards}
        />
        <br />
        <label htmlFor="touchdowns">Touchdowns:</label>
        <input
          type="number"
          id="touchdowns"
          name="touchdowns"
          onChange={handleInputChange}
          value={touchdowns}
        />
        <br />
        <label htmlFor="interceptions">Interceptions:</label>
        <input
          type="number"
          id="interceptions"
          name="interceptions"
          onChange={handleInputChange}
          value={interceptions}
        />
        <br />
        <label htmlFor="rating">Passer Rating:</label>
        <input
          disabled={true}
          type="number"
          id="rating"
          name="rating"
          value={rating}
        />
      </form>
      <button onClick={addStats}>Add Stats</button>
      <table>
        <thead>
          <tr>
            <th>Season/Week</th>
            <th>Attempts</th>
            <th>Completions</th>
            <th>Yards</th>
            <th>Touchdowns</th>
            <th>Interceptions</th>
            <th>Passer Rating</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat, index) => (
            <tr key={index}>
              <td>{stat.week}</td>
              <td>{stat.attempts}</td>
              <td>{stat.completions}</td>
              <td>{stat.yards}</td>
              <td>{stat.touchdowns}</td>
              <td>{stat.interceptions}</td>
              <td>{stat.rating}</td>
            </tr>
          ))}
          <tr>
            <td>{`${stats.length} Games`}</td>
            <td>
              {stats.reduce(
                (acc, stat) => acc + stat.attempts!, // TODO: Handle "possibly undefined"
                0
              )}
            </td>
            <td>
              {stats.reduce(
                (acc, stat) => acc + stat.completions!, // TODO: Handle "possibly undefined"
                0
              )}
            </td>
            <td>
              {stats.reduce(
                (acc, stat) => acc + stat.yards!, // TODO: Handle "possibly undefined"
                0
              )}
            </td>
            <td>{stats.reduce((acc, stat) => acc + stat.touchdowns, 0)}</td>
            <td>{stats.reduce((acc, stat) => acc + stat.interceptions, 0)}</td>
            <td>{stats.reduce((acc, stat) => stat.rating, 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
