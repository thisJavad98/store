import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageNotFoundl from "../components/PageNotFound.component";
import MainLayout from "../layout/Main/Main.layout";
import LoginPage from "../pages/manager/Login.page";
import ManageProduct from "../pages/manager/ProductManager/ProductManage.page";
import Basket from "../pages/customer/Basket.page";
import QuantityPanel from "../pages/manager/InventoryManage.page";
import OrdersPanel from "../pages/manager/OrdersManager/OrdersManager.page";
import HomePage from "../pages/customer/Home.page";
import ProductsPage from "../pages/customer/Products.page";
import ProductPage from "../pages/customer/Product.page";
import CheckOut from "../pages/customer/CheckOut.page";
import ResultPayment from "../pages/customer/PayResult.page";
import { Provider } from "react-redux";
import store from "../redux/store";
import HeaderCustomer from "../layout/Main/components/Header/HeaderCustomer.component";

const AppRoute = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route
            render={({ location }) => {
              return (
                <Switch location={location}>
                 
                  <Route path={`/products`}>
                    <MainLayout headerType="customer" />
                    <ProductsPage
                      groupTitle={location.pathname.split("/")[2]}
                    />
                  </Route>
                  <Route path="/product">
                    <MainLayout headerType="customer" />
                    <ProductPage
                      productName={location.pathname.split("/")[2]}
                    />
                  </Route>
                  <Route path="/basket">
                    <MainLayout headerType="customer" />
                    <Basket />
                  </Route>
                  <Route path="/checkout">
                    <MainLayout headerType="customer" />
                    <CheckOut />
                  </Route>
                  <Route path="/payment-result-success">
                    <HeaderCustomer resultPay={"success"}/>
                    <ResultPayment resultPay={"success"}/>
                  </Route>
                  <Route path="/payment-result-fail">
                  <HeaderCustomer resultPay={"fail"}/>
                    <ResultPayment resultPay={"fail"}/>
                  </Route>
                  <Route path="/panel-login">
                    <LoginPage />
                  </Route>
                  <Route path="/panel-product">
                    <MainLayout headerType="panelProduct" />
                    <ManageProduct />
                  </Route>
                  <Route path="/panel-quantity">
                    <MainLayout headerType="panelQuntity" />
                    <QuantityPanel />
                  </Route>
                  <Route path="/panel-orders">
                    <MainLayout headerType="panelOrders" />
                    <OrdersPanel />
                  </Route>
                  <Route path="/" exact>
                    <MainLayout headerType="customer" />
                    <HomePage />
                  </Route>
                  <Route path="/*">
                    <PageNotFoundl />
                  </Route>
                </Switch>
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default AppRoute;
