import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 8001;

app.get('/', (req, res) => {
  res.send("beep boop.  I'm the server");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
