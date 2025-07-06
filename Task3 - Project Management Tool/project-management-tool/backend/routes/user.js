
const router = require('express').Router();
const User = require('../models/User'); // ensure you have this model

router.get('/', async (req, res) => {
  const users = await User.find({}, 'name _id');
  res.json(users);
});

module.exports = router;
