import { Button } from "reactstrap";
import React, { Component } from "react";
import { AiFillCheckCircle  , AiFillCloseCircle} from "react-icons/ai";
import { Link } from "react-router-dom";

class ResultPayment extends Component {
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
                پرداخت موفقیت آمیز نبود.<br></br> سفارش شما در انتظار پرداخت است.
              </span>
            </div>
            <div className="d-flex justify-content-center mt-5 pt-5 ">
            <Link to="/basket" className='ms-4 '>
                <Button size="lg" color="warning" >
                  {" "}
                  بازگشت به سبد خرید{" "}
                </Button>
              </Link>
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

export default ResultPayment;
