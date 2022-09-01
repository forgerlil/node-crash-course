// To use our Router, we need to import express here as well.
const express = require('express');
const authorRouter = express.Router();

// We import the relevant controller functions from the controllers folder in every route file
const {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor} = require('../controllers/authorControllers.js');

// And the authorRouter is set on index.js to have /author prepended to every route, so we don't need to specify it here!
authorRouter.route('/').get(getAuthors).post(postAuthor);
authorRouter.route('/:id').get(getAuthorById).put(updateAuthor).delete(deleteAuthor);

// Lastly, we export our router so we can use it in index.js
module.exports = authorRouter;