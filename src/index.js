import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

const books = [
  {
    id: 1,
    title: "System Design Interview",
    author: "Alex Xu",
    img: "https://images-na.ssl-images-amazon.com/images/I/61HlS-BupKL._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 2,
    title: "Python Crash Course, 2nd Edition",
    author: "Eric Matthes",
    img: "https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg",
  },
  {
    id: 3,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    img: "https://images-na.ssl-images-amazon.com/images/I/61uRpcdPhNL._AC_UL200_SR200,200_.jpg",
  },
];
function BookList() {
  return (
    <section className="bookList">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

function Book(props) {
  const { img, title, author } = props;

  const complex = (author, event) => {
    console.log(author);
    console.log(event.target);
  };
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={(event) => complex(author, event)}>
        Greeting
      </button>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById("root"));
