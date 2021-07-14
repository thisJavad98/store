import React from "react";
import { Component } from "react";
import { Table, Button } from "reactstrap";
import { getProducts, editeInvntory } from "../../api/JavadShop.api";
import CustomPagination from "../../components/Pagination.component";

class QuantityPanel extends Component {
  state = {
    products: [],
    productShow: [],
    currentPage: 1,
    productPerPage: 5,
    changeItems: [],
    btnStyle: false,
  };
  async componentDidMount() {
    this.setState({ products: await getProducts(), changeItems: [] });
    this.setState({
      ...this.state,
      productShow: this.state.products.slice(0, 5),
    });
  }

  onChangeHandel(newValue, index, changeType) {
    this.setState({
      btnStyle: true,
      changeItems: [
        ...this.state.changeItems,
        { index: index, changeType: changeType, newValue: newValue },
      ],
    });
    console.log(newValue, index, changeType);
  }

  updateTable() {
    this.state.changeItems.map(
      async (item) =>
        await editeInvntory(item.index, { [item.changeType]: item.newValue })
    );
  }
  onSkipChange(e) {
    console.log(e.target);
    if (e.key === "Escape") console.log("areeeeeeeee");
    else console.log("ridiiii");
  }
  cancelChange() {
    this.setState({ changeItems: [] });
  }
  render() {
    return (
      <>
        <div className={"d-flex justify-content-between m-5 "}>
          <div>
            <a href="http://localhost:3000/panel-quantity">
              <Button
                onClick={() => (this.state.btnStyle ? this.updateTable() : "")}
                color={"success"}
                className={`ps-4 pe-4 p-2 ${
                  this.state.btnStyle ? "" : "disabled"
                }`}
              >
                ذخیره
              </Button>
            </a>
            {this.state.btnStyle ? (
              <a href="http://localhost:3000/panel-quantity">
                <Button
                  onClick={() => this.cancelChange}
                  color={"danger"}
                  className={`ps-4 pe-4 p-2 ms-3 `}
                >
                  پاک کردن تغیرات
                </Button>
              </a>
            ) : (
              ""
            )}
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
              {this.state.productShow.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>
                      <input
                        type="number"
                        className="border-0 w-100 bg-transparent"
                        defaultValue={item.price}
                        name={"price"}
                        onKeyPress={(e) => this.onSkipChange(e)}
                        onChange={(e) =>
                          this.onChangeHandel(
                            +e.target.value,
                            item.id,
                            e.target.name
                          )
                        }
                      ></input>
                    </td>
                    <td>
                      <input
                        type="number"
                        className="border-0 w-100 bg-transparent"
                        defaultValue={item.inventory}
                        name={"inventory"}
                        onKeyPress={(e) => this.onSkipChange(e)}
                        onChange={(e) =>
                          this.onChangeHandel(
                            +e.target.value,
                            item.id,
                            e.target.name
                          )
                        }
                      ></input>
                    </td>
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
