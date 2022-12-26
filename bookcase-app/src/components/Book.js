import React from "react";
import PropTypes from "prop-types";

export function Book(props, handleClick) {
  return (
    <div
      style={{
        backgroundColor: "#d2afff",
        padding: "10px",
        marginBottom: "4px",
        fontFamily: "verdana",
      }}
    >
      <h2>{props.book.volumeInfo.title}</h2>
      <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title} />
      <p>{props.book.volumeInfo.description}</p>
      {/* <h4>{props.saleInfo.retailPrice.currencyCode.amount}</h4> */}
      <button onClick={() => props.handleClick(props.id)}> { props.isInTheBasket ? "Remove" : "Add +" }</button>
      {/* <button onClick={handleClick}> Add Book</button> */}
      {/* {props.retailPrice && props.retailPrice.amount < 3
        ? "Great deal"
        : "Best Seller"} */}
    </div>
  );
}

// this function below
// export function PimpedBook(props) {
//   return (
//     <div style={{ padding: "12px", border: "1px solid", marginBottom: "4px", backgroundColor: "blue" }}>
//       {props.children}
//     </div>
//   );
// }

Book.propTypes = {
  id: PropTypes.string,
  handleClick: PropTypes.func,
  isInTheBasket: PropTypes.bool,
  retailPrice: PropTypes.shape({
    amount: PropTypes.number,
  }),
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};
