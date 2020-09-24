import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import Header from "./Header";
import TodosList from "./TodosList";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    // todos: [
    //   {
    //     id: uuidv4(),
    //     title: "Setup development environment",
    //     completed: true,
    //   },
    //   {
    //     id: uuidv4(),
    //     title: "Develop website and add content",
    //     completed: false,
    //   },
    //   {
    //     id: uuidv4(),
    //     title: "Deploy to live server",
    //     completed: false,
    //   },
    // ],

    todos: [],
    show: false,
  };

  handleChange = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      }),
      show: !this.state.show,
    });
  };

  // delTodo = (id) => {
  //   this.setState({
  //     todos: [
  //       ...this.state.todos.filter((todo) => {
  //         return todo.id !== id;
  //       }),
  //     ],
  //   });
  // };

  delTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((reponse) =>
        this.setState({
          todos: [
            ...this.state.todos.filter((todo) => {
              return todo.id !== id;
            }),
          ],
        })
      );
  };

  // addTodoItem = (title) => {
  //   const newTodo = {
  //     id: uuidv4(),
  //     title: title,
  //     completed: false,
  //   };

  //   this.setState({
  //     todos: [...this.state.todos, newTodo],
  //   });
  // };

  addTodoItem = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((response) =>
        this.setState({
          todos: [...this.state.todos, response.data],
        })
      );
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos", {
        params: {
          _limit: 10,
        },
      })
      .then((response) => this.setState({ todos: response.data }));
  }

  render() {
    return (
      //   <div>
      //     <h1>Hello from Create React App</h1>
      //     <p>I am in a React Component!</p>
      //   </div>
      // <React.Fragment>
      // </React.Fragment>
      <div className="container">
        <Header headerSpan={this.state.show} />
        <InputTodo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
export default TodoContainer;
