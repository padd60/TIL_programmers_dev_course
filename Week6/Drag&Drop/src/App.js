import { request } from "./api.js";
// import TaskQueue from "./taskQueue.js";
import SyncTasksManager from "./SyncTasksManager.js";
import TodoList from "./TodoList.js";

export default function App({ $target }) {
  const tasks = new SyncTasksManager();

  this.state = {
    todos: [],
  };

  const handleTodoDrop = async (todoId, updateValue) => {
    const nextTodos = [...this.state.todos];
    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);
    nextTodos[todoIndex].isCompleted = updateValue;

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    // tasks.addTask(async () => {
    //   await request(`/${todoId}/toggle`, {
    //     method: "PUT",
    //   });
    // });

    tasks.addTask({
      url: `/${todoId}/toggle`,
      method: "PUT",
    });
  };

  const handleTodoRemove = (todoId) => {
    const nextTodos = [...this.state.todos];

    const todoIndex = nextTodos.findIndex((todo) => todo._id === todoId);

    nextTodos.splice(todoIndex, 1);

    this.setState({
      ...this.state,
      todos: nextTodos,
    });

    tasks.removeTasks(`/${todoId}`);

    tasks.addTask({
      url: `/${todoId}`,
      method: "DELETE",
    });
  };

  const incompletedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료되지 않은 일들",
      todos: [],
    },
    onDrop: (todoId) => {
      handleTodoDrop(todoId, false);
    },
    onRemove: handleTodoRemove,
  });

  const completedTodoList = new TodoList({
    $target,
    initialState: {
      title: "완료된 일들",
      todos: [],
    },
    onDrop: (todoId) => {
      handleTodoDrop(todoId, true);
    },
    onRemove: handleTodoRemove,
  });

  this.setState = (nextState) => {
    this.state = nextState;

    incompletedTodoList.setState({
      ...incompletedTodoList.state,
      todos: this.state.todos.filter((todo) => !todo.isCompleted),
    });

    completedTodoList.setState({
      ...completedTodoList.state,
      todos: this.state.todos.filter((todo) => todo.isCompleted),
    });
  };

  const fetchTodos = async () => {
    const todos = await request("");

    this.setState({
      ...this.state,
      todos,
    });
  };

  fetchTodos();

  const $button = document.createElement("button");

  $button.textContent = "변경내용 동기화";

  $target.appendChild($button);

  $button.addEventListener("click", () => tasks.run());
}
