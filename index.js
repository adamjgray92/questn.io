const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'there'});
});

app.get('/blog/:slug', (req, res) => {
  let slug = req.params.slug.replace(/-/g, ' ');
  res.send({ content: 'Your slug is ' + slug});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT);
});
