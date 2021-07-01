import React from "react";
import {Component} from "react";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';

class Basket extends Component{
    render(){
        return(
            <>
                <div className='' dir='rtl'>
                    <div className='p-5 pb-0'>
                        <h3>
                            سبد خرید
                        </h3>
                    </div>
                    <div className='m-5'>
                        <Table striped className='border'>
                            <thead>
                                <tr>
                                    <th> کالا </th>
                                    <th> قیمت </th>
                                    <th> تعداد </th>
                                    <th> مجموع </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>روغن سرخ کردنی سمن - ۱.۳۵ کیلویی</th>
                                    <td>۱۰.۰۰۰</td>
                                    <td>۲۰</td>
                                    <td> ۲۰۰.۰۰۰</td>
                                    <td>
                                        <span type="button" className="m-2 text-primary"> حذف </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>کره سنتی شکلی - ۱۰۰ گرمی</th>
                                    <td>۲۵.۵۰۰</td>
                                    <td>۴۰۰</td>
                                    <td> ۲۰۰.۰۰۰</td>
                                    <td>
                                        <span type="button" className="m-2 text-primary"> حذف </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>قهوه اسپرسو بن مانو - ۳۶۰ گرمی</th>
                                    <td>۱۶.۷۰۰</td>
                                    <td>۴۰</td>
                                    <td> ۲۰۰.۰۰۰</td>
                                    <td>
                                        <span type="button" className="m-2 text-primary"> حذف </span>
                                    </td>
                                </tr>
                                <tr>
                                    <th>روغن سرخ کردنی سمن - ۱.۳۵ کیلویی</th>
                                    <td>۱۰.۰۰۰</td>
                                    <td>۲۰</td>
                                    <td> ۲۰۰.۰۰۰</td>
                                    <td>
                                        <span type="button" className="m-2 text-primary"> حذف </span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className='d-flex justify-content-between align-item-center m-5 mt-5'>
                            <div className='h4'>
                                جمع : ۱.۱۲۲.۰۰۰ تومان
                            </div>
                            <Link to='/checkout' className='text-decoration-none bg-success text-light p-2 rounded'>
                                نهایی کردن سبد خرید
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Basket;