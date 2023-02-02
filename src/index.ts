import express from 'express';

const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('SPA');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});