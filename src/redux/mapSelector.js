import {
  addProductToBasket,
  deleteProductFromBasket,
  changeNumberOfOrder,
} from "./index";

export const mapStateToProps = (state) => {
  return {
    basketProduts: state.basketProduts,
    basketCounter: state.basketCounter,
    basketTotalPrice: state.basketTotalPrice,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addProductToBasket: (product, numberOrder) =>
      dispatch(addProductToBasket(product, numberOrder)),

    deleteProductFromBasket: (id, productPrice) =>
      dispatch(deleteProductFromBasket(id, productPrice)),

    changeNumberOfOrder: (id, newNumber) =>
      dispatch(changeNumberOfOrder(id, newNumber)),
  };
};
