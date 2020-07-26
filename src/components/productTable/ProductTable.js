import React from "react";
import PropTypes from "prop-types";
import "./ProductTable.css"
const Product = ({ name, category, price }) => {
  return (
    <div>
      <center>
        <table border="1" width="50%">
          <th className="table-row">name:</th>
          <td className="table-row"> {name}</td>

          <th className="table-row">category:</th>
          <td className="table-row">{category}</td>

          <th className="table-row">price:</th>
          <td className="table-row">{price}</td>
        </table>
      </center>
    </div>
  );
};
Product.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
};
export default Product;
