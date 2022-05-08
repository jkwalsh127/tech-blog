const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userSeedData = require('./userSeedData.json');
const postSeedData = require('./postSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await Post.bulkCreate(postSeedData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();