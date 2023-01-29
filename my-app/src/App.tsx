import React, { useState } from 'react';

export const App: React.FC = () => {
  const [week, setWeek] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [completions, setCompletions] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);
  const [stats, setStats] = useState<Array<{
    week: string,
    attempts: number | undefined;
    completions: number | undefined;
    yards: number | undefined;
    touchdowns: number;
    interceptions: number;
  }>>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'week':
        setWeek(event.target.value);
        break;
      case 'attempts':
        setAttempts(parseInt(event.target.value, 10));
        break;
      case 'completions':
        setCompletions(parseInt(event.target.value, 10));
        break;
      case 'yards':
        setYards(parseInt(event.target.value, 10));
        break;
      case 'touchdowns':
        setTouchdowns(parseInt(event.target.value, 10));
        break;
      case 'interceptions':
        setInterceptions(parseInt(event.target.value, 10));
        break;
      default:
        break;
    }
  };

  const addStats = () => {
    setStats([...stats, {
      week,
      attempts,
      completions,
      yards,
      touchdowns,
      interceptions,
    }]);
    setAttempts(0);
    setCompletions(0);
    setYards(0);
    setTouchdowns(0);
    setInterceptions(0);
  };

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
</tr>
))}
<tr>
<td>
{`${stats.length} Games`}
</td>
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
<td>
{stats.reduce(
(acc, stat) => acc + stat.touchdowns,
0
)}
</td>
<td>
{stats.reduce(
(acc, stat) => acc + stat.interceptions,
0
)}
</td>
</tr>
</tbody>
</table>
</div>
);
};