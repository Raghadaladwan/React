import React from 'react';
import './App.css';
import ToItem from "./components/ToItem";
import Todata from "./components/Todata";


class App extends React.Component {
 constructor() {
    super()
    this.state = {
       todos:Todata
      
    }
    this.handleChange = this.handleChange.bind(this)
 }

 handleChange(id) {
  this.setState(prevState => {
    const updatedtodo = prevState.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })  
    return {
      todos: updatedtodo
    }
  })


 }
  render() {
    
  const toItems =this.state.todos.map((item) => <ToItem key={item.id} item ={item}
   handleChange = {this.handleChange} />)
    return (
      <div className='todo-list'>
         {toItems}
     </div>
    );
  }
}

// Function ------>

// function App() {
//   const toItem =Todata.map((item) => <ToItem ket={item.id} item = {item}/>)
//   return (
//     <div className='todo-list'>
    
//        {toItem}
//    </div>
//   );
// }

// End Function ------->
export default App;
