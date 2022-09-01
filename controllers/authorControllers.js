// And now we can finally make good use of our controllers, by maybe querying our database! :)
// Warning: If you make a request on these paths you will get an error, because we haven't connected a database!

const getAuthors = async (req, res) => {
  // A little example if we were using PostgreSQL and the pg module:
  const authors = await db.query('SELECT * FROM users');
  return authors
}

const getAuthorById = async (req, res) => {
  // And another little example if we were using MongoDB and the mongoose module:
  const oneAuthor = await Authors.findById(req.params.id);
  return oneAuthor;
}

// Be mindful: any function that queries a database has to go to the database, query, and come back with the result. 
// This is an asynchronous process, so we need to use async/await or promises to handle it properly. If we don't, we will get an error!
// Also, you'd need to import mongoose or pg here so you can query your db, but that's enough info to digest for now :D


const postAuthor = (req, res) => {
  res.send('You POST requested to add one author');
}

const updateAuthor = (req, res) => {
  res.send('You PUT requested to modify an existing author');
}

const deleteAuthor = (req, res) => {
  res.send('You DELETE requested to remove one author');
}

module.exports = {getAuthors, getAuthorById, postAuthor, updateAuthor, deleteAuthor}