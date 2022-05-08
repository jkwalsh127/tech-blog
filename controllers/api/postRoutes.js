const router = require('express').Router();
const { Post, User } = require('../../models');

// GET all posts
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [{ model: User }],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a post
router.post('/', async (req, res) => {
  try {
    // Since unique UUIDs are generated in the model, providing the `id` of the User that will own this post is necessary
    const postData = await Post.create({
      user_id: req.body.user_id,
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;