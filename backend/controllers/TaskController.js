const TaskService = require ('../services/TaskService.js');

const taskController = {
  //Create a new task
  addTask: async (req, res) => {
    try {
      const { title, description, statusTask } = req.body;
      const newTask = await TaskService.createTask({ title, description, statusTask  });
      
      return res.status(201).json({ newTask, message: "Task added successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
  //   Get Task ByID
  getTaskById: async (req, res) => {
    try {
      const taskId = req.params.id;
      
      const task = await TaskService.getTaskById(taskId);
      if (!task) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(200).json(task);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },

  // Get all tasks
  getAllTasks: async (req, res) => {
    try {
      const tasks = await TaskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    }
  },

  //   Update Task
  updateTask: async (req, res) => {
    try {
      const taskId = req.params.id;
      const { title, description, statusTask } = req.body;   
      const updatedTask = await TaskService.updateTaskById(
        taskId,
        { title, description, statusTask }
      );
      if (!updatedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      res.status(200).json(updatedTask);
    } catch (error) {
      
      res.status(500).json({ message: error.message });
    }
  },
  // Patch Item Task
  updateOneItem:async(req,res)=>{
    
    try{
      const taskId=req.params.id;
      const updatedFields=req.body;
      const updatedtask= await TaskService.updateTaskItem(taskId,updatedFields);
      
      return res.status(200).json({ message: 'Task item updated successfully', updatedItem: updatedtask });
    }
    catch(error){
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  
  //   Delete Task ById
  deleteTask: async (req, res) => {
    try {
      const taskId = req.params.id;
      const deletedTask = await TaskService.deleteTaskById(taskId);
      if (!deletedTask) {
        return res.status(404).json({ message: "Task not found" });
      }
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

module.exports= taskController;
