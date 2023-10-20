import React, { useState, useContext,useEffect } from 'react';
import { TodoContext } from '../context/TodoContext';

const UpdateTodoForm = ({ selectedTodo,todo  }) => {
    console.log(todo )
  const [updatedTodo, setUpdatedTodo] = useState({
    title: '',
    description: '',
    statusTask: ''
  });
  useEffect(() => {
    if (todo) {
      
      setUpdatedTodo({
        title: todo.title,
        description: todo.description,
        statusTask: todo.statusTask
      });
    }
  }, [todo]);


  const { updatedTask , setIsEdit } = useContext(TodoContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      [name]: value
    });
  };

  const handleUpdateTodo = () => {
    
    updatedTask(todo._id, updatedTodo);
    setIsEdit(false)
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 border rounded mb-2"
        placeholder="Title"
        name="title"
        value={updatedTodo.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="p-2 border rounded mb-2"
        placeholder="Description"
        name="description"
        value={updatedTodo.description}
        onChange={handleInputChange}
      />
      <select
        className="p-2 border rounded mb-2"
        name="statusTask"
        value={updatedTodo.statusTask}
        onChange={handleInputChange}
      >
        <option value="completed">completed</option>
        <option value="inProgress">inProgress</option>
        <option value="incomplete">incomplete</option>
      </select>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={handleUpdateTodo}>
        Update Task
      </button>
    </div>
  );
};

export default UpdateTodoForm;
