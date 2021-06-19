/* import React from "react";
import {Component} from "react";
import { Button, ButtonGroup } from "reactstrap";

class HeaderManager extends Component{
    render(){
        return(
            <>
                <div className='d-flex justify-content-between align-items-center shadow p-3 mb-2 bg-white rounded'>
                    <div className="mr-auto">
                        <Button color="secondary" outline className="me-2">
                           بازگشت به سایت
                        </Button>
                        <ButtonGroup className='ms-5'>
                            <Button color="secondary" outline>سفارش ها</Button>
                            <Button color="secondary" outline className='ps-5 pe-5'>موجودی و قیمت ها</Button>
                            <Button color="secondary" outline>کالاها</Button>
                        </ButtonGroup>
                    </div>
                    <div className='me-3'>
                        <h3>
                            پنل مدیریت فروشگاه
                        </h3>
                    </div>
                </div>
            </>
        )
    }

}

export default HeaderManager; */

import React, { useState } from 'react';
import {
Collapse,
Navbar,
NavbarToggler,
NavbarBrand,
Nav,
NavItem,
NavLink,

} from 'reactstrap';

const HeaderManager = (props) => {
const [isOpen, setIsOpen] = useState(false);
const toggle = () => setIsOpen(!isOpen);
return(

    <div className='shadow bg-white rounded'>
        <Navbar color="light" light expand="md" className='p-3 d-flex justify-content-between' >
            <span>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className='me-3'>
                            <NavLink className='text-primary' href="/" >
                                بازشگت به سایت
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                </Collapse>
            </span>
            <span>
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className='border rounded-start ms-3 pe-4 ps-4'>
                           <NavLink href="/">سفارش ها</NavLink>
                        </NavItem>
                        <NavItem className='border rounded-left pe-5 ps-5'>
                            <NavLink href="/">موجودی و قیمت ها</NavLink>
                        </NavItem>
                        <NavItem className='border rounded-end pe-4 ps-4'>
                            <NavLink href="/">کالاها</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </span>
            <span>
                <NavbarBrand href="/" >
                    <span>
                        پنل مدیریت فورشگاه
                    </span>
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
            </span>
            
            
        </Navbar>
    </div>
    );
}

export default HeaderManager;