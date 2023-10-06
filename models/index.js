const User = require('./User');
const Movie = require('./Movie');
const Song = require('./Song');

User.hasMany(Movie, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Movie.belongsTo(User, {
  foreignKey: 'user_id'
});

Song.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Movie, Song };