function Header({ $target, text }) {
  // new 생성자 방어코드
  if (!!!new.target) {
    alert("new 생성자를 사용해 컴포넌트를 불러오세요.");
    return;
  }

  const $header = document.createElement("h1");

  $target.appendChild($header);

  this.render = () => {
    $header.innerHTML = text;
  };

  this.render();
}

export default Header;
