const myMiddleware = (req, res, next) => {
  console.log('I am the middleware!');
  req.someProperty = 'I was added here by the middleware!';
  if (req.someProperty) next();
}

const getRequestOnRoot = (req, res) => {
  console.log(req.someProperty);
  res.send('You GET requested the root path');
}

const postRequestOnRoot = (req, res) => {
  console.log(req.someProperty);
  res.send('You POST requested the root path');
}

const putRequestOnRoot = (req, res) => {
  console.log(req.someProperty);
  res.send('You PUT requested the root path');
}

const deleteRequestOnRoot = (req, res) => {
  console.log(req.someProperty);
  res.send('You DELETE requested the root path');
}

module.exports = {myMiddleware, getRequestOnRoot, postRequestOnRoot, putRequestOnRoot, deleteRequestOnRoot}