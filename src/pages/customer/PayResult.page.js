import { Button } from "reactstrap";
import React, { Component } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  getNotCompletOrder,
  getBasketOfFailPay,
  deleteFailOrder,
} from "../../api/JavadShop.api";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../redux/mapSelector";

class ResultPayment extends Component {
  async componentDidMount() {
    const orderId = localStorage.getItem("orders");
    let basket = "";
    let basketItem = [];
    let basketCounter = 0;
    let basketTotalPrice = 0;

    if (this.props.resultPay === "success") {
      getNotCompletOrder(orderId, { paymentResult: "yes" });
      localStorage.setItem("orders", "");
    } else {
      basket = await getBasketOfFailPay(orderId);
      console.log(basket.basket, basket.basket.length);
      basketItem = basket.basket.map((item, index) => {
        return {
          id: index + 1,
          data: {
            name: item.productName,
            inventory: 50,
            price: item.price / item.number,
          },
          number: item.number,
          sumOfPrice: item.price,
        };
      });
      basketCounter = await basket.basket.length;
      basketTotalPrice = await basket.totalPrice;
      console.log(basketItem);
      await this.props.failPayment({
        basketProduts: basketItem,
        basketCounter: basketCounter,
        basketTotalPrice: basketTotalPrice,
      });
      await deleteFailOrder(orderId);
      localStorage.setItem("orders", "");
    }
  }
  render() {
    return (
      <div dir="rtl">
        {this.props.resultPay === "success" ? (
          <div>
            <div className="h2 p-4 m-4"> نتیجه پرداخت </div>
            <div className="d-flex justify-content-center h2 align-items-center">
              <span className="ms-4">
                <AiFillCheckCircle
                  style={{ color: "#00b33c", width: "200px", height: "200px" }}
                />
              </span>
              <span>
                با تشکر از پرداخت شما.سفارش شما<br></br> با موفقیت ثبت شد و جهت{" "}
                <br></br>هماهنگی ارسال با شما تماس گرفته خواهد شد.
              </span>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5 ">
              <Link to="/">
                <Button size="lg" color="primary">
                  {" "}
                  بازگشت به سایت{" "}
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="h2 p-4 m-4"> نتیجه پرداخت </div>
            <div className="d-flex justify-content-center h2 align-items-center">
              <span className="ms-4">
                <AiFillCloseCircle
                  style={{ color: "red", width: "200px", height: "200px" }}
                />
              </span>
              <span>
                پرداخت موفقیت آمیز نبود.<br></br> سفارش شما در انتظار پرداخت
                است.
              </span>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5 ">
              <Link to="/">
                <Button size="lg" color="primary">
                  {" "}
                  بازگشت به سایت{" "}
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultPayment);
