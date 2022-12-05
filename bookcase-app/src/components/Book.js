import React from 'react';
import PropTypes from "prop-types";

function Book({book}) {
  const { title } = book.volumeInfo;
  const { authors } = book.volumeInfo;
  const { retailPrice } = book.saleInfo;
  return (
    <div 
    style={{
      backgroundColor: "#d9ccff",
      padding: "10px",
      marginBottom: "4px",
    }}>
      <h3>{title}</h3>
      <h4>
        {authors ?
      authors.join(', '):
      "No Authors Listed"
      }
      </h4>
      {retailPrice && retailPrice.amount < 3 ? "Great deal" : "Bestseller"}
    </div>
    // above is a condition inside the react component. if retailPrice exists, AND if retail price property, amount is higher than 2 then print retailprice.amount, and if not it is free.
  );
}

Book.propTypes = {
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
}

export default Book;
