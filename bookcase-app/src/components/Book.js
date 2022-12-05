import React from 'react';
import PropTypes from "prop-types";

function Book(props) {
  const { title } = props.volumeInfo;
  const { retailPrice } = props.saleInfo;
  console.log(props.saleInfo)
  return (
    <div>
      <h3>{title}</h3>
      {retailPrice && retailPrice.amount < 2 ? "Great deal" : "Bestseller"}
    </div>
    // above is a condition inside the react component. if retailPrice exists, AND if retail price property, amount is higher than 2 then print retailprice.amount, and if not it is free.
  );
}

export default Book;
