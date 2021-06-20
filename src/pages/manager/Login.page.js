import React from "react";
import {Component} from "react";
import {  Form, FormGroup, Label, Input , FormText ,NavLink} from "reactstrap";
import {Link} from 'react-router-dom';

class LoginPage extends Component{
    render(){
        return(
            <div className='vh-100 d-flex justify-content-center align-items-center'>        
                <Form className= 'p-4 border rounded shadow p-3 mb-5 bg-white rounded' >
                    <FormText className='d-flex justify-content-center fs-4'>
                        ورود به پنل مدیریت فروشگاه جواد
                    </FormText>
                    <FormGroup className='p-4 pb-0' dir='rtl'>
                        <Label for='user' className='pb-2'>نام کاربری :</Label>
                        <Input type='text' id='user'/>
                    </FormGroup>
                    <FormGroup className='p-4 pt-3'  dir='rtl'>
                        <Label for='password' className='pb-2'>رمز عبور :</Label>
                        <Input type='password' id='password'/>
                    </FormGroup>
                    <div className='d-flex justify-content-center'>
                        <NavLink className='rounded text-decoration-none text-light bg-primary' href='/panel-product'>ورود</NavLink>
                    </div>
                    <div className='pt-4'>
                        <Link className='text-decoration-none' to="/">
                            بازگشت به سایت
                        </Link>                          
                    </div>
                </Form>
            </div>
        )
    }

}

export default LoginPage;