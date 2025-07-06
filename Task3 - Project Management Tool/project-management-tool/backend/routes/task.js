const router = require('express').Router();
const auth = require('../middleware/auth');
const Task = require('../models/Task');


router.post('/', auth, async (req, res) => {
  try {
    const { title, description, projectId, priority = 'Medium', dueDate } = req.body;

    const task = new Task({
      title,
      description,
      projectId,
      priority,
      dueDate: dueDate ? new Date(dueDate) : undefined  
    });

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error creating task', error: err.message });
  }
});


router.get('/:projectId', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ projectId: req.params.projectId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching tasks', error: err.message });
  }
});


router.delete('/:id', auth, async (req, res) => {
  try {
    const deleted = await Task.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting task', error: err.message });
  }
});


router.patch('/:id', auth, async (req, res) => {
  try {
    const allowedFields = ['title', 'description', 'status', 'priority', 'dueDate', 'assignedTo'];
    const updates = {};

    for (let field of allowedFields) {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    }

    const task = await Task.findByIdAndUpdate(req.params.id, updates, { new: true });

    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: 'Error updating task', error: err.message });
  }
});

module.exports = router;
