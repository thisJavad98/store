import React from "react";
import { Component } from "react";
import { Table, Button } from "reactstrap";
import { getProducts } from "../../api/JavadShop.api";
import CustomPagination from "../../components/Pagination.component";

class QuantityPanel extends Component {
  state = {
    products: [],
    productShow: [],
    currentPage: 1,
    productPerPage: 5,
  };
  async componentDidMount() {
    this.setState({ products: await getProducts() });
    this.setState({
      ...this.state,
      productShow: this.state.products.slice(0, 5),
    });
    console.log(this.state.products.map((item) => console.log(item.name)));
    console.log(this.state.products);
  }
  render() {
    return (
      <>
        <div className="d-flex justify-content-between m-5 ">
          <div>
            <Button color="success" className="ps-4 pe-4 p-2">
              ذخیره
            </Button>
          </div>
          <>
            <h3>مدیریت موجودی و قیمت ها</h3>
          </>
        </div>
        <div className="m-5">
          <Table bordered striped dir="rtl">
            <thead>
              <tr>
                <th> کالا </th>
                <th> قیمت </th>
                <th> موجودی </th>
              </tr>
            </thead>
            <tbody>
              {this.state.productShow.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.inventory}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>
            <div className="d-flex justify-content-center pt-0 mt-0">
              <CustomPagination
                perPage={this.state.productPerPage}
                totalPage={this.state.products.length}
                paginate={(pageNumber) =>
                  this.setState({
                    ...this.state,
                    currentPage: pageNumber,
                    productShow: this.state.products.slice(
                      pageNumber * this.state.productPerPage - 5,
                      pageNumber * this.state.productPerPage
                    ),
                  })
                }
              />
            </div>
            <div className="d-flex justify-content-center pt-0 mt-0">
              <span className="shadow bg-warning p-1 ps-3 pe-3 pt-0 mt-0 rounded text-secondary">
                ( {this.state.currentPage}/
                {Math.ceil(this.state.products.length / 5)} )
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default QuantityPanel;
