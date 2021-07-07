import React from "react";
import { Component } from "react";
import { getProductData } from "../../api/JavadShop.api";
import { Button } from "reactstrap";
import { FaPlusCircle } from "react-icons/fa";

class ProductPage extends Component {
  state = {
    productData: {},
    data: {},
    numberOfOrder: 1,
  };
  async componentDidMount() {
    this.setState({
      productData: await getProductData(`${this.props.productName}`),
    });
    this.setState({ data: await this.state.productData[0] });
  }

  render() {
    return (
      <div dir="rtl" className="p-5 m-3">
        <div className="row">
          <div className="col-xl-3">
            <img
              alt={this.state.data.name}
              className="rounded ms-2"
              width="310px"
              height="310px"
              src={this.state.data.avatar}
            />
          </div>
          <div className="col">
            <div className="h1 mt-4">{this.state.data.name}</div>
            <div className="mt-5 h5">
              <span>
                <a
                  className="text-decoration-none"
                  href={`http://localhost:3000/products/${this.state.data.groupTitle}`}
                >
                  {this.state.data.groupTitle}
                </a>
              </span>
              <span className="ms-2 me-2">-</span>
              <span>{this.state.data.group}</span>
            </div>
            <div className="mt-3 h2">
              <span>قیمت : {this.state.data.price} تومان</span>
            </div>
            <div className="mt-5">
              <form>
                <span className=" ms-5 ">
                  <Button color="primary">+</Button>
                  <input
                    style={{
                      width: "35px",
                      textAlign: "center",
                      border: "none",
                    }}
                    value={this.state.numberOfOrder}
                    readOnly
                  ></input>
                  <Button color="primary">-</Button>
                </span>

                <Button color="success" className="p-3" type="submit">
                  <span className="h5">
                    افزدون به سبد خرید <FaPlusCircle />
                  </span>
                </Button>
              </form>
            </div>
          </div>
          <div className="p-5 h3">
            <div className="h2 ">مشخصات کالا :</div>
            <div className="h4 bg-warning h-100 rounded p-3 text-light mt-5 me-4 ">
              {this.state.data.discription}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductPage;
