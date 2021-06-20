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
                    <Route path='/manageProduct'>
                        <MainLayout headerType='manager'/>
                        <ManageProduct/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path='/basket'>
                        <MainLayout headerType='customer'/>
                        <Basket/>
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