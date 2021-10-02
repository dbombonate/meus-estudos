const app = require('./src/app');
const port = 3154;

app.listen(port, () => {
  console.log(`API Running on http://localhost:${port}`);
});