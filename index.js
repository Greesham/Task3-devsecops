const express = require('express');
const app = express();

// Simple route
app.get('/', (req, res) => res.json({ ok: true }));

// Always start server when running index.js
const port = process.env.PORT || 3000;
app.listen(port, () => console.log('listening on port', port));

module.exports = app;
