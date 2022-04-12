function TodoForm({ $target, onSubmit }) {
  // new 생성자 방어코드
  if (!!!new.target) {
    alert("new 생성자를 사용해 컴포넌트를 불러오세요.");
    return;
  }

  const $form = document.createElement("form");

  $target.appendChild($form);

  let isInit = false;

  this.render = () => {
    $form.innerHTML = `
      <input type="text" name="todo"/>
      <button>Add</button>
    `;

    if (!isInit) {
      $form.addEventListener("submit", (e) => {
        e.preventDefault();

        const $todo = document.querySelector("input[name=todo]");

        const text = $todo.value;

        if (text.length > 1) {
          $todo.value = "";
          onSubmit(text);
        }
      });

      isInit = true;
    }
  };

  this.render();
}

export default TodoForm;
