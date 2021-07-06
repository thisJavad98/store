import React from "react";
import { Component } from "react";
import { getGroupProduct, getProductGroup } from "../../api/JavadShop.api";
import ProductGroup from "../../components/GroupProduct/GroupProduct.component";

class ProductsPage extends Component {
  state = {
    data: [],
    sidebarData: [],
  };
  async componentDidMount() {
    this.setState({
      data: await getProductGroup(this.props.groupTitle),
      sidebarData: await getGroupProduct(),
    });
  }
  render() {
    return (
      <div dir="rtl" className="w-100 d-flex row">
        <div className="col-xl-2 col-md-12 p-4 border-start ">
          <aside>
            <dl>
              <dt>
                <a
                  className="h6 text-decoration-none text-dark"
                  href="http://localhost:3000/products/کالاهای اساسی و خاربار"
                >
                  کالاهای اساسی و خاربار
                </a>
              </dt>
              {this.state.sidebarData.map((item,index) =>
                item.groupTitle === "کالاهای اساسی و خاربار" ? (
                  <dd key={index} className='text-secondary'>{item.title}</dd>
                ) : (
                  ""
                )
              )}
              <dt>
                <a
                  className="h6 text-decoration-none text-dark"
                  href="http://localhost:3000/products/لبنیات"
                >
                  لبنیات
                </a>
              </dt>
              {this.state.sidebarData.map((item,index) =>
                item.groupTitle === "لبنیات" ? <dd key={index} className='text-secondary'>{item.title}</dd> : ""
              )}
            </dl>
          </aside>
        </div>
        <div className="col p-5 ">
          <ProductGroup
            data={this.state.data}
            title={`/products/${this.props.groupTitle}`}
          />
        </div>
      </div>
    );
  }
}
export default ProductsPage;
