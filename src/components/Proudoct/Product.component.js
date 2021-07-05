import React from "react";
import { Component } from "react";

class ProductCard extends Component {
  render() {
    return (
      <div className="border  shadow-sm rounded row p-3 pe-0 ">
        <div className="col-4">
          <img
            className="rounded ms-3 "
            width="100px"
            height="100px"
            src={this.props.productData.avatar}
          />
        </div>
        <div className="col">
          <div className="h4 ">{this.props.productData.name}</div>
          <div className="h5 ">{this.props.productData.price} تومان </div>
        </div>
      </div>
    );
  }
}
export default ProductCard;
