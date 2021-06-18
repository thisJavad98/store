import React from "react";
import {Component} from "react";
import { Button, Badge } from "reactstrap";
import { RiShoppingCartLine } from "react-icons/ri";

class HeaderCustomer extends Component{
    render(){
        return(
            <>
                <div className='d-flex justify-content-between align-items-center p-2 shadow p-3 mb-2 bg-white rounded'>
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
                </div>
            </>
        )
    }

}

export default HeaderCustomer;