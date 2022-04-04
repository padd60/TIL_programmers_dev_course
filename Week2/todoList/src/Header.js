function Header({ $target, text }) {
  const $header = document.createElement("h1");

  $target.appendChild($header);

  this.render = () => {
    $header.innerHTML = text;
  };

  this.render();
}
