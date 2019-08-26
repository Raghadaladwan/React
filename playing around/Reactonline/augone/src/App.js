import React from 'react';
// import logo from './logo.svg';
import './App.css';
import TodoItem from './TodoItem';


function App() {
  return (
    <div className='todo-list'>
       <TodoItem />
       <TodoItem />
       <TodoItem />
       <TodoItem />
    </div>

  );
}

export default App;
