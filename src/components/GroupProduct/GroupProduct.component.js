import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../Proudoct/Product.component";

class ProductGroup extends Component {
  render() {
    return (
      <>
        <span className=" h3 text-primary">
          <Link to={this.props.title} className="text-decoration-none">
            {this.props.title.split("/")[2]}
            {this.props.flagHomePage ? (
              <span className="h6"> (مشاهده کامل لیست کالا) </span>
            ) : (
              ""
            )}
          </Link>
        </span>
        <br></br>

        <div className="d-flex justify-content-between row ">
          {this.props.data ? (
            this.props.data.map((item, index) =>
              this.props.flagHomePage ? (
                index < 6 ? (
                  <div className="col-md-5 col-xl-3 m-4" key={item.id}>
                    <ProductCard productData={item} />
                  </div>
                ) : (
                  ""
                )
              ) : (
                <div className="col-md-5 col-xl-3 m-4" key={item.id}>
                  <ProductCard productData={item} />
                </div>
              )
            )
          ) : (
            <>
              <img height={"300"} src={"/assets/svg/Empty.svg"} />
            </>
          )}
        </div>
      </>
    );
  }
}
export default ProductGroup;
