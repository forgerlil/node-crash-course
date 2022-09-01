// Nothing different than before, we created some more controller functions and exported them!

const getAuthors = (req, res) => {
  res.send('You GET requested all authors');
}

const getAuthorById = (req, res) => {
  res.send('You GET requested one authors');
}

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