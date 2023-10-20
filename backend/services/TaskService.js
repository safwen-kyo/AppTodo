const TaskModel=require('../models/TaskModel');

const TaskService={
    
    createTask: async (task) => {
        const newTask = new TaskModel(task);
        return await newTask.save();
      },
    
      getTaskById: async (taskId) => {
        return await TaskModel.findById(taskId);
      },
    
      getAllTasks: async () => {
        return await TaskModel.find();
      },
    
      updateTaskById: async (taskId, updatedFields) => {
        return await TaskModel.findByIdAndUpdate(taskId, updatedFields, { new: true });
      },
    
      updateTaskItem: async (taskId, updatedFields) => {
        const task = await TaskModel.findById(taskId);
        if (!task) {
          throw new Error('Task not found');
        }
        Object.assign(task, updatedFields);
        return await task.save();
      },
    
      deleteTaskById: async (taskId) => {
        return await TaskModel.findByIdAndDelete(taskId);
      },
};
module.exports=TaskService;