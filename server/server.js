const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
require('./notificationHandler')(app);  // Ensure this is correctly pointing to the notificationHandler file

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});