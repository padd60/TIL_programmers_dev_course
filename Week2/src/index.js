import App, { printToday } from "./App.js";
import { DOMAIN_NAME, PORT } from "./constants.js";

const $body = document.querySelector("body");

$body.innerHTML =
  $body.innerHTML + `<div>${DOMAIN_NAME}</div>` + `<div>${PORT}</div>`;

printToday();
new App();
