import React from "react";
import {Component} from "react";
import { Table , Button } from 'reactstrap';
import { getProducts } from "../../api/JavadShop.api";

class QuantityPanel extends Component{
    state={
        products:[]
    }
    async componentDidMount(){
        this.setState({products:await getProducts()})
        console.log(this.state.products.map((item)=>{console.log(item.name)}))
        console.log(this.state.products)

    }
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
                        {this.state.products.map(item=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.inventory}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                    {/* <tbody>
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
                    </tbody> */}
                </Table>
                </div>
            </>
        );
    }
}
export default QuantityPanel;