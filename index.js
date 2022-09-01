const express = require('express');
const app = express();

// Because most providers will have a PORT key on their environment, it's good that you have your app listen to that port and have a fallback port in case it's not there, like so:
const port = process.env.PORT || 5000;

// When building a backend, think that you're the shoes of the "waiter": 
// You are on standby waiting for requests to come in, so you can give responses back! 
// The response <-> request cycle is a one-to-one relationship, you can only send one response per request.

// Our app can have methods for the requests it accepts, so:
// app.all() will accept all types of HTTP requests. However most often you want to limit what kind of requests each route responds to.
// app.get() will only accept GET requests, and as for the other methods, it accepts a string that will specify the path of the endpoint, 
// and a callback function that will be called when a request is made.

// Now we can create our first route!
app.get('/', (req, res) => {
  // When inside of a node environment, your console.logs will be logged on the terminal, so you can see what's going on with your app.
  console.log('You got a request on the root route!');
  // We can then send a response to the user (and close the cycle), like so:
  res.send('You sent a request to the root endpoint!');
});

// You can now run our custom script 'npm run dev' to get our server running, and use a client to send requests to your app (https://localhost:5000/). 
// I advise you use Postman or Insomnia.
// They work better when on the testing stages of your backend, because you can easily test out different types of requests,
// and send data to your backend and see if your requests are processed in the way you intend.

app.listen(port, () => console.log('Server started on port ' + port));