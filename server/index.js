const express =  require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/search', async (req, res) => {
  let response;
  try {
    const query = req.body.searchTerm;
    const result = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
    const { items } = result.data;
    response = items;
  } catch (e) {
    console.log("error finding repo", e);
    response = { error: "No repositories found" };
  }
  return res.json(response);
});

app.listen(3001, () =>
  console.log('Express server is running on port 3001')
);