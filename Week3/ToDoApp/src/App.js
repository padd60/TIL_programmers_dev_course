import { request } from "./api.js";
import Header from "./Header.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import UserList from "./UserList.js";

export default function App({ $target }) {
  const $userListContainer = document.createElement("div");
  const $todoListContainer = document.createElement("div");

  $target.appendChild($userListContainer);
  $target.appendChild($todoListContainer);

  this.state = {
    userList: [],
    selectedUsername: null,
    todos: [],
    isTodoLoading: false,
  };

  const userList = new UserList({
    $target: $userListContainer,
    initialState: this.state.userList,
    onSelect: async (username) => {
      history.pushState(null, null, `/${username}`);

      this.setState({
        ...this.state,
        selectedUsername: username,
      });

      await fetchTodo();
    },
  });

  const header = new Header({
    $target: $todoListContainer,
    initialState: {
      isLoading: this.state.isTodoLoading,
      selectedUsername: this.state.selectedUsername,
    },
  });

  new TodoForm({
    $target: $todoListContainer,
    onSubmit: async (content) => {
      const isFirstTodoAdd = this.state.todos.length === 0;

      const todo = {
        content,
        isCompleted: false,
      };
      // 낙관적 업데이트 코드
      this.setState({
        ...this.state,
        todos: [...this.state.todos, todo],
      });

      await request(`/${this.state.selectedUsername}`, {
        method: "POST",
        body: JSON.stringify({
          content,
          isCompleted: false,
        }),
      });

      if (isFirstTodoAdd) {
        await fetchUserlist();
      }
      await fetchTodo();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    header.setState({
      isLoading: this.state.isTodoLoading,
      selectedUsername: this.state.selectedUsername,
    });

    todoList.setState({
      isLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUsername: this.state.selectedUsername,
    });

    userList.setState(this.state.userList);

    this.render();
  };

  this.render = () => {
    const { selectedUsername } = this.state;
    $todoListContainer.style.display = selectedUsername ? "block" : "none";
  };

  const todoList = new TodoList({
    $target: $todoListContainer,
    initialState: {
      isLoading: this.state.isTodoLoading,
      todos: this.state.todos,
      selectedUsername: this.state.selectedUsername,
    },
    onToggle: async (id) => {
      //낙관적 업데이트
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);

      const nextTodos = [...this.state.todos];

      nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted;

      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.selectedUsername}/${id}/toggle?delay=3000`, {
        method: "PUT",
      });

      await fetchTodo();
    },
    onRemove: async (id) => {
      //낙관적 업데이트
      const todoIndex = this.state.todos.findIndex((todo) => todo._id === id);

      const nextTodos = [...this.state.todos];

      nextTodos.splice(todoIndex, 1);

      this.setState({
        ...this.state,
        todos: nextTodos,
      });

      await request(`/${this.state.selectedUsername}/${id}?delay=3000`, {
        method: "DELETE",
      });
      await fetchTodo();
    },
  });

  const fetchUserlist = async () => {
    const userList = await request("/users");
    this.setState({
      ...this.state,
      userList,
    });
  };

  const fetchTodo = async () => {
    const { selectedUsername } = this.state;

    if (selectedUsername) {
      this.setState({
        ...this.state,
        isTodoLoading: true,
      });
      const todos = await request(`/${selectedUsername}?delay=2000`);
      this.setState({
        ...this.state,
        todos,
        isTodoLoading: false,
      });
    }
  };

  const init = async () => {
    await fetchUserlist();

    //url 특정 사용자 값 존재하는 경우
    const { pathname } = location;

    console.log(pathname);

    if (pathname.length > 1) {
      this.setState({
        ...this.state,
        selectedUsername: pathname.substring(1),
      });

      await fetchTodo();
    }
  };

  this.render();
  init();
}
