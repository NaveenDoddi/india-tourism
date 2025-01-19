const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/wiki', async (req, res) => {
  const title = req.query.placeName; // Extract the 'title' parameter from the request
  try {
    const response = await axios.get(`https://en.wikipedia.org/wiki/${title}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching Wikipedia page');
  }
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
