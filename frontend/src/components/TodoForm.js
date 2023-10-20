import React, { useState, useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { apiFetchTasks } from "../services/TodoService";

const TodoForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    statusTask: "",
  });
  const { addTodo, todos, setTodos } = useContext(TodoContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };
  useEffect(() => {
    const fetchTodos = async () => {
      const updatedTodos = await apiFetchTasks();
      setTodos(updatedTodos);
    };

    fetchTodos();
  }, [todos, setTodos]);

  const handleAddTodo = () => {
    if (
      task.title.trim() !== "" &&
      task.description.trim() !== "" &&
      task.statusTask.trim() !== ""
    ) {
      addTodo(task);
     
      setTask({
        title: "",
        description: "",
        statusTask: "",
      });
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        className="p-2 border rounded mr-2"
        placeholder="Task"
        name="title"
        value={task.title}
        onChange={handleInputChange}
      />
      <input
        type="text"
        className="p-2 border rounded mr-2"
        placeholder="description"
        name="description"
        value={task.description}
        onChange={handleInputChange}
      />
      <select
        className="p-2 border rounded mb-2"
        name="statusTask"
        value={task.statusTask}
        onChange={handleInputChange}
      >
        <option value="completed">completed</option>
        <option value="inProgress">inProgress</option>
        <option value="incomplete">incomplete</option>
      </select>
      <button
        className="bg-blue-500 text-white p-2 m-2  rounded "
        onClick={handleAddTodo}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
