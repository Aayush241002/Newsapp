const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow all origins (for now)

app.get('/api/news', async (req, res) => {
  try {
    const { country, category, page, pageSize } = req.query;

    const apiKey = process.env.NEWS_API_KEY;
    const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        country,
        category,
        page,
        pageSize,
        apiKey,
      },
    });

    res.json(response.data);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
