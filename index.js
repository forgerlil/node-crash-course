// We require express first
const express = require('express');

// We create an express instance and store it in app
const app = express();

// We have our server listen on port 5000 and log a message to the console
app.listen(5000, () => console.log('Server started on port 5000'));