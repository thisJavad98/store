import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from "reactstrap";
import { Link } from "react-router-dom";

const HeaderManager = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [panelOrders, ordersActive] = useState(props.panelOrdersClass);
  const [panelQuntity, quntityActive] = useState(props.panelQuntityClass);
  const [panelProduct, productActive] = useState(props.panelProductClass);

  return (
    <header className="shadow bg-white rounded sticky-top">
      <Navbar
        color="light"
        light
        expand="md"
        className="p-3 d-flex justify-content-between"
      >
        <span>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="me-3">
                <Link className="text-decoration-none" to="/">
                  بازگشت به سایت
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </span>
        <span>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className={panelOrders}>
                <Link
                  className="text-decoration-none p-3 text-secondary"
                  onClick={() => {
                    ordersActive("border rounded-start bg-warning p-2");
                    quntityActive("border bg-white p-2");
                    productActive("border rounded-end bg-white p-2");
                  }}
                  to="/panel-orders"
                >
                  سفارش ها
                </Link>
              </NavItem>
              <NavItem className={panelQuntity}>
                <Link
                  className="text-decoration-none p-3 ps-5 pe-5 text-secondary"
                  onClick={() => {
                    quntityActive("border bg-warning p-2");
                    ordersActive("border rounded-start bg-white p-2");
                    productActive("border rounded-end bg-white p-2");
                  }}
                  to="/panel-quantity"
                >
                  موجودی و قیمت ها
                </Link>
              </NavItem>
              <NavItem className={panelProduct}>
                <Link
                  className="text-decoration-none p-3 text-secondary"
                  onClick={() => {
                    productActive("border rounded-end bg-warning p-2");
                    quntityActive("border bg-white p-2");
                    ordersActive("border rounded-start bg-white p-2");
                  }}
                  to="/panel-product"
                >
                  کالاها
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </span>
        <span>
          <NavbarBrand>
            <span>پنل مدیریت فروشگاه</span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </span>
      </Navbar>
    </header>
  );
};

export default HeaderManager;
