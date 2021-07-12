import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { IoMdBasket } from "react-icons/io";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Badge,
} from "reactstrap";
import { Link } from "react-router-dom";
import { mapStateToProps,mapDispatchToProps }from "../../../../redux/mapSelector"
import { connect } from "react-redux";

const HeaderCustomer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <header className="shadow bg-white rounded sticky-top">
      <Navbar color="light" light expand="md" className="p-3">
        <>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <Badge className="bg-warning h-25 m-0">{props.basketCounter}</Badge>
              <NavItem className="d-flex align-items-center">
                <Link to="/basket" className='text-decoration-none text-dark p-2'>
                  سبد خرید
                  <IoMdBasket />
                </Link>
              </NavItem>
              <NavItem className="ms-3 d-flex align-items-center">
                <Link className='text-decoration-none text-dark p-2' to="/panel-login">
                  مدیریت
                  <AiFillHome />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </>
        <>
          <Link to="/" className='text-decoration-none text-dark'>
            <span className="h5">فروشگاه جواد</span>
            <span className="ps-3 h5">
              <RiShoppingCartLine />
            </span>
          </Link>
          <NavbarToggler onClick={toggle} />
        </>
      </Navbar>
    </header>
  );
};

export default connect(mapStateToProps,mapDispatchToProps)(HeaderCustomer);
