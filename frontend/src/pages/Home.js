import React, {useContext} from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import { TodoContext } from '../context/TodoContext';
import UpdateTodoForm from '../components/UpdateTodoForm';

const HomePage = () => {
  const { todos,isEdit ,selectedTodoId } = useContext(TodoContext);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-center font-bold mb-4">Todo List</h1>
      <div className='flex justify-center items-center'> {isEdit ? <UpdateTodoForm todo={selectedTodoId}  /> : <TodoForm /> }  </div>
      <TodoList todos={todos}  />
    </div>
  );
};

export default HomePage;
