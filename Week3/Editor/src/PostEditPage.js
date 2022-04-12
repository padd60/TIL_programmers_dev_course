import Editor from "./Editor.js";
import LinkButton from "./LinkButton.js";
import { request } from "./request.js";
import { getItem, removeItem, setItem } from "./storage.js";

export default function PostEditPage({ $target, initialState }) {
  const $page = document.createElement("div");

  this.state = initialState;

  let TEMP_POST_SAVE_KEY = `temp-post-${this.state.postId}`;

  let timer = null;

  const editor = new Editor({
    $target: $page,
    initialState: this.state.post,
    onEditing: async (post) => {
      if (!timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(async () => {
        setItem(TEMP_POST_SAVE_KEY, {
          ...post,
          tempSaveDate: new Date(),
        });

        const isNew = this.state.postId === "new";
        if (isNew) {
          const createdPost = await request("/posts", {
            method: "POST",
            body: JSON.stringify(post),
          });

          history.replaceState(null, null, `/posts/${createdPost.id}`);
          removeItem(TEMP_POST_SAVE_KEY);

          this.setState({
            postId: createdPost.id,
          });
        } else {
          await request(`/posts/${post.id}`, {
            method: "PUT",
            body: JSON.stringify(post),
          });
          removeItem(TEMP_POST_SAVE_KEY);
        }
      }, 2000);
    },
  });

  this.setState = async (nextState) => {
    if (this.state.postId !== nextState.postId) {
      TEMP_POST_SAVE_KEY = `temp-post-${nextState.postId}`;
      this.state = nextState;

      if (this.state.postId === "new") {
        const post = getItem(TEMP_POST_SAVE_KEY, {
          title: "",
          content: "",
        });
        editor.setState(post);
        this.render();
      } else {
        await fetchPost();
      }

      return;
    }

    this.state = nextState;
    this.render();

    editor.setState(
      this.state.post || {
        title: "",
        content: "",
      }
    );
  };
  this.render = () => {
    $target.appendChild($page);
  };

  const fetchPost = async () => {
    const { postId } = this.state;
    if (postId !== "new") {
      const post = await request(`/posts/${postId}`);

      const tempPost = getItem(TEMP_POST_SAVE_KEY, {
        title: "",
        content: "",
      });

      if (tempPost.tempSaveDate && tempPost.tempSaveDate > post.updated_at) {
        if (confirm("저장되지 않는 임시데이터가 있습니다. 불러올까요?")) {
          this.setState({
            ...this.state,
            post: tempPost,
          });
          return;
        }
      }

      this.setState({
        ...this.state,
        post,
      });
    }
  };

  new LinkButton({
    $target: $page,
    initialState: {
      text: "목록으로 이동",
      link: "/",
    },
  });
}
