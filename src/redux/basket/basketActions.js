import {
  ADD_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
} from "./basketTypes";

let initianId = 0;

export const addProductToBasket = (product, numberOrder) => {
  return {
    type: ADD_PRODUCT_TO_BASKET,
    payload: {
      id: ++initianId,
      productData: product,
      numberOrder: numberOrder
    },
  };
};

export const deleteProductFromBasket = (id) => {
  --initianId
  return {
    type: DELETE_PRODUCT_FROM_BASKET,
    id:id,
  };
};
