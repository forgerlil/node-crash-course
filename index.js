const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

// From here, understanding middlewares is a small step away. 
// A middleware is nothing but a function that, instead of closing the cycle, performs some action and then hands over to the next function(middleware) in the chain!
// There is no limit or restriction on the number of middlewares you can use in a chain: You just need to pass to the next function and not close the cycle.
app.get('/', 
  // It is quite important that, if your function is meant to be a middleware, that it has a third parameter, next. It will be a function that when called will
  // stop the execution of the current middleware and hand over to the next one.
  (req, res, next) => {
    console.log('I am the middleware!');
    // The request that you get is an object! So maybe you want to receive some data and add a property to your request object before you pass over to the next function, like so:
    req.someProperty = 'I was added here by the middleware!';
    // Remember: if you don't call next at any point of the middleware, your next function in line will never run (and your client will be stuck waiting for a response).
    if (req.someProperty) next();
  },
  (req, res) => {
    // Let's see what our middleware handed over to us:
    console.log(req.someProperty);
    // And let's send a response to the client:
    res.send('The middleware added this property to the request object: ' + req.someProperty);
  }
);

app.listen(port, () => console.log('Server started on port ' + port));