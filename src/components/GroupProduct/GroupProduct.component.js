import React from "react";
import { Component } from "react";
import ProductCard from "../Proudoct/Product.component";

class ProductGroup extends Component {
  render() {
    return (
      <>
        <span className=" h3 text-primary">
          <a href={this.props.title} className="text-decoration-none">
            {this.props.title.split("/")[2]}
          </a>
        </span>
        <br></br>

        <div className="d-flex justify-content-between row ">
          {this.props.data.map((item, index) =>
            index < 6 ? (
              <div className="col-md-5 col-xl-3 m-4" key={item.id} >
                <ProductCard productData={item}/>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </>
    );
  }
}
export default ProductGroup;
