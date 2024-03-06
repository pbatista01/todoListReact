import { TodoShowListContainer } from './TodoShowListContainer';
import { TodoCreateContainer } from './TodoCreateContainer';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <TodoCreateContainer/>
      <TodoShowListContainer/>     
    </React.Fragment>
  );
}

export default App;
