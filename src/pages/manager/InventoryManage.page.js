import React from "react";
import {Component} from "react";
import { Table , Button } from 'reactstrap';

class QuantityPanel extends Component{
    render(){
        return(
            <>
                <div className='d-flex justify-content-between m-5 '>
                    <div>
                        <Button color='success' className='ps-4 pe-4 p-2'>
                            ذخیره
                        </Button>
                    </div>
                    <>
                        <h3>مدیریت موجودی و قیمت ها</h3>
                    </>
                </div>
                <div className='m-5'>
                <Table bordered striped dir='rtl'>
                    <thead>
                        <tr>
                            <th> کالا </th>
                            <th> قیمت </th>
                            <th> موجودی </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>کره شکلی سنتی-۱۰۰ گرمی</td>
                            <th> ۱۰.۰۰۰ </th>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>لوبیا قرمز-۹۰۰ گرمی</td>
                            <td> ۱۰.۰۰۰ </td>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>روغن سرخ کردنی-۱.۳۵ کیلویی</td>
                            <th> ۱۰.۰۰۰ </th>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>کره شکلی سنتی-۱۰۰ گرمی</td>
                            <th> ۱۰.۰۰۰ </th>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>روغن سرخ کردنی-۱.۳۵ کیلویی</td>
                            <th> ۱۰.۰۰۰ </th>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>کره شکلی سنتی-۱۰۰ گرمی</td>
                            <th> ۱۰.۰۰۰ </th>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>لوبیا قرمز-۹۰۰ گرمی</td>
                            <td> ۱۰.۰۰۰ </td>
                            <th> ۲۰۰ </th>
                        </tr>
                        <tr>
                            <td>روغن سرخ کردنی-۱.۳۵ کیلویی</td>
                            <th> ۱۰.۰۰۰ </th>
                            <th> ۲۰۰ </th>
                        </tr>
                    </tbody>
                </Table>
                </div>
            </>
        );
    }
}
export default QuantityPanel;