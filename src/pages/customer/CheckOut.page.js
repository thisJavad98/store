import React from "react";
import { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class CheckOut extends Component {
  state = {
    information: {
      firstName: { data: "", valid: false },
      lastName: { data: "", valid: false },
      adress: { data: "", valid: false },
      phoneNumber: { data: "", valid: false },
      dateOfSend: { data: "", valid: false },
    },
  };

  changeHandel(value, type) {
    if (value === "") {
      this.setState({
        information: {
          ...this.state.information,
          [type]: { data: value, valid: false },
        },
      });
    } else {
      this.setState({
        information: {
          ...this.state.information,
          [type]: { data: value, valid: true },
        },
      });
    }
  }

  clickHandler() {
    if (
      this.state.information.firstName.valid &&
      this.state.information.lastName.valid &&
      this.state.information.adress.valid &&
      this.state.information.phoneNumber.valid &&
      this.state.information.dateOfSend.valid
    ) {
      console.log("send to pay page");
    } else console.log("form is not valid");
  }
  render() {
    return (
      <div dir="rtl" className="bg-warning m-4 p-3 rounded text-light">
        <div className="h3 m-2">نهایی کردن خرید</div>
        <div className="p-2 m-4 mt-0 pt-0">
          <Form>
            <div className="row">
              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="firstName" className="h5">
                    نام :
                  </Label>
                  <Input
                    className="valid"
                    type="text"
                    name="firstName"
                    id="firstName"
                    onChange={(e) =>
                      this.changeHandel(e.target.value, e.target.name)
                    }
                    required
                  />
                  {this.state.information.firstName.valid ? (
                    ""
                  ) : (
                    <div className="text-secondary p-1">
                      {" "}
                      لطفا نام خود را وارد نمایید!!!
                    </div>
                  )}
                </FormGroup>
              </span>

              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="lastName" className="h5">
                    نام خانوادگی :
                  </Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    onChange={(e) =>
                      this.changeHandel(e.target.value, e.target.name)
                    }
                    required
                  />
                  {this.state.information.lastName.valid ? (
                    ""
                  ) : (
                    <div className="text-secondary p-1">
                      {" "}
                      لطفا نام خانوادگی خود را وارد نمایید!!!
                    </div>
                  )}
                </FormGroup>
              </span>
            </div>
            <div className="row">
              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="adress" className="h5">
                    آدرس :
                  </Label>
                  <Input
                    type="textarea"
                    name="adress"
                    id="adress"
                    onChange={(e) =>
                      this.changeHandel(e.target.value, e.target.name)
                    }
                    required
                  />
                  {this.state.information.adress.valid ? (
                    ""
                  ) : (
                    <div className="text-secondary p-1">
                      {" "}
                      لطفا آدرس خود را وارد نمایید!!!
                    </div>
                  )}
                </FormGroup>
              </span>

              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="phoneNumber" className="h5">
                    تلفن همراه :{" "}
                    <span className="h6">(جهت هماهنگی ارسال سفارش)</span>
                  </Label>
                  <Input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    onChange={(e) =>
                      this.changeHandel(e.target.value, e.target.name)
                    }
                    required
                  />
                  {this.state.information.phoneNumber.valid ? (
                    ""
                  ) : (
                    <div className="text-secondary p-1">
                      {" "}
                      لطفا تلفن خود را وارد نمایید!!!
                    </div>
                  )}
                </FormGroup>
              </span>
            </div>
            <div className="m-3 col-md-5">
              <FormGroup>
                <Label for="dateOfSend" className="h5">
                  تاریخ تحویل :
                </Label>
                <Input
                  type="date"
                  name="dateOfSend"
                  id="dateOfSend"
                  onChange={(e) =>
                    this.changeHandel(e.target.value, e.target.name)
                  }
                  required
                />
                {this.state.information.dateOfSend.valid ? (
                  ""
                ) : (
                  <div className="text-secondary p-1">
                    {" "}
                    لطفا تاریخ را وارد نمایید!!!
                  </div>
                )}
              </FormGroup>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
              <Button
                color="success"
                className="ps-5 pe-5 p-2"
                type="button"
                onClick={() => this.clickHandler()}
              >
                {" "}
                پرداخت{" "}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default CheckOut;
