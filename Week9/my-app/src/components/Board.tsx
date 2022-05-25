import React from "react";

interface propsType {
  articles: { id: number; title: string }[];
}

const Board = ({ articles }: propsType) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          {article.id} | {article.title}
        </li>
      ))}
    </ul>
  );
};

export default Board;
