import React, { useState } from "react";
import Board from "./components/Board";
import Pagination from "./components/Pagination";

function App() {
  const [page, setPage] = useState(0);
  const limit = 10;
  const offset = page * limit;

  const articles = new Array(100).fill(0).map((_, i) => ({
    id: i,
    title: `${i}번 게시물`,
  }));
  return (
    <div>
      <Pagination
        defaultPage={0}
        limit={limit}
        total={articles.length}
        onChange={setPage}
      />
      <Board articles={articles.slice(offset, offset + limit)} />
    </div>
  );
}

export default App;
