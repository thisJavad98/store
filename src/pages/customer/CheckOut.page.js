import React from "react";
import { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { mapStateToProps } from "../../redux/mapSelector";
import { postDataOrder } from "../../api/JavadShop.api";
class CheckOut extends Component {
  state = {
    information: {
      firstName: { data: "", valid: false },
      lastName: { data: "", valid: false },
      adress: { data: "", valid: false },
      phoneNumber: { data: "", valid: false },
      dateOfSend: { data: "", valid: false },
    },
    basket: {},
  };

  componentDidMount() {
    this.setState({
      ...this.state,
      basket: {
        basketProduts: this.props.basketProduts,
        basketCounter: this.props.basketCounter,
        basketTotalPrice: this.props.basketTotalPrice,
      },
    });
  }

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

  async clickHandler() {
    if (
      this.state.information.firstName.valid &&
      this.state.information.lastName.valid &&
      this.state.information.adress.valid &&
      this.state.information.phoneNumber.valid &&
      this.state.information.dateOfSend.valid
    ) {
      console.log("send to pay page");
      await postDataOrder({
        id: this.state.information.firstName.data,
        name: this.state.information.firstName.data,
        address: this.state.information.adress.data,
        phone: this.state.information.phoneNumber.data,
        totalPrice: this.props.basketTotalPrice,
        deliverTime: this.state.information.dateOfSend.data,
        orderRegister: "October 18, 2021 11:13:00",
        deliveryEndTime: this.state.information.dateOfSend.data,
        deliverd: "no",
        paymentResult: "no",
        basket: this.props.basketProduts.map((item) => {
          return {
            productName: item.data.name,
            number: item.number,
            price: item.sumOfPrice,
          };
        }),
      });
      window.location.pathname = `/payment-page.html`;
      localStorage.setItem("orders", this.state.information.firstName.data);
    } else {
      alert("???????? ?????? ???? ???? ?????? ???????????? ???? ????????!");
    }
  }
  render() {
    return (
      <div dir="rtl" className="bg-warning m-4 p-3 rounded text-light">
        <div className="h3 m-2">?????????? ???????? ????????</div>
        <div className="p-2 m-4 mt-0 pt-0">
          <Form>
            <div className="row">
              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="firstName" className="h5">
                    ?????? :
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
                      ???????? ?????? ?????? ???? ???????? ????????????!!!
                    </div>
                  )}
                </FormGroup>
              </span>

              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="lastName" className="h5">
                    ?????? ???????????????? :
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
                      ???????? ?????? ???????????????? ?????? ???? ???????? ????????????!!!
                    </div>
                  )}
                </FormGroup>
              </span>
            </div>
            <div className="row">
              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="adress" className="h5">
                    ???????? :
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
                      ???????? ???????? ?????? ???? ???????? ????????????!!!
                    </div>
                  )}
                </FormGroup>
              </span>

              <span className="col-md-5 m-3">
                <FormGroup>
                  <Label for="phoneNumber" className="h5">
                    ???????? ?????????? :{" "}
                    <span className="h6">(?????? ?????????????? ?????????? ??????????)</span>
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
                      ???????? ???????? ?????? ???? ???????? ????????????!!!
                    </div>
                  )}
                </FormGroup>
              </span>
            </div>
            <div className="m-3 col-md-5">
              <FormGroup>
                <Label for="dateOfSend" className="h5">
                  ?????????? ?????????? :
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
                    ???????? ?????????? ???? ???????? ????????????!!!
                  </div>
                )}
              </FormGroup>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5">
              <Button
                color="success"
                className="ps-5 pe-5 p-2"
                type="button"
                onClick={() => {
                  this.clickHandler();
                }}
              >
                {" "}
                ????????????{" "}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, null)(CheckOut);
