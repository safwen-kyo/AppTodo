import React, { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

const TodoList = () => {
  const [isUpdateForm, setUpdateForm] = useState(false);

  const { todos, setIsEdit, deleteTodo, setSelectedTodoId } =
    useContext(TodoContext);

  const handleEditClick = (todoId) => {
    setSelectedTodoId(todoId);
    setUpdateForm(true);
    setIsEdit(true);
  };

  return (
    <div className="mt-4">
      {todos.length === 0 ? (
        <p className="text-gray-600 text-center ">
          No todos found. Add a new todo to get started!
        </p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo._id}
            className="flex flex-row gap-2  bg-gray-200 p-4 w-auto  rounded"
          >
            <div className="w-full">
              <h2 className="text-lg font-bold">{todo.title}</h2>
              <p className="text-gray-600">{todo.description}</p>
            </div>

            <p className=" bg-stone-300 px-2 self-center rounded-xl ">
              {todo.statusTask}
            </p>

            <div className="flex flex-row gap-3">
              <button
                className=" bg-danger  text-white  p-1 my-3 rounded-full text-sm"
                onClick={() => deleteTodo(todo._id)}
              >
                <AiFillDelete />
              </button>
              <button
                className=" bg-primary text-white p-1 my-3 rounded-full text-sm"
                onClick={() => handleEditClick(todo)}
              >
                <AiOutlineEdit />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TodoList;
