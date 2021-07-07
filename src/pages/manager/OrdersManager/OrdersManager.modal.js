import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
} from "reactstrap";

const OrdersManagerModal = (props) => {
  const {
    buttonLabel,
    name,
    address,
    phone,
    deliverTime,
    orderRegister,
    deliverd,
    deliveryEndTime,
    basket,
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <span type="button" onClick={toggle}>
        {buttonLabel}
      </span>
      <Modal isOpen={modal} toggle={toggle} dir="rtl">
        <ModalHeader toggle={toggle}> نمایش سفارش </ModalHeader>
        <ModalBody className="p-3">
          <div className="p-4 pb-0">
            <span className="h5">نام مشتری :</span>
            <span className="h6 me-4">{name}</span>
          </div>
          <div className="p-4 pb-0">
            <span className="h5">آدرس :</span>
            <span className="h6 me-4">{address}</span>
          </div>
          <div className="p-4 pb-0">
            <span className="h5">تلفن :</span>
            <span className="h6 me-4">{phone}</span>
          </div>
          <div className="p-4 pb-0">
            <span className="h5">زمان تحویل :</span>
            <span className="h6 me-4">{deliverTime}</span>
          </div>
          <div className="p-4 pb-0">
            <span className="h5">زمان سفارش :</span>
            <span className="h6 me-4">{orderRegister}</span>
          </div>
          <div className="d-flex justify-content-center">
            <Table bordered striped dir="rtl" className="m-3">
              <thead>
                <tr>
                  <th> کالا </th>
                  <th> قیمت </th>
                  <th> تعداد </th>
                </tr>
              </thead>
              <tbody>
                {basket.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <a
                          className="text-decoration-none"
                          href={`http://localhost:3000/product/${item.productName}`}
                        >
                          {item.productName}
                        </a>
                      </td>
                      <td>{item.price}</td>
                      <td>{item.number}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </ModalBody>
        {deliverd === "no" ? (
          <ModalFooter className="d-flex justify-content-center">
            <Button className="ps-5 pe-5" color="success" onClick={toggle}>
              تحویل شد
            </Button>
          </ModalFooter>
        ) : (
          <div className="d-flex justify-content-center align-items-center p-2 m-2 text-danger border rounded">
            <span className="h5">زمان تحویل :</span>
            <span className="me-3 h6">{deliveryEndTime}</span>
          </div>
        )}
      </Modal>
    </>
  );
};

export default OrdersManagerModal;
