import React from "react";
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

export default HeaderManager;