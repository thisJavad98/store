import React from "react";
import {Component} from "react";
import HeaderManager from'../Main/components/Header/HeaderManager.component'
import HeaderCustomer from'../Main/components/Header/HeaderCustomer.component'

class MainLayout extends Component{
    render(){
        if(this.props.headerType === 'customer'){
            return <HeaderCustomer/>
        }else if(this.props.headerType === 'manager'){
            return <HeaderManager/>
        }
    }
}
export default MainLayout;