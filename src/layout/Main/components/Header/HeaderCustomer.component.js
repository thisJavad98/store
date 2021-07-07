import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { IoMdBasket } from "react-icons/io";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Badge,
} from "reactstrap";

const HeaderCustomer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="shadow bg-white rounded sticky-top">
      <Navbar color="light" light expand="md" className="p-3">
        <>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Badge className="bg-warning h-25 m-0">4</Badge>
              <NavItem className="d-flex align-items-center">
                <NavLink href="/basket">
                  سبد خرید
                  <IoMdBasket />
                </NavLink>
              </NavItem>
              <NavItem className="ms-3 d-flex align-items-center">
                <NavLink href="/panel-login">
                  مدیریت
                  <AiFillHome />
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </>
        <>
          <NavbarBrand href="/">
            <span className='h4'>فروشگاه جواد</span>
            <span className="ps-3 h4">
              <RiShoppingCartLine />
            </span>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
        </>
      </Navbar>
    </header>
  );
};

export default HeaderCustomer;
