const router = require('express').Router();
const auth = require('../middleware/auth');
const Project = require('../models/Project');

router.post('/', auth, async (req, res) => {
  const project = new Project({ name: req.body.name, members: [req.user.id] });
  await project.save();
  res.json(project);
});

router.get('/', auth, async (req, res) => {
  const projects = await Project.find({ members: req.user.id });
  res.json(projects);
});
router.delete('/:id', auth, async (req, res) => {
  console.log('Delete request for project:', req.params.id);
  const deleted = await Project.deleteOne({
    _id: req.params.id,
    members: req.user.id
  });

  if (deleted.deletedCount === 0) {
    return res.status(403).json({ error: 'Not allowed or project not found' });
  }

  res.sendStatus(204);
});



module.exports = router;
