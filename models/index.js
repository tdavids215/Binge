const User = require('./User');
const Movie = require('./Movie');
const Song = require('./Song');
const Book = require('./Book');

User.hasMany(Movie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Song, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(Book, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(User, {
  foreignKey: 'user_id'
});

Song.belongsTo(User, {
    foreignKey: 'user_id'
});

Book.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Movie, Song, Book };