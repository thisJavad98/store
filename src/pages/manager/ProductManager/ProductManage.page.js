import React from "react";
import { Component } from "react";
import CustomPagination from "../../../components/Pagination.component";
import PeoductManagerModal from "../ProductManager/ProductManager.modal";
import { Table, Input, Form } from "reactstrap";
import {
  getGroupProduct,
  getProductByFilter,
  getProducts,
  deleteProduct,
} from "../../../api/JavadShop.api";

class ManageProduct extends Component {
  state = {
    products: [],
    productShow: [],
    groupTitle: [],
    currentPage: 1,
    productPerPage: 4,
  };

  //get data
  async componentDidMount() {
    this.setState({ ...this.state, products: await getProducts() });
    this.setState({ ...this.state, groupTitle: await getGroupProduct() });
    this.setState({
      ...this.state,
      productShow: this.state.products.slice(0, 4),
    });
  }

  productFilter = async (event) => {
    console.log(event.target.value.split("/")[1]);

    if (event.target.value === "دسته بندی کالا ها / همه") {
      this.setState({ products: await getProducts() });
      this.setState({
        productShow: await this.state.products.slice(0, 4),
        currentPage: 1,
      });
    } else {
      this.setState({
        products: await getProductByFilter(event.target.value.split("/")[1]),
      });
      this.setState({
        productShow: await this.state.products.slice(0, 4),
        currentPage: 1,
      });
    }
  };
  deleteProduct = async (productId) => {
    alert(`کالای  ${productId.name}  با موفقیت حذف شد !!!`);
    await deleteProduct(productId.id);
  };
  render() {
    return (
      <>
        <div className="d-flex justify-content-between m-5 ">
          <div className="bg-success p-2 text-light rounded">
            <PeoductManagerModal
              id={""}
              name={""}
              group={""}
              groupTitle={""}
              discription={""}
              avatar={""}
              buttonLabel="افزودن کالا"
            />
          </div>

          <>
            <h3>مدیریت کالا ها</h3>
          </>
        </div>
        <div className="m-5">
          <Table bordered striped dir="rtl">
            <thead>
              <tr>
                <th>تصویر</th>
                <th>نام کالا</th>
                <th>
                  <Form action="/">
                    <Input
                      type="select"
                      name="select"
                      id="groupProducts"
                      onChange={this.productFilter}
                    >
                      <option>دسته بندی کالا ها / همه</option>
                      {this.state.groupTitle.map((item) => {
                        return (
                          <option key={item.id}>
                            {" "}
                            {item.groupTitle}/{item.title}{" "}
                          </option>
                        );
                      })}
                    </Input>
                  </Form>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.state.productShow.map((item) => (
                <tr key={item.id}>
                  <th className="d-flex justify-content-center">
                    <img
                      alt={item.name}
                      className="rounded-circle"
                      width="80px"
                      height="80px"
                      src={item.avatar}
                    />
                  </th>
                  <td>{item.name}</td>
                  <td>
                    {item.groupTitle} / {item.group}
                  </td>
                  <td>
                    <span className="m-2 text-primary">
                      <PeoductManagerModal
                        buttonLabel="ویرایش"
                        id={item.id}
                        name={item.name}
                        group={item.group}
                        groupTitle={item.groupTitle}
                        discription={item.discription}
                        avatar={item.avatar}
                      />
                    </span>
                    <a
                      className="m-2 text-primary text-decoration-none"
                      href="http://localhost:3000/panel-product"
                      onClick={this.deleteProduct.bind(this, item)}
                    >
                      حذف
                    </a>
                  </td>
                </tr>
              ))}
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
                      pageNumber * this.state.productPerPage - 4,
                      pageNumber * this.state.productPerPage
                    ),
                  })
                }
              />
            </div>
            <div className="d-flex justify-content-center pt-0 mt-0">
              <span className="shadow bg-warning p-1 ps-3 pe-3 pt-0 mt-0 rounded text-secondary">
                ( {this.state.currentPage}/
                {Math.ceil(this.state.products.length / 4)} )
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default ManageProduct;
