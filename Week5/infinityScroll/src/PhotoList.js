export default function PhotoList({ $target, initialState, onScrollEnd }) {
  let initialize = false;
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!initialize) {
      $photoList.innerHTML = `
        <ul class="PhotoList_photos"></ul>
      `;
      initialize = true;
    }

    const { photos } = this.state;

    const $photos = $photoList.querySelector(".PhotoList_photos");

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.setAttribute("class", "photo");
        $li.innerHTML = `<img src=${photo.imagePath}>`;

        $photos.appendChild($li);
      }
    });
  };

  window.addEventListener("scroll", () => {
    const { isLoading, totalCount, photos } = this.state;
    const isScrollEnd =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (isScrollEnd && !isLoading && photos.length < totalCount) {
      onScrollEnd();
    }
  });
}
