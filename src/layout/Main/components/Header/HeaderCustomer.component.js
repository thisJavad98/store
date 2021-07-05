/* import React from "react";
import {Component} from "react";
import { Button, Badge } from "reactstrap";
import { RiShoppingCartLine } from "react-icons/ri";

class HeaderCustomer extends Component{
    render(){
        return(
            <>
                <nav className='d-flex justify-content-between align-items-center p-2 shadow p-3 mb-2 bg-white rounded'>
                    <div className="mr-auto">
                        <Button color="secondary" outline className="me-2">
                            سبد خرید
                            <Badge className='bg-warning'>0</Badge>
                        </Button>
                        <Button color="secondary" outline className="me-2">مدیریت</Button>
                    </div>
                    <div className=''>
                        <h3>
                            <span>فروشگاه جواد</span>
                            <span className='p-3'><RiShoppingCartLine /></span>
                        </h3>
                        
                    </div>
                </nav>
            </>
        )
    }

}
export default HeaderCustomer; */

import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
  Badge
} from 'reactstrap';

const HeaderCustomer = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return(

        <header className='shadow bg-white rounded sticky-top'>
            <Navbar color="light" light expand="md" className='p-3' >
                <>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <Badge className='bg-warning h-25 m-0'>4</Badge>
                            <NavItem className='d-flex align-items-center'>
                                <NavLink href="/basket" >
                                    سبد خرید
                                    <IoMdBasket/>
                                </NavLink>
                            </NavItem>
                            <NavItem className='ms-3 d-flex align-items-center'>
                                <NavLink href="/panel-login">
                                    مدیریت
                                    <AiFillHome/>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </>
                <>
                    <NavbarBrand href="/" >
                        <span>
                            <Link className='text-decoration-none text-dark h3' to="/">
                                فروشگاه جواد
                            </Link> 
                        </span>
                        <span className='ps-3'>
                            <Link className='text-decoration-none text-dark h3' to="/">
                                <RiShoppingCartLine />
                            </Link>
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                </>
                
                
            </Navbar>
        </header>
        );
}

export default HeaderCustomer;