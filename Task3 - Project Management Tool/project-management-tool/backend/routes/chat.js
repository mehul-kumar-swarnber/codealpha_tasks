const router = require('express').Router();
const Chat = require('../models/Chat');
const auth = require('../middleware/auth');

// GET chats for a project
router.get('/:projectId', auth, async (req, res) => {
  const chats = await Chat.find({ projectId: req.params.projectId }).populate('userId', 'name');
  res.json(chats);
});

// POST a chat message
router.post('/', auth, async (req, res) => {
  const chat = await Chat.create({
    projectId: req.body.projectId,
    userId: req.user.id,
    message: req.body.message
  });
  res.json(await chat.populate('userId', 'name'));;
});

module.exports = router;
