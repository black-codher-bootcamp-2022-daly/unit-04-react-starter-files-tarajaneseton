import { Book } from "./Book.js";

export const Bookcase = ({books}) => {

  return (
    <div>
      {books[0] ? (
          <div>
            <h1>Cart</h1>
            <h2>{books.length}</h2>
            {books.map((item) => (
            <Book book={item} key={item.id} isInTheBasket={true} />
            ))}
            {/* // {books.map((book) => book.volumeInfo.title) } */}
        </div>
        ) : (
        <h2>no books yet</h2>
    )}
     </div>
  );
}