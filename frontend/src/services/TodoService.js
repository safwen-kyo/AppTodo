
import axios from '../api/api';

//Get All Tasks
export const apiFetchTasks = async (req,res) => {
  try {
   
    const response = await axios.get('/tasks');
    
    return response.data;
  } catch (error) {
   
    throw new Error('Error fetching tasks');
  }
};
//  Create New Task
export const apiCreateTask = async (taskData) => {
  try {
    const response = await axios.post('/tasks', taskData);
    
    return response.data;
  } catch (error) {
    
    throw new Error('Error creating task');
  }
};
// Get Task ById
export const apiFetchTaskById = async (taskId) => {
    try {
      const response = await axios.get(`/tasks/${taskId}`);
      // Handle successful task fetch by ID
      return response.data;
    } catch (error) {
      // Handle error in fetching task by ID
      throw new Error('Error fetching task by ID');
    }
  };
// Update Task
export const apiUpdateTask = async (taskId, taskData) => {
  try {
    const response = await axios.put(`/tasks/${taskId}`, taskData);
    
    return response.data;
  } catch (error) {
    
    throw new Error('Error updating task');
  }
};
// Delete Task By Id
export const apiDeleteTask = async (taskId) => {
  try {
    await axios.delete(`/tasks/${taskId}`);
    
  } catch (error) {
    
    throw new Error('Error deleting task');
  }
};
// PATCH Update Task
export const apiUpdatedTask = async (taskId, taskData) => {
    try {
      const response = await axios.patch(`/tasks/${taskId}`, taskData);
      // Handle successful task update using PATCH method
      return response.data;
    } catch (error) {
      // Handle error in task update
      throw new Error('Error updating task');
    }
  };