import React from "react";
import {Component} from "react";
import PeoductManagerModal from'../ProductManager/ProductManager.modal';
import { Link } from "react-router-dom";
import { Table ,Pagination, PaginationItem, PaginationLink, Input ,Form } from 'reactstrap';
import { getGroupProduct, getProductByFilter, getProducts } from "../../../api/JavadShop.api";

class ManageProduct extends Component{
    state={
        products:[],
        groupTitle:[]
    }
    async componentDidMount(){
        this.setState({products:await getProducts()})
        this.setState({groupTitle:await getGroupProduct()})
        console.log(this.state.products.map((item)=>{console.log(item.name)}))
        console.log(this.state.products)

    }
    productFilter = async(event)=>{
        console.log((event.target.value).split("/")[1])

        if(event.target.value=='دسته بندی کالا ها / همه')
            this.setState({products:await getProducts()})
        else
            this.setState({products:await getProductByFilter((event.target.value).split("/")[1])})
    }
    render(){
        return(
            <>
                <div className='d-flex justify-content-between m-5 '>
                    <div>
                        <PeoductManagerModal buttonLabel='افزودن کالا'/>
                    </div>
                    <>
                        <h3>مدیریت کالا ها</h3>
                    </>
                </div>
                <div className='m-5'>
                <Table bordered striped dir='rtl'>
                    <thead>
                        <tr>
                            <th>تصویر</th>
                            <th>نام کالا</th>
                            <th>
                                <Form action='/'>
                                    <Input type="select" name="select" id="groupProducts" onChange={this.productFilter}>
                                        <option>دسته بندی کالا ها / همه</option>
                                        {this.state.groupTitle.map(item=>{
                                            return(<option> {item.groupTitle}/{item.title}  </option>)
                                        })}
                                    </Input>
                                </Form> 
                            </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.products.map(item=>{
                            return(
                                <tr key={item.id} >
                                    <th className='d-flex justify-content-center'><img className='rounded-circle' width="80px" height='80px' src={item.avatar}/></th>
                                    <td>{item.name}</td>
                                    <td>{item.groupTitle} / {item.group}</td>
                                    <td>
                                        <Link className='m-2'> ویرایش </Link>
                                        <Link className='m-2'> حذف </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    {/* <tbody>
                        <tr>
                            <th></th>
                            <td>لوبیا قرمز-۹۰۰ گرمی</td>
                            <td>مواد غدایی /کالا های اساسی و خوار و بار</td>
                            <td>
                                <Link className='m-2'> ویرایش </Link>
                                <Link className='m-2'> حذف </Link>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>روغن سرخ کردنی-۱.۳۵ کیلویی</td>
                            <td>مواد غدایی /کالا های اساسی و خوار و بار</td>
                            <td>
                                <Link className='m-2'> ویرایش </Link>
                                <Link className='m-2'> حذف </Link>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>کره شکلی سنتی-۱۰۰ گرمی</td>
                            <td>مواد غدایی /کالا های اساسی و خوار و بار</td>
                            <td>
                                <Link className='m-2'> ویرایش </Link>
                                <Link className='m-2'> حذف </Link>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>لوبیا قرمز-۹۰۰ گرمی</td>
                            <td>مواد غدایی /کالا های اساسی و خوار و بار</td>
                            <td>
                                <Link className='m-2'> ویرایش </Link>
                                <Link className='m-2'> حذف </Link>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>روغن سرخ کردنی-۱.۳۵ کیلویی</td>
                            <td>مواد غدایی /کالا های اساسی و خوار و بار</td>
                            <td>
                                <Link className='m-2'> ویرایش </Link>
                                <Link className='m-2'> حذف </Link>
                            </td>
                        </tr>
                        <tr>
                            <th></th>
                            <td>کره شکلی سنتی-۱۰۰ گرمی</td>
                            <td>مواد غدایی /کالا های اساسی و خوار و بار</td>
                            <td>
                                <Link className='m-2'> ویرایش </Link>
                                <Link className='m-2'> حذف </Link>
                            </td>
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
                            <PaginationLink href="#">
                            4
                            </PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">
                            5
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
export default ManageProduct;