import React, { useState } from "react";

import { Book, PimpedBook } from "./components/Book";
import {Search} from "./components/Search"
import data from "./models/books.json";

function App() {
  // const books = data
  const [books] = useState(data);
  const [keyword, setKeyword] = useState('')
  const favoBook = books[4];

  function addBook(id) {
    console.log('click happened to id: ' + id)
  }

  return (
    <Booklist>
      <Search keyword={keyword} setKeyword={setKeyword}/>
      <PimpedBook>
        <h2>{favoBook.volumeInfo.title}</h2>
        <p>{favoBook.volumeInfo.description}</p>
      </PimpedBook>

      <Book handleClick={addBook} id={favoBook.id} title={favoBook.volumeInfo.title} book={favoBook} />

      {books.map((item) => (
        <PimpedBook>
          <h2>{item.volumeInfo.title}</h2>
          <p>{item.volumeInfo.description}</p>
        </PimpedBook>
      ))}
    </Booklist>
  );
}

function Booklist(props) {
  return (
    <div>
      <h1>Tobia's library</h1>
      <div className="booklist-container">{props.children}</div>
    </div>
  );
}

export default App;