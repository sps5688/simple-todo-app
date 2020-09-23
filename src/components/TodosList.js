import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={this.props.handleChangeProps}
            deleteTodoProps={this.props.deleteTodoProps}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default TodoList;
