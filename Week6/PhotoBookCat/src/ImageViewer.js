export default function ImageViewer({ $target, onClose }) {
  const $ImageViewer = document.createElement("div");

  $ImageViewer.className = "ImageViewer Modal";
  $target.appendChild($ImageViewer);

  this.state = {
    selectedImageUrl: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    $ImageViewer.style.display = this.state.selectedImageUrl ? "block" : "none";

    $ImageViewer.innerHTML = `
      <div class="content">
        <img src="${this.state.selectedImageUrl}"/>
      </div>
    `;
  };

  this.render();

  window.addEventListener("keyup", (e) => {
    // esc 누르면 onClose 호출
    if (e.key === "Escape") {
      onClose();
    }
  });

  $ImageViewer.addEventListener("click", (e) => {
    if (Array.from(e.target.classList).includes("Modal")) {
      onClose();
    }
  });
}
