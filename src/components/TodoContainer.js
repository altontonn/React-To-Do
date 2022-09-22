import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
/*eslint-disable */

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Setup development environment',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuidv4(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

   handleChange = (id) => {
     this.setState((prevState) => ({
       todos: prevState.todos.map((todo) => {
         if (todo.id === id) {
           return {
             ...todo,
             completed: !todo.completed,
           };
         }
         return todo;
       }),
     }));
     console.log('you clicked', id);
   }

   delTodo = (id) => {
     this.setState({
       todos: [
         ...this.state.todos.filter((todo) => todo.id !== id),
       ],
     });
     console.log('deleted', id);
   }

   addTodoItem = (title) => {
     const newTodo = {
       id: uuidv4(),
       title,
       completed: false,
     };
     this.setState({
       todos: [...this.state.todos, newTodo],
     });
     console.log(title);
   }

   setUpdate = (updatedTitle, id) => {
     this.setState({
       todos: this.state.todos.map((todo) => {
         if (todo.id === id) {
           todo.title = updatedTitle;
         }
         return todo;
       }),
     });
   }

   render() {
     return (
       <div className="container">
         <div className="inner">
           <Header />
           <InputTodo addTodoProps={this.addTodoItem} />
           <TodosList todos={this.state.todos} handleChangeProps={this.handleChange} deleteTodoProps={this.delTodo} setUpdate={this.setUpdate} />
         </div>
       </div>
     );
   }
}
export default TodoContainer;