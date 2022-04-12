import { request } from "./api.js";
import TodoComment from "./todoComment.js";
import TodoList from "./todoList.js";

export default function App({ $app }) {
  this.state = {
    todos: [],
    selectedTodo: null,
    comments: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;
    todoList.setState(this.state.todos);
    todoComments.setState({
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    });
  };

  const todoList = new TodoList({
    $target: $app,
    initialState: this.todos,
    onClick: (id) => {
      const selectedTodo = this.state.todos.find((todo) => {
        return todo.id === Number(id);
      });
      this.setState({
        ...this.state,
        selectedTodo,
      });
      console.log(selectedTodo);
      //댓글목록 불러오기
      request(`https://kdt.roto.codes/comments?todo.id=${id}`).then(
        (comments) => {
          this.setState({
            ...this.state,
            comments,
          });
        }
      );
    },
  });

  const todoComments = new TodoComment({
    $target: $app,

    initialState: {
      selectedTodo: this.state.selectedTodo,
      comments: this.state.comments,
    },
  });

  // todos 불러오기
  this.init = () => {
    request("https://kdt.roto.codes/todos").then((todos) => {
      this.setState({
        ...this.state,
        todos,
      });
    });
  };

  this.init();
}
