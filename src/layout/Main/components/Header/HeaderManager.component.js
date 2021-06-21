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
import {Link} from 'react-router-dom';

const HeaderManager = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const[panelOrders, ordersActive]=useState(props.panelOrdersClass)
    const [panelQuntity, quntityActive]=useState(props.panelQuntityClass)
    const [panelProduct, productActive]=useState(props.panelProductClass)

    return(

        <header className='shadow bg-white rounded sticky-top'>
            <Navbar color="light" light expand="md" className='p-3 d-flex justify-content-between' >
                <span>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className='me-3'>
                                <Link className='text-decoration-none' to="/">
                                    بازگشت به سایت
                                </Link> 
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </span>
                <span>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className={panelOrders} onClick={()=>{ordersActive('border rounded-start bg-warning'); quntityActive('border bg-white');productActive('border rounded-end bg-white')}}>
                            <NavLink>
                                    <Link className='text-decoration-none p-3 text-secondary' onClick={()=>{}}  to='/panel-orders'>سفارش ها</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem className={panelQuntity} onClick={()=>{quntityActive('border bg-warning');ordersActive('border rounded-start bg-white');productActive('border rounded-end bg-white')}}>
                                <NavLink>
                                    <Link className='text-decoration-none ps-5 pe-5 text-secondary'  to='/panel-quantity'>موجودی و قیمت ها</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem className={panelProduct} onClick={()=>{productActive('border rounded-end bg-warning');quntityActive('border bg-white');ordersActive('border rounded-start bg-white');}}>
                                <NavLink>
                                    <Link className='text-decoration-none p-3 text-secondary'  to='/panel-product'>کالاها</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </span>
                <span>
                    <NavbarBrand>
                        <span>
                            پنل مدیریت فروشگاه
                        </span>
                    </NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                </span>
                
                
            </Navbar>
        </header>
    );
}

export default HeaderManager;