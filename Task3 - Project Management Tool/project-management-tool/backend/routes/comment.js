const router = require('express').Router();
const auth = require('../middleware/auth');
const Comment = require('../models/Comment');

router.post('/', auth, async (req, res) => {
  const comment = new Comment({ ...req.body, userId: req.user.id });
  await comment.save();
  res.json(comment);
});

router.get('/:taskId', auth, async (req, res) => {
  const comments = await Comment.find({ taskId: req.params.taskId }).populate('userId', 'name');
  res.json(comments);
});

module.exports = router;
