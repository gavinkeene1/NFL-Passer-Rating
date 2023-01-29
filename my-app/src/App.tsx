import React, { useState } from 'react';

const NFLPasserRatingCalculator: React.FC = () => {
  const [attempts, setAttempts] = useState(0);
  const [completions, setCompletions] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);
  const [stats, setStats] = useState<Array<{
    attempts: number;
    completions: number;
    yards: number;
    touchdowns: number;
    interceptions: number;
  }>>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case 'attempts':
        setAttempts(Number(value));
        break;
      case 'completions':
        setCompletions(Number(value));
        break;
      case 'yards':
        setYards(Number(value));
        break;
      case 'touchdowns':
        setTouchdowns(Number(value));
        break;
      case 'interceptions':
        setInterceptions(Number(value));
        break;
      default:
        break;
    }
  };

  const addStats = () => {
    setStats([
      ...stats,
      {
        attempts,
        completions,
        yards,
        touchdowns,
        interceptions,
      },
    ]);
  };

  return (
    <div>
      <h1>NFL Passer Rating Calculator</h1>
      <form>
        <label htmlFor="attempts">Attempts:</label>
        <input
          type="number"
          id="attempts"
          name="attempts"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="completions">Completions:</label>
        <input
          type="number"
          id="completions"
          name="completions"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="yards">Yards:</label>
        <input
          type="number"
          id="yards"
          name="yards"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="touchdowns">Touchdowns:</label>
        <input
          type="number"
          id="touchdowns"
          name="touchdowns"
          onChange={handleInputChange}
        />
        <br />
        <label htmlFor="interceptions">Interceptions:</label>
        <input
          type="number"
          id="interceptions"
          name="interceptions"
          onChange={handleInputChange}
        />
      </form>
      <button onClick={addStats}>Add Stats</button>
      <table>
        <thead>
          <tr>
            <th>Attempts</th>
            <th>Completions</th>
<th>Yards</th>
<th>Touchdowns</th>
<th>Interceptions</th>
</tr>
</thead>
<tbody>
{stats.map(stat => (
<tr /*TODO: Give these rows ids: key={stat.id}*/>
<td>{stat.attempts}</td>
<td>{stat.completions}</td>
<td>{stat.yards}</td>
<td>{stat.touchdowns}</td>
<td>{stat.interceptions}</td>
</tr>
))}
</tbody>
</table>
</div>
);
};

export default NFLPasserRatingCalculator;