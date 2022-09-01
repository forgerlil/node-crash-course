// Any files where you have your Controller functions will only declare the functions (what they are meant to do when called) and export them.
// All that was done was to bring the two functions from index.js into this file, and then export them.

const myMiddleware = (req, res, next) => {
  console.log('I am the middleware!');
  req.someProperty = 'I was added here by the middleware!';
  if (req.someProperty) next();
}

const myRootRouteHandler = (req, res) => {
  console.log(req.someProperty);
  res.send('The middleware added this property to the request object: ' + req.someProperty);
}

module.exports = {myMiddleware, myRootRouteHandler}