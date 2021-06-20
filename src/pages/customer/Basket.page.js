import React from "react";
import {Component} from "react";
import { Link } from "react-router-dom";
import { Button , Table } from 'reactstrap';

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
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>روغن سرخ کردنی سمن - ۱.۳۵ کیلویی</th>
                                    <td>۱۰.۰۰۰</td>
                                    <td>۲۰</td>
                                    <td>
                                        <Link> حذف </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>کره سنتی شکلی - ۱۰۰ گرمی</th>
                                    <td>۲۵.۵۰۰</td>
                                    <td>۴۰۰</td>
                                    <td>
                                        <Link> حذف </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>قهوه اسپرسو بن مانو - ۳۶۰ گرمی</th>
                                    <td>۱۶.۷۰۰</td>
                                    <td>۴۰</td>
                                    <td>
                                        <Link> حذف </Link>
                                    </td>
                                </tr>
                                <tr>
                                    <th>روغن سرخ کردنی سمن - ۱.۳۵ کیلویی</th>
                                    <td>۱۰.۰۰۰</td>
                                    <td>۲۰</td>
                                    <td>
                                        <Link> حذف </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                        <div className='d-flex justify-content-between m-5 mt-5'>
                            <div className='h4'>
                                جمع : ۱.۱۲۲.۰۰۰ تومان
                            </div>
                            <Button color='success' className='p-2'>
                                نهایی کردن سبد خرید
                            </Button >
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Basket;