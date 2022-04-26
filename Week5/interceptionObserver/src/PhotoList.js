export default function PhotoList({ $target, initialState, onScrollEnd }) {
  let initialize = false;
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);

  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          if (this.state.totalCount > this.state.photos.length) onScrollEnd();
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  let $lastLi = null;

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

    const $nextLi = $photos.querySelector("li:last-child");

    if ($nextLi !== null) {
      if ($lastLi !== null) {
        observer.unobserve($lastLi);
      }

      $lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };

  // window.addEventListener("scroll", () => {
  //   const { isLoading, totalCount, photos } = this.state;
  //   const isScrollEnd =
  //     window.innerHeight + window.scrollY >= document.body.offsetHeight;

  //   if (isScrollEnd && !isLoading && photos.length < totalCount) {
  //     onScrollEnd();
  //   }
  // });
}
