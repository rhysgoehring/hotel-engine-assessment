const express =  require('express');

const app = express();

app.get('/api/test', (req, res) => {
  res.json({ name: "Rhys", title: "Developer" });
});

app.listen(3001, () =>
  console.log('Express server is running on port 3001')
);