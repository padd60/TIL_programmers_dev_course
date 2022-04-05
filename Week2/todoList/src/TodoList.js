function TodoList({ $target, initialState }) {
  // new 생성자 방어코드
  if (!!!new.target) {
    alert("new 생성자를 사용해 컴포넌트를 불러오세요.");
    return;
  }

  const $todoList = document.createElement("div");

  $target.appendChild($todoList);

  // state 및 initialState validation 코드
  this.state = Array.isArray(initialState) ? initialState : [];

  this.setState = (nextState) => {
    // state 및 initialState validation 코드
    this.state = Array.isArray(nextState) ? nextState : [];
    this.render();
  };

  this.render = () => {
    $todoList.innerHTML = `
      <ul>
        ${this.state.map(({ text }) => `<li>${text}</li>`).join("")}
      </ul>
    `;
  };

  this.render();
}

export default TodoList;
