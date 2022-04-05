function App() {
  this.render = () => {
    alert("hello");
  };
  this.render();
}

export const printToday = () => {
  console.log(new Date().toLocaleString());
};

export default App;
