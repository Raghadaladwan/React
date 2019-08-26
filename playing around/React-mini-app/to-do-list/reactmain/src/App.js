import React, { Component } from "react";
import Addtask from "./components/Addtask";
import Todo from "./components/Todo";
import "./App.css";

export class App extends Component {
  state = {
    tasks:['First']
  };


  onChange=(arr)=>
  {
    this.setState({tasks:arr})

  }

  

 
  addTask = (someThingToDo) => {
    const newTask = {
      id: this.state.tasks.length  + 1,
      body: someThingToDo,
      isCompleted: false
    };



    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    this.setState({
      tasks: this.state.tasks.filter(elem => elem.id !== id)
    })
  }

  render() {
  
    return (
      <div className="container text-center">
        <h2>To Do App</h2>
     
        <ul>
          {this.state.tasks.map(task =>
           {
            
            return (<div>
                 <Addtask addTask={this.onChange}/>
              <div>{ console.log(this.state.tasks)}</div>

               {/* <Todo key={task.id} task={task} deleteTask={this.deleteTask}
            />; */}
            </div>)
            
         
          })}
        </ul>
      </div>
    );
  }
}

export default App;
