import React from "react";
import {Component} from "react";
import HeaderManager from'../Main/components/Header/HeaderManager.component'
import HeaderCustomer from'../Main/components/Header/HeaderCustomer.component'

class MainLayout extends Component{
    render(){
        if(this.props.headerType === 'customer'){
            return <HeaderCustomer resultPay={"fail"}/>
        }else if(this.props.headerType === 'panelProduct'){
            return <HeaderManager panelProductClass='border rounded-end bg-warning p-2' panelOrdersClass='border rounded-start bg-white p-2' panelQuntityClass='border bg-white p-2'/>
        }else if(this.props.headerType === 'panelOrders'){
            return <HeaderManager panelOrdersClass='border rounded-start bg-warning p-2' panelProductClass='border rounded-end bg-white p-2' panelQuntityClass='border bg-white p-2' />
        }else if(this.props.headerType === 'panelQuntity'){
            return <HeaderManager panelQuntityClass='border bg-warning p-2' panelOrdersClass='border rounded-start bg-white p-2' panelProductClass='border rounded-end bg-white p-2'/>
        }
    }
}
export default MainLayout;