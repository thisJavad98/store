import React from "react";
import {Component} from "react";
import HeaderManager from'../Main/components/Header/HeaderManager.component'
import HeaderCustomer from'../Main/components/Header/HeaderCustomer.component'

class MainLayout extends Component{
    render(){
        if(this.props.headerType === 'customer'){
            return <HeaderCustomer/>
        }else if(this.props.headerType === 'panelProduct'){
            return <HeaderManager panelProductClass='border rounded-end bg-warning' panelOrdersClass='border rounded-start bg-white' panelQuntityClass='border bg-white'/>
        }else if(this.props.headerType === 'panelOrders'){
            return <HeaderManager panelOrdersClass='border rounded-start bg-warning' panelProductClass='border rounded-end bg-white' panelQuntityClass='border bg-white' />
        }else if(this.props.headerType === 'panelQuntity'){
            return <HeaderManager panelQuntityClass='border bg-warning' panelOrdersClass='border rounded-start bg-white' panelProductClass='border rounded-end bg-white'/>
        }
    }
}
export default MainLayout;