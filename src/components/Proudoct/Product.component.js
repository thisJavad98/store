import React from "react";
import { Component } from "react";

class ProductCard extends Component {
  render() {
    return (
      <a href={`http://localhost:3000/product/${this.props.productData.name}`} className='text-decoration-none'>
        <div className="border shadow rounded row p-3 pe-0 ">
          <div className="col-4">
            <img
              className="rounded ms-2 "
              width="100px"
              height="100px"
              src={this.props.productData.avatar}
            />
          </div>
          <div className="col me-3">
            <div className="h4 text-dark">{this.props.productData.name}</div>
            <div className="h5 text-secondary pt-2">
              {this.props.productData.price} تومان{" "}
            </div>
          </div>
        </div>
      </a>
    );
  }
}
export default ProductCard;
