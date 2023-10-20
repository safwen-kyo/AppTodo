import React, { createContext, useState, useEffect } from "react";

import {
  apiFetchTasks,
  apiDeleteTask,
  apiCreateTask,
  apiUpdateTask,
} from "../services/TodoService";
const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(null);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  useEffect(() => {
    apiFetchTasks().then((data) => setTodos(data));
  }, []);

  const deleteTodo = async (id) => {
    await apiDeleteTask(id);
    const updatedTodos = todos.filter((todo) => todo._id !== id);
    setTodos(updatedTodos);
  };

  const addTodo = async (task) => {
    const newTodo = await apiCreateTask(task);
    setTodos([...todos, newTodo]);
  };

  const updatedTask = async (id, updatedTodoData) => {
    try {
      const updatedTask = await apiUpdateTask(id, updatedTodoData);
      return updatedTask;
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        isEdit,
        setIsEdit,
        selectedTodoId,
        setSelectedTodoId,
        updatedTask,
        deleteTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
