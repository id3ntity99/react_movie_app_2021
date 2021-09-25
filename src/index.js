import React from "react";
import ReactDOM from "react-dom";

//css
import "./index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://images-na.ssl-images-amazon.com/images/I/61HlS-BupKL._AC_UL200_SR200,200_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>Back to results System Design Interview</h1>;

const Author = () => <h4>Alex Xu</h4>;

ReactDOM.render(<BookList />, document.getElementById("root"));
