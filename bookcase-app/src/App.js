import React, { useState } from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Book } from "./components/Book";
import { Search } from "./components/Search";
import data from "./models/books.json";
import { Bookcase } from "./components/Bookcase";
import { Booklist } from "./components/Booklist";

export function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");
  const [basket, setBasket] = useState([]);


  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  //code below creates a basket for the book
  function addBookToCart(book) {
    const newBasket = basket;
    newBasket.push(book);
    setBasket(newBasket);
    console.log({ newBasket, basket });
  }

  return (
    <>
      <Routes>
        <Route
          path="/Search"
          element={
            <Booklist>
              <Search
                keyword={keyword}
                setKeyword={setKeyword}
                handleSubmit={findBooks}
              />

              {books.map((book) => (
                <Book
                  key={book.id}
                  book={book}
                  handleClick={() => addBookToCart(book)}
                  onClick={() => addBookToCart(book)}
                />
              ))}
            </Booklist>
          }
        ></Route>
        <Route path="/AboutUs" element={<h1>About us</h1>}></Route>
        <Route path="/Bookcase" element={<Bookcase books={basket} key={books.id}/>}></Route>
      </Routes>
    </>
  );
}
