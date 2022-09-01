const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// Now, this small example is already getting cumbersome, what if we had tons of routes, each with a request? Time to make use of the MVC pattern (or at least part of it)!
// The MVC pattern (stands for Model-View-Controller) is a way of structuring your code to make it more organized and easier to maintain. 
// It's a very common pattern in backend development.
// For that we move all of our functions into a controller file, and then import it into our index.js file.
// Checkout the controller.js file too!

// We import the two functions here (remember to add the extension of the file at the end!)
const {myMiddleware, myRootRouteHandler} = require('./controller.js');

// We pass our two functions here, to run when our endpoint receives a request.
app.get('/', myMiddleware, myRootRouteHandler);

app.listen(port, () => console.log('Server started on port ' + port));