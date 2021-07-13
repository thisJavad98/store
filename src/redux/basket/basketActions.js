import {
  ADD_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
  CHANGE_NUMBER_OF_ORDER
} from "./basketTypes";

let initianId = 0;

export const addProductToBasket = (product, numberOrder) => {
  return {
    type: ADD_PRODUCT_TO_BASKET,
    payload: {
      id: ++initianId,
      productData: product,
      numberOrder: numberOrder,
    },
  };
};

export const deleteProductFromBasket = (id, productPrice) => {
  --initianId;
  return {
    type: DELETE_PRODUCT_FROM_BASKET,
    id: id,
    productPrice: productPrice,
  };
};

export const changeNumberOfOrder = (id , newNumber) =>{
  return {
    type:CHANGE_NUMBER_OF_ORDER,
    id:id,
    newNumber:newNumber
  }
}
