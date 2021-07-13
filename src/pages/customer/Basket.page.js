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
                    <td>{item.number}</td>
                    <td>{item.sumOfPrice}</td>
                    <td>
                      <span
                        type="button"
                        className="text-primary"
                        onClick={() => {
                          props.deleteProductFromBasket(item.id)
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
          <div className="d-flex justify-content-between align-item-center m-5 mt-5">
            <div className="h4">جمع : {} تومان</div>
            <Link
              to="/checkout"
              className="text-decoration-none bg-success text-light p-2 rounded"
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
