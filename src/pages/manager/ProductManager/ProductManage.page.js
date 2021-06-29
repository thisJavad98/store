import React from "react";
import { Component } from "react";
import CustomPagination from "../../../components/Pagination.component";
import PeoductManagerModal from "../ProductManager/ProductManager.modal";
import { Table, Input, Form } from "reactstrap";
import {
  getGroupProduct,
  getProductByFilter,
  getProducts,
} from "../../../api/JavadShop.api";

class ManageProduct extends Component {
  state = {
    products: [],
    productShow: [],
    groupTitle: [],
    currentPage: 1,
    productPerPage: 5
  };

  //get data
  async componentDidMount() {
    this.setState({...this.state, products: await getProducts() });
    this.setState({...this.state, groupTitle: await getGroupProduct() });
    this.setState({...this.state,productShow: this.state.products.slice(0,5)});
  }

  productFilter = async (event) => {
    console.log(event.target.value.split("/")[1]);

    if (event.target.value === "دسته بندی کالا ها / همه"){
      this.setState({products:await getProducts()});
      this.setState({productShow:await this.state.products.slice(0,5),currentPage:1})
      
    }else{
      this.setState({products: await getProductByFilter(event.target.value.split("/")[1])});
      this.setState({productShow:await this.state.products.slice(0,5),currentPage:1})
    }

    
  };

  render() {
    return (
      <>
        <div className="d-flex justify-content-between m-5 ">
          <div>
            <PeoductManagerModal buttonLabel="افزودن کالا" />
          </div>
          <span>
            <span className='shadow bg-warning p-1 ps-3 pe-3 rounded text-secondary'>
              ( {this.state.currentPage}/{Math.ceil(this.state.products.length/5)} )
            </span>
          </span>
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
              {this.state.productShow.map((item) => {
                return (
                  <tr key={item.id}>
                    <th className="d-flex justify-content-center">
                      <img
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
                      <span type="button" className="m-2 text-primary">
                        ویرایش
                      </span>
                      <span type="button" className="m-2 text-primary">
                        حذف
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center mt-4">
            <CustomPagination
              perPage={this.state.productPerPage}
              totalPage={this.state.products.length}
              paginate={(pageNumber)=>this.setState({...this.state, currentPage: pageNumber,
                productShow: this.state.products.slice(((pageNumber * this.state.productPerPage) - 5),(pageNumber * this.state.productPerPage)) 
            })}
            />
          </div>
        </div>
      </>
    );
  }
}
export default ManageProduct;
