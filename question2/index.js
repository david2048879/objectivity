const express = require('express');
const crypto = require('crypto');
const shortUrlRouter = require('./routers/short-urlRouter')

const app = express();



// Middleware to parse request body as JSON
app.use(express.json());

app.use('shortUrl')


// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000.');
});