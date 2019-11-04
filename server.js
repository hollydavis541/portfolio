'use strict';

// Define packages needed
// Require packages
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

// Define a port to listen to
const PORT = process.env.PORT || 3000;


app.use(cors());

// Define default routes and error - .static is for static items (see documentation)
app.use(express.static('./public'));

// Define functional routes
app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
    name: 'Calvin\'s dog, Sadie',
    school: 'ACME School of Airplane Flying'
  }
  response.status(200).json(airplanes);
});


app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

// Define listen port and actually listen
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
