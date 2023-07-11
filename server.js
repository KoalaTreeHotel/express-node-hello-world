// Grab the express module
const express = require('express');

// The module is a function, run this function to create our app
const app = express();

// Handle get requests
app.get('/', (req, res) => {
  res.send('Successful response.');
});

// Server to listen on port 3000
app.listen(3000, () => console.log('Example app is listening on port 3000.'));
