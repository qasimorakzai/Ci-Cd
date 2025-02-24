const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello my name is vinod bahador thapa');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
