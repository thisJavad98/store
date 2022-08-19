import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
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
  updatePage = async (title) => {
    this.setState({
      data: await getProductGroup(title),
    });
  };
  render() {
    return (
      <div dir="rtl" className="w-100 d-flex row">
        <div className="col-xl-2 col-md-12 p-4 border-start ">
          <aside>
            <dl>
              <dt>
                <Link
                  className="h6 text-decoration-none text-dark"
                  to="/products/کالاهای اساسی و خاربار"
                  onClick={() => this.updatePage("کالاهای اساسی و خاربار")}
                >
                  کالاهای اساسی و خاربار
                </Link>
              </dt>
              {this.state.sidebarData &&
                this.state.sidebarData.map((item, index) =>
                  item.groupTitle === "کالاهای اساسی و خاربار" ? (
                    <dd key={index} className="text-secondary">
                      {item.title}
                    </dd>
                  ) : (
                    ""
                  )
                )}
              <dt>
                <Link
                  className="h6 text-decoration-none text-dark"
                  to="/products/لبنیات"
                  onClick={() => this.updatePage("لبنیات")}
                >
                  لبنیات
                </Link>
              </dt>
              {this.state.sidebarData &&
                this.state.sidebarData.map((item, index) =>
                  item.groupTitle === "لبنیات" ? (
                    <dd key={index} className="text-secondary">
                      {item.title}
                    </dd>
                  ) : (
                    ""
                  )
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
