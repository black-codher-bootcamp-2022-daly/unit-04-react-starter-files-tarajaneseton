import React from 'react';
import PropTypes from "prop-types";

function Book({book}) {
  const { title } = book.volumeInfo;
  const { authors } = book.volumeInfo;
  const {subtitle} = book.volumeInfo;
  const { retailPrice } = book.saleInfo;
  const { description } = book.volumeInfo;
  return (
    <div 
    style={{
      backgroundColor: "#d9ccff",
      padding: "10px",
      marginBottom: "4px",
      fontFamily: "Arial",
    }}>
      <h3>{title}</h3>
      <h4>
        {authors ?
      authors.join(', '):
      "No Authors Listed"
      }
      </h4>
      <p>{subtitle}</p>
      <p>{retailPrice && retailPrice.amount}</p>
      <p>{description}</p>
    </div>
    // above is a condition inside the react component. if retailPrice exists, print retail price amount, if not return nothing
  );
}
// below are prop types that are checking whether Book has the below properties, title, authors, description and sale info. with isrequired, if we dont pass one of the required properties then the code will break. Shape 
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
