import React from "react";
import {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from "../layout/Main/Main.layout";
import LoginPage from "../pages/manager/Login.page"

class AppRoute extends Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path='/manager'>
                        <MainLayout headerType='manager'/>
                    </Route>
                    <Route path="/login">
                        <LoginPage/>
                    </Route>
                    <Route path='/'>
                        <MainLayout headerType='customer'/>
                    </Route>
                    
                </Switch>
            </BrowserRouter>
        );
    }
}
export default AppRoute;