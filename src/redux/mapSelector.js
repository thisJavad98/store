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
    addProductToBasket: () => dispatch(addProductToBasket()),
    deleteProductFromBasket: () => dispatch(deleteProductFromBasket()),
  };
};
