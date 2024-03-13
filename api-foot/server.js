const express = require('express');
const server = express();
const port = 3001;
const cors = require('cors');

server.use(cors());

server.use(cors({
  origin: 'http://localhost:3000'
}));


let scores = { teamA: 0, teamB: 0 }; 


server.get('/scores', (req, res) => {
  res.json(scores);
});

setInterval(() => {
  if (Math.random() < 0.5) {
    scores.teamA += 1;
  } else {
    scores.teamB += 1;
  }
  console.log(`Scores updated: Team A - ${scores.teamA}, Team B - ${scores.teamB}`);
}, 60000);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
