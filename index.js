const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

const {myMiddleware, getRequestOnRoot, postRequestOnRoot, putRequestOnRoot, deleteRequestOnRoot} = require('./controllers/rootControllers.js');


app.use(myMiddleware);
app.route('/').get(getRequestOnRoot).post(postRequestOnRoot).put(putRequestOnRoot).delete(deleteRequestOnRoot);

// Lastly, we split our routes in the routes folder, where each router will specify the methods and controllers applied to that path!
// Every endpoint that the authorRouter will use will have the /authors path prepended to it by default!
app.use('/authors', authorRouter)


app.listen(port, () => console.log('Server started on port ' + port));