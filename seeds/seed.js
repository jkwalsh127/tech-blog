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

  for (const post of postSeedData) {
    await Post.create({
      ...post,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  for (const comment of commentSeedData) {
    await Comment.create({
      ...comment,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  };

  process.exit(0);
};

seedDatabase();