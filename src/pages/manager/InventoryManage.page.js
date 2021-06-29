import React from "react";
import {Component} from "react";
import { Table , Button, Pagination, PaginationLink,PaginationItem } from 'reactstrap';
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
                <div className='d-flex justify-content-center mt-4'>
                    <Pagination aria-label="Page navigation example">
                        <PaginationItem disabled>
                            <PaginationLink first href="#" />
                        </PaginationItem>
                        <PaginationItem disabled>
                            <PaginationLink previous href="#" />
                        </PaginationItem>
                        <PaginationItem active>
                            <PaginationLink href="#">
                            1
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            2
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            3
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink next href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink last href="#" />
                        </PaginationItem>
                        </Pagination>
                </div>
                </div>
            </>
        );
    }
}
export default QuantityPanel;