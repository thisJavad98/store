import React from "react";
import {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PageNotFoundl from "../components/PageNotFound.component";
import MainLayout from "../layout/Main/Main.layout";
import LoginPage from "../pages/manager/Login.page"
import ManageProduct from '../pages/manager/ProductManager/ProductManage.page'
import Basket from "../pages/customer/Basket.page"
class AppRoute extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/products'>
                        <MainLayout headerType='customer'/>
                        <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is products page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/product'>
                        <MainLayout headerType='customer'/>
                        <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is product page!!!
                                </h1>
                            </div>
                        </div>  
                    </Route>
                    <Route path='/basket'>
                        <MainLayout headerType='customer'/>
                        <Basket/>
                    </Route>
                    <Route path='/checkout'>
                        <MainLayout headerType='customer'/>
                        <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is check out page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/payment'>
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is payment page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/payment-result-success'>
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is success payment page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/payment-result-fail'>
                    <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is fail payment page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path="/panel-login">
                        <LoginPage/>
                    </Route>
                    <Route path='/panel-product'>
                        <MainLayout headerType='manager'/>
                        <ManageProduct/>
                    </Route>
                    <Route path='/panel-quantity'>
                        <MainLayout headerType='manager'/>
                        <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is quantity panel page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/panel-orders'>
                        <MainLayout headerType='manager'/>
                        <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    This is orders panel page!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/' exact>
                        <MainLayout headerType='customer'/>
                        <div className='vh-100 d-flex justify-content-center align-items-center'>
                            <div className='d-flex  rounded-circle bg-danger h-75 align-items-center'>
                                <h1 className="display-3 bg-light p-2">
                                    First page of site!!!
                                </h1>
                            </div>
                        </div>
                    </Route>
                    <Route path='/*'>
                        <PageNotFoundl/>
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
export default AppRoute;