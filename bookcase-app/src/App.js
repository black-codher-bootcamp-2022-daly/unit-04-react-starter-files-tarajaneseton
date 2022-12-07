import React, { useState } from "react";
import Book from "./components/Book";
import data from "./models/books.json";

//useState
function App() {
  const [books] = useState(data);

  return (
  <Booklist>
    {books.map((book) => {
        <Book key={book.id} book={book} />
    ))}
  </Booklist);
}

function Booklist(props) {
  return (
    <div>
      <h1>Tara's library</h1>
    <div className="booklist-container">{props.children}</div>
    </div>
  );
}

export default App;
