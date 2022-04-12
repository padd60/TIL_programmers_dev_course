import HomePage from "./src/pages/Homepage.js.js";
import ProductPage from "./src/pages/ProductPage.js";

export default function App({ $target }) {
  const homePage = new HomePage({ $target });
  const productPage = new ProductPage({ $target, initialState: {} });

  this.route = () => {
    const { pathname } = location;

    $target.innerHTML = "";

    if (pathname === "/") {
      //homepage draw
      homePage.render();
    } else if (pathname.indexOf("/products/") > -1) {
      // prodect page draw
      const [, , productId] = pathname.split("/");

      productPage.setState({
        productId,
      });
    } else {
      // 404 page
      $target.innerHTML = "<h1>404 Not Found!</h1>";
    }
  };

  this.init = () => {
    this.route();
  };

  window.addEventListener("click", (e) => {
    if (e.target.className === "link") {
      e.preventDefault();

      const { href } = e.target;

      history.pushState(null, null, href.replace(location.origin, ""));
      this.route();
    }
  });

  window.addEventListener("popstate", () => this.route());

  this.init();
}
