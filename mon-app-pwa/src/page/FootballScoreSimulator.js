import React, { useState, useEffect } from 'react';

const ScoreDisplay = () => {
  const [scores, setScores] = useState(() => {
    const localScores = localStorage.getItem('scores');
    return localScores ? JSON.parse(localScores) : { teamA: 0, teamB: 0 };
  });

  const fetchScores = async () => {
    try {
      const response = await fetch('http://localhost:3001/scores');
      if (response.ok) {
        const data = await response.json();
        setScores(data);
        // Stockage des scores dans localStorage
        localStorage.setItem('scores', JSON.stringify(data));
      } else {
        console.error('Réponse du serveur non OK', response);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des scores', error);
    }
  };

  useEffect(() => {
    fetchScores();
    const intervalId = setInterval(fetchScores, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Scores</h2>
      <p>Team A: {scores.teamA}</p>
      <p>Team B: {scores.teamB}</p>
    </div>
  );
};

export default ScoreDisplay;
