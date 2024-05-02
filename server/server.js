const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import Routes
require('./notificationHandler')(app);  // Pass the app to add notification related routes

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});