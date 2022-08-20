import React from "react";
import { Component } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { Link, Redirect } from "react-router-dom";
import { getAdmins } from "../../api/JavadShop.api";

class LoginPage extends Component {
  state = {
    users: [],
    userName: "",
    password: "",
    page: "login",
  };
  getUsers = async () => {
    this.setState({ ...this.state, users: await getAdmins() });
  };
  render() {
    switch (this.state.page) {
      case "login":
        return (
          <div className="vh-100 d-flex justify-content-center align-items-center">
            <div className="me-4">
            <img height={"600"} src={"/assets/svg/login.svg"} />
            </div>
            <Form className="p-4
             border rounded shadow p-3 mb-5 bg-white rounded">
              <FormText className="d-flex justify-content-center fs-4">
                ورود به پنل مدیریت فروشگاه جواد
              </FormText>
              <FormGroup className="p-4 pb-0" dir="rtl">
                <Label for="user" className="pb-2">
                  نام کاربری :
                </Label>
                <Input
                  value={this.state.userName}
                  onChange={(e) => {
                    this.setState({ ...this.state, userName: e.target.value });
                  }}
                  type="text"
                  id="user"
                />
              </FormGroup>
              <FormGroup className="p-4 pt-3" dir="rtl">
                <Label for="password" className="pb-2">
                  رمز عبور :
                </Label>
                <Input
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ ...this.state, password: e.target.value });
                  }}
                  type="password"
                  id="password"
                />
              </FormGroup>
              <div
                onClick={async () => {
                  await this.getUsers();
                  this.state.users.map((item) => {
                    if (
                      item.userName === this.state.userName &&
                      item.password === this.state.password
                    ) {
                      this.setState({ ...this.state, page: "panel" });
                    } else {
                      alert(" نام کاربری یا رمز عبور صحیح نمی باشد!!");
                    }
                  });
                }}
                className="d-flex justify-content-center"
              >
                <div
                  style={{
                    color: "white",
                    padding: "8px 12px",
                    backgroundColor: "#039dfc",
                    cursor: "pointer",
                    borderRadius: "6px",
                  }}
                >
                  ورود
                </div>
              </div>
              <div className="pt-4">
                <Link className="text-decoration-none" to="/">
                  بازگشت به سایت
                </Link>
              </div>
            </Form>
          </div>
        );
        break;
      case "panel":
        return <Redirect to="/panel-product" />;
        break;
      case "loading":
        return <></>;
        break;
      default:
        return <></>;
        break;
    }
  }
}

export default LoginPage;
