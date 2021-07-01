import React from "react";
import { Component } from "react";
import { Table, FormGroup, Label, Input } from "reactstrap";
import { getOrders, getOrdersByFilter } from "../../api/JavadShop.api";
import CustomPagination from "../../components/Pagination.component";

class OrdersPanel extends Component {
  state = {
    orders: [],
    orderShow: [],
    currentPage: 1,
    orderPerPage: 5,
  };

  async componentDidMount() {
    this.setState({ orders: await getOrders() });
    this.setState({ orderShow: await this.state.orders.slice(0, 5) });
    console.log(
      this.state.orders.map((item) => {
        console.log(item.name);
      })
    );
    console.log(this.state.orders);
  }

  orderFilter = async (event) => {
    if (event.target.value == "yes") {
      this.setState({ orders: await getOrdersByFilter(event.target.value) });
      this.setState({
        orderShow: await this.state.orders.slice(0, 5),
        currentPage: 1,
      });
    } else {
      this.setState({ orders: await getOrdersByFilter(event.target.value) });
      this.setState({
        orderShow: await this.state.orders.slice(0, 5),
        currentPage: 1,
      });
    }
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between align-items-center m-5 ">
          <div>
            <FormGroup tag="fieldset" className="d-flex">
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="radio1"
                    value="yes"
                    onClick={this.orderFilter}
                  />
                  {"سفارش های تحویل داده شده"}
                </Label>
              </FormGroup>
              <FormGroup check className="ms-5">
                <Label check>
                  <Input
                    type="radio"
                    value="no"
                    name="radio1"
                    onClick={this.orderFilter}
                  />
                  {"سفارش های درانتظار ارسال "}
                </Label>
              </FormGroup>
            </FormGroup>
          </div>
          <>
            <h3>مدیریت سفارش ها</h3>
          </>
        </div>
        <div className="m-5">
          <Table bordered striped dir="rtl">
            <thead>
              <tr>
                <th> نام کاربر </th>
                <th> مجموع مبلغ </th>
                <th> زمان ثبت سفارش </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.orderShow.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.totalPrice}</td>
                    <td className="d-flex justify-content-center">
                      {item.orderRegister}
                    </td>
                    <td>
                      <span type='button' className="d-flex justify-content-center text-primary">
                        برسی سفارش
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div>
            <div className="d-flex justify-content-center pt-0 mt-0">
              <CustomPagination
                perPage={this.state.orderPerPage}
                totalPage={this.state.orders.length}
                paginate={(pageNumber) =>
                  this.setState({
                    ...this.state,
                    currentPage: pageNumber,
                    orderShow: this.state.orders.slice(
                      pageNumber * this.state.orderPerPage - 5,
                      pageNumber * this.state.orderPerPage
                    ),
                  })
                }
              />
            </div>
            <div className="d-flex justify-content-center pt-0 mt-0">
              <span className="shadow bg-warning p-1 ps-3 pe-3 pt-0 mt-0 rounded text-secondary">
                ( {this.state.currentPage}/
                {Math.ceil(this.state.orders.length / 5)} )
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default OrdersPanel;
