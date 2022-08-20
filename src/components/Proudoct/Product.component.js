import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

class ProductCard extends Component {
  render() {
    return (
      <Link
        to={`/product/${this.props.productData.name}`}
        className="text-decoration-none"
      >
        <div
          className="border shadow rounded row p-3 "
          style={{
            minHeight: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="col-4">
            <img
              alt={this.props.productData.name}
              className="rounded ms-2 "
              width="100px"
              height="100px"
              src={this.props.productData.avatar}
              onError={(event) => {
                event.target.src = "/assets/image/image-not-found-scaled-1150x647.png";
                event.onerror = null;
              }}
            />
          </div>
          <div className="col me-3">
            <div className="h4 text-dark">{this.props.productData.name}</div>
            <div className="h5 text-secondary pt-2">
              {this.props.productData.price} تومان{" "}
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
export default ProductCard;
