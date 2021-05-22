const express = require('express');
const cors = require('cors');
// const routes = require('./routes/routes.js');
// const db = require('./models/db.js');

const app = express();



app.get('/api/customers', cors(), (req, res) => {
  

  res.json(customers);
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);