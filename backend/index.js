const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());  // Middleware to parse JSON data

// Define route for root ("/")
app.get('/', (req, res) => {
  res.send('Welcome to the Registration API!');
});

// Define POST route for registration
app.post('/api/register', (req, res) => {
  console.log("Received data:", req.body);
  res.json({ message: "Registration successful", data: req.body });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
