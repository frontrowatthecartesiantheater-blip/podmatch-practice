const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.post('/analyze', (req, res) => {
  const guestData = req.body;

  if (!guestData.name) {
    return res.status(400).json({ error: 'Name is required' });
  }

  res.json({
    message: 'Received guest data!',
    guest: guestData.name
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});