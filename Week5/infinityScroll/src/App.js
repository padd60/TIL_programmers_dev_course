import PhotoList from "./PhotoList.js";
import { request } from "./request.js";

export default function App({ $target }) {
  const $h1 = document.createElement("h1");
  $h1.innerText = "Cat Photos";
  $h1.style.textAlign = "center";
  $target.appendChild($h1);

  this.state = {
    limits: 5,
    nextStart: 0,
    photos: [],
    totalCount: 0,
    isLoading: false,
  };

  const photoListComponent = new PhotoList({
    $target,
    initialState: {
      isLoading: this.state.isLoading,
      photos: this.state.photos,
      totalCount: this.state.totalCount,
    },
    onScrollEnd: async () => {
      await fetchPhotos();
    },
  });

  this.setState = (nextState) => {
    this.state = nextState;

    photoListComponent.setState({
      isLoading: this.state.isLoading,
      photos: nextState.photos,
      totalCount: this.state.totalCount,
    });
  };

  const fetchPhotos = async () => {
    this.setState({
      ...this.state,
      isLoading: true,
    });

    const { limits, nextStart } = this.state;
    const photos = await request(
      `/cat-photos?_limit=${limits}&_start=${nextStart}`
    );
    this.setState({
      ...this.state,
      nextStart: nextStart + limits,
      photos: [...this.state.photos, ...photos],
      isLoading: false,
    });
  };

  const initialize = async () => {
    const totalCount = await request("/cat-photos/count");

    this.setState({
      ...this.state,
      totalCount,
    });

    await fetchPhotos();
  };

  initialize();
}
