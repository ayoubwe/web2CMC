const express = require('express');
const bodyParser = require('body-parser');
const setRoutes = require('./routes/index');
const db = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Database connection
db.connect();

// Set up routes
setRoutes(app);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});