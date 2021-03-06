import React from "react";
import { Component } from "react";
import { getProductGroup } from "../../api/JavadShop.api";
import ProductGroup from "../../components/GroupProduct/GroupProduct.component";

class HomePage extends Component {
  state = {
    groupOne: [],
    groupTwo: [],
  };

  async componentDidMount() {
    this.setState({
      groupOne: await getProductGroup("لبنیات"),
      groupTwo: await getProductGroup("کالاهای اساسی و خاربار"),
    });
  }

  render() {
    return (
      <>
        <div dir="rtl">
          <div className="p-3 m-3">
            <ProductGroup
              flagHomePage="true"
              data={this.state.groupTwo}
              title={"/products/کالاهای اساسی و خاربار"}
            />
          </div>
          <div className="p-3 m-3">
            <ProductGroup
              flagHomePage="true"
              data={this.state.groupOne}
              title={"/products/لبنیات"}
            />
          </div>
        </div>
      </>
    );
  }
}
export default HomePage;
