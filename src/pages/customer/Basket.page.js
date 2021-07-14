import React from "react";
import { Link } from "react-router-dom";
import { Table } from "reactstrap";

import { mapStateToProps, mapDispatchToProps } from "../../redux/mapSelector";
import { connect } from "react-redux";

const Basket = (props) => {
  
  return (
    <>
      <div className="" dir="rtl">
        <div className="p-5 pb-0">
          <h3>سبد خرید</h3>
        </div>
        <div className="m-5">
          <Table striped className="border">
            <thead>
              <tr>
                <th> کالا </th>
                <th> قیمت </th>
                <th> تعداد </th>
                <th> مجموع </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.basketProduts.map((item, index) => {
                console.log(item);
                return (
                  <tr key={index}>
                    <th className="col-4">{item.data.name}</th>
                    <td>{item.data.price}</td>
                    <td>
                      <input
                        className='bg-transparent border-0'
                        type="number"
                        value={item.number}
                        min="1"
                        onChange={(e)=> e.target.value<=item.data.inventory ? props.changeNumberOfOrder(item.id , +e.target.value) : alert(`تعداد سفارش شما از موجودی این کالا بیشتر است!!! (تعداد موجودی کالا :${item.data.inventory})`) }
                        max={item.data.inventory}
                      />
                    </td>
                    <td>{item.sumOfPrice}</td>
                    <td>
                      <span
                        type="button"
                        className="text-primary"
                        onClick={() => {
                          props.deleteProductFromBasket(
                            item.id,
                            item.sumOfPrice
                          );
                          console.log(item.id);
                        }}
                      >
                        {" "}
                        حذف{" "}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="d-flex justify-content-center align-item-center m-5 mt-5 fixed-bottom pb-5">
            <div className="h4 mb-5 ms-5 p-3">
              جمع : {props.basketTotalPrice} تومان
            </div>
            <Link
              to="/checkout"
              className={`mb-5 me-5 text-decoration-none  text-light p-3 ps-4 pe-4 rounded ${
                props.basketTotalPrice ? "bg-success" : "bg-secondary"
              }`}
            >
              نهایی کردن سبد خرید
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Basket);
