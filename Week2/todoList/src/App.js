import Header from "./Header.js";
import { setItem } from "./storage.js";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";

function App({ $target, initialState }) {
  // new 생성자 방어코드
  if (!!!new.target) {
    alert("new 생성자를 사용해 컴포넌트를 불러오세요.");
    return;
  }

  new Header({ $target, text: "Simple Todo List" });

  new TodoForm({
    $target,
    onSubmit: (text) => {
      const nextState = [...todoList.state, { text }];

      todoList.setState(nextState);

      setItem("todos", JSON.stringify(nextState));
    },
  });

  const todoList = new TodoList({
    $target,
    initialState,
  });
}

export default App;
