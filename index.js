const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const {myMiddleware, getRequestOnRoot, postRequestOnRoot, putRequestOnRoot, deleteRequestOnRoot} = require('./controllers/rootControllers.js');

// And we can now create a controllers folder, where all our files containing controller functions will live, and import them!
const {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor} = require('./controllers/authorControllers.js');

// For any Middlewares that we would like to be used for ALL routes, we can use the .use() method like so:
app.use(myMiddleware);

// Now that we have multiple request handlers, we can make use of the .route() method to make it easier for us to assign our controllers to each type of request!
// The .route() method accepts a string as an argument, and it can be chained by the type of request, you can more easily assign multiple types of request to the same route!
app.route('/').get(getRequestOnRoot).post(postRequestOnRoot).put(putRequestOnRoot).delete(deleteRequestOnRoot);

// And following the same principle, we can describe, for each route, what controller functions apply to it!
app.route('/authors').get(getAuthors).post(postAuthor);
app.route('/authors/:id').get(getAuthorById).put(updateAuthor).delete(deleteAuthor);

app.listen(port, () => console.log('Server started on port ' + port));