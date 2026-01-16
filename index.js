// index.js
require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// parse JSON bodies
app.use(express.json());

// simple API
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// health check
app.get('/health', (req, res) => res.send('OK'));

// optional: serve a "public" folder (static files)
// app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.send('Backend is running');
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});

