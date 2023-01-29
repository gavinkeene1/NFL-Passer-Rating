import React, { useState } from 'react';
import './App.css';

const NFLPasserRatingCalculator: React.FC = () => {
  const [attempts, setAttempts] = useState(0);
  const [completions, setCompletions] = useState(0);
  const [yards, setYards] = useState(0);
  const [touchdowns, setTouchdowns] = useState(0);
  const [interceptions, setInterceptions] = useState(0);

  // Function to calculate completion percentage
  const completionPercentage = (): number => {
    return (completions / attempts) * 100;
  }

  // Function to calculate yards per attempt
  const yardsPerAttempt = (): number => {
    return (yards / attempts);
  }

  // Function to calculate touchdown percentage
  const touchdownPercentage = (): number => {
    return (touchdowns / attempts) * 100;
  }

  // Function to calculate interception percentage
  const interceptionPercentage = (): number => {
    return (interceptions / attempts) * 100;
  }

  // Function to calculate passer rating
  const passerRating = (): number => {
    const a = (completionPercentage() - 30) / 20;
    const b = (yardsPerAttempt() - 3) / 4;
    const c = (touchdownPercentage() - 3) / 4;
    const d = 2.375 - (interceptionPercentage() / 2);

    return ((a + b + c + d) / 6) * 100;
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'attempts') {
      setAttempts(parseInt(value));
    } else if (name === 'completions') {
      setCompletions(parseInt(value));
    } else if (name === 'yards') {
      setYards(parseInt(value));
    } else if (name === 'touchdowns') {
      setTouchdowns(parseInt(value));
    } else if (name === 'interceptions') {
      setInterceptions(parseInt(value));
    }
  }

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
<br />
<button type="button" onClick={() => passerRating()}>
Calculate Passer Rating
</button>
</form>
<br />
<p>Passer Rating: {passerRating()}</p>
</div>
);
};

export default NFLPasserRatingCalculator;