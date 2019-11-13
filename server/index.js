const express =  require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/search', async (req, res) => {
  try {
    const query = req.body.searchTerm;
    const response = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    const { items } = response.data;
    return res.json(items);
  } catch (e) {
    console.log("error finding repo", e);
  }
  // res.json({ name: "Rhys", title: "Developer" });
});

app.listen(3001, () =>
  console.log('Express server is running on port 3001')
);