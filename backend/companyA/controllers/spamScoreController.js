const Users = require('../models/Users');

const spamNumber = 9;

exports.reduceTaskSpamScore  = async (req, res) => {
    try {
      const { email, taskName } = req.body;
      const user = await Users.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const taskIndex = user.tasks.findIndex(task => task.name === taskName);
  
      if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      const newSpamScore = Math.max(0, user.tasks[taskIndex].spamScore - spamNumber);
      user.tasks[taskIndex].spamScore = newSpamScore; // Reduce spamScore by 9
      await user.save();
  
      res.json({ message: 'Spam score updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating spam score' });
    }
  }


exports.increaseTaskSpamScore  = async (req, res) => {
    try {
      
      const { email, taskName } = req.body;
      const user = await Users.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const taskIndex = user.tasks.findIndex(task => task.name == taskName);
      
  
      if (taskIndex === -1) {
        return res.status(404).json({ message: 'Task not found' });
      }
  
      const newSpamScore = Math.min(100, user.tasks[taskIndex].spamScore + spamNumber);
      user.tasks[taskIndex].spamScore = newSpamScore; // increase spamScore by 9
      await user.save();
  
      res.json({ message: 'Spam score updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating spam score' });
    }
  };