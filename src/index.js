import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

const books = [
  {
    title: "System Design Interview",
    author: "Alex Xu",
    img: "https://images-na.ssl-images-amazon.com/images/I/61HlS-BupKL._AC_UL200_SR200,200_.jpg",
  },
  {
    title: "Python Crash Course, 2nd Edition",
    author: "Eric Matthes",
    img: "https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg",
  },
];
function BookList() {
  return (
    <section className="bookList">
      <Book
        title={books[0].title}
        author={books[0].author}
        img={books[0].img}
      />
      <Book
        title={books[1].title}
        author={books[1].author}
        img={books[1].img}
      />
    </section>
  );
}

function Book({ img, title, author }) {
  //const { img, title, author } = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p></p>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
