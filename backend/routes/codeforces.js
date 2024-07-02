// backend/routes/codeforces.js
import express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/contest-list', async (req, res) => {
    try {
        const response = await axios.get('https://codeforces.com/api/contest.list');
        console.log("in route")
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching contests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
