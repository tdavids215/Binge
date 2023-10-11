const sequelize = require('../config/connection');
const { User, Movie, Song, Book } = require('../models');

const userData = require('./userData.json');
const movieData = require('./movieData.json');
const songData = require('./songData.json');
const bookData = require('./bookData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
  
    for (const movie of movieData) {
      await Movie.create({
        ...movie,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();