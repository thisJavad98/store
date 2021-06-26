import React from "react";
import {Component} from "react";
import { Link } from "react-router-dom";
import { Table , FormGroup , Label, Input } from 'reactstrap';
import {getOrders, getOrdersByFilter} from "../../api/JavadShop.api"

class OrdersPanel extends Component{
    state={
        orders:[]
    }
    async componentDidMount(){
        this.setState({orders:await getOrders()})
        console.log(this.state.orders.map((item)=>{console.log(item.name)}))
        console.log(this.state.orders)

    }
    orderFilter = async (event)=>{
        if(event.target.value=='yes'){
            this.setState({orders: await getOrdersByFilter(event.target.value)})
        }else{
            this.setState({orders: await getOrdersByFilter(event.target.value)})
        }
    }
    render(){
        
        return(
            <>
                <div className='d-flex justify-content-between align-items-center m-5 '>
                    <div>
                        <FormGroup tag="fieldset" className='d-flex'>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="radio1" value='yes' onClick={this.orderFilter}/>{'سفارش های تحویل داده شده'}
                                </Label>
                            </FormGroup>
                            <FormGroup check className='ms-5'>
                                <Label check>
                                    <Input type="radio" value='no' name="radio1" onClick={this.orderFilter}/>{'سفارش های درانتظار ارسال '} 
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </div>
                    <>
                        <h3>مدیریت سفارش ها</h3>
                    </>
                </div>
                <div className='m-5'>
                <Table bordered striped dir='rtl'>
                    <thead>
                        <tr>
                            <th>  نام کاربر </th>
                            <th> مجموع مبلغ </th>
                            <th> زمان ثبت سفارش </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.orders.map(item=>{

                            return(
                                <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.totalPrice}</td>
                                <td className='d-flex justify-content-center'>{new Date(item.orderRegister).getTime()}</td>
                                <td>
                                    <Link className='d-flex justify-content-center'>
                                        برسی سفارش
                                    </Link>
                                </td>   
                            </tr>
                            )
                            
                        })}
                    </tbody>
                    {/* <tbody>
                        <tr>
                            <td> اکبر زمانی </td>
                            <td> ۹۲۰.۰۰۰ </td>
                            <td className='d-flex justify-content-center'> ۱۴۰۰/۴/۲۳ </td>
                            <td>
                                <Link className='d-flex justify-content-center'>
                                    برسی سفارش
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td> رامین رحیمی</td>
                            <td> ۱۲۰.۰۰۰ </td>
                            <td className='d-flex justify-content-center'> ۱۴۰۰/۴/۲۳ </td>
                            <td>
                                <Link className='d-flex justify-content-center'>
                                    برسی سفارش
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td> ملیکا زارعی </td>
                            <td> ۲.۰۰۰.۰۰۰ </td>
                            <td className='d-flex justify-content-center'> ۱۴۰۰/۴/۲۳ </td>
                            <td>
                                <Link className='d-flex justify-content-center'>
                                    برسی سفارش
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td> فریبرز عربنیا </td>
                            <td> ۳۴۰.۰۰۰ </td>
                            <td className='d-flex justify-content-center'> ۱۴۰۰/۴/۲۳ </td>
                            <td>
                                <Link className='d-flex justify-content-center'>
                                    برسی سفارش
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td> نیکی کریمی </td>
                            <td> ۱۰.۰۰۰ </td>
                            <td className='d-flex justify-content-center'> ۱۴۰۰/۴/۲۳ </td>
                            <td>
                                <Link className='d-flex justify-content-center'>
                                    برسی سفارش
                                </Link>
                            </td>
                        </tr>
                        <tr>
                            <td> علی لهراسبی </td>
                            <td> ۷۶۰.۰۰۰ </td>
                            <td className='d-flex justify-content-center'> ۱۴۰۰/۴/۲۳ </td>
                            <td>
                                <Link className='d-flex justify-content-center'>
                                    برسی سفارش
                                </Link>
                            </td>
                        </tr>
                    </tbody> */}
                </Table>
                </div>
            </>
        );
    }
}
export default OrdersPanel;