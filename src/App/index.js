import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext';
import './App.css';

// function App() {
//   return (
//     <React.Fragment>
//       <TodoHeader></TodoHeader>
//       <TodoList></TodoList>
//     </React.Fragment>
//   );
// }

// function TodoHeader() {
//   return (
    
//   )
// }

// function TodoHeader() {
//   return (
    
//   )
// }

// function TodoHeader() {
//   return (
    
//   )
// }

// function TodoHeader() {
//   return (
    
//   )
// }

// function TodoHeader() {
//   return (
    
//   )
// }

// function TodoHeader() {
//   return (
    
//   )
// }

function App() {
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
