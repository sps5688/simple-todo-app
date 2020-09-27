// import React from "react";
// import TodoItem from "./TodoItem";

// class TodoList extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         {this.props.todos.map((todo) => (
//           <TodoItem
//             key={todo.id}
//             todo={todo}
//             handleChangeProps={this.props.handleChangeProps}
//             deleteTodoProps={this.props.deleteTodoProps}
//           />
//         ))}
//       </React.Fragment>
//     );
//   }
// }

// export default TodoList;

import React from "react";
import TodoItem from "./TodoItem";

const TodosList = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
        />
      ))}
    </div>
  );
};

export default TodosList;
