import React, { useState } from 'react';
import Book from './components/Book';
import data from './models/books.json';

//useState 
function App() {
  const [books] = useState(data);
  return <div>
    <h1> Tara's library</h1>
{books.map((book) => <Book key={book.id} book={book} />)}
</div> 
}

export default App;