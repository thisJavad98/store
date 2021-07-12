import {
  ADD_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
} from "./basketTypes";

const initialState = {
  basketProduts: [],
  basketCounter: 0,
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_BASKET:
      return {
        ...state,
        basketProduts: [
          ...state.basketProduts,
          {
            id: action.payload.id,
            data: action.payload.productData,
            number: action.payload.numberOrder,
            sumOfPrice:
              action.payload.productData.price * action.payload.numberOrder,
          },
        ],
        basketCounter: state.basketCounter + 1,
      };
    case DELETE_PRODUCT_FROM_BASKET:
      return {
        ...state,
        basketCounter: state.basketCounter - 1,
      };
    default:
      return state;
  }
};

export default basketReducer;
