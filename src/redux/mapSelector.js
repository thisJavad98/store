import {
  addProductToBasket,
  deleteProductFromBasket,
} from "./index";

export const mapStateToProps = (state) => {
  return {
    basketProduts: state.basketProduts,
    basketCounter: state.basketCounter,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addProductToBasket: (product, numberOrder) => dispatch(addProductToBasket(product, numberOrder)),
    deleteProductFromBasket: (id) => dispatch(deleteProductFromBasket(id)),
  };
};