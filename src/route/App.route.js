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
                        this is products page!!!
                    </Route>
                    <Route path='/product'>
                        <MainLayout headerType='customer'/>
                        this is product page!!!
                    </Route>
                    <Route path='/basket'>
                        <MainLayout headerType='customer'/>
                        <Basket/>
                    </Route>
                    <Route path='/checkout'>
                        <MainLayout headerType='customer'/>
                        this is check out page!!!
                    </Route>
                    <Route path='/payment'>
                        this is payment page!!!
                    </Route>
                    <Route path='/payment-result-success'>
                        this is success payment page!!!
                    </Route>
                    <Route path='/payment-result-fail'>
                        this is fail payment page!!!
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
                        this is quantity panel page!!!
                    </Route>
                    <Route path='/panel-orders'>
                        <MainLayout headerType='manager'/>
                        this is orders panel page!!!
                    </Route>
                    <Route path='/' exact>
                        <MainLayout headerType='customer'/>
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