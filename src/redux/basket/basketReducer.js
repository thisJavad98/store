import {
  ADD_PRODUCT_TO_BASKET,
  DELETE_PRODUCT_FROM_BASKET,
  CHANGE_NUMBER_OF_ORDER,
} from "./basketTypes";

let initialState = {
  basketProduts: [],
  basketCounter: 0,
  basketTotalPrice: 0,
};

let newPrice=0
let tempPrice=0

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
        basketTotalPrice:
          state.basketTotalPrice +
          action.payload.productData.price * action.payload.numberOrder,
      };
    case DELETE_PRODUCT_FROM_BASKET:
      return {
        ...state,
        basketProduts: state.basketProduts.filter(
          (item) => item.id !== +action.id
        ),
        basketCounter: state.basketCounter - 1,
        basketTotalPrice: state.basketTotalPrice - action.productPrice,
      };
    case CHANGE_NUMBER_OF_ORDER:
      return {
        ...state,
        basketProduts:state.basketProduts.map(item=>{
          if(item.id === action.id){
            tempPrice=item.sumOfPrice
            item.number = action.newNumber
            item.sumOfPrice=(item.number*item.data.price)
            newPrice=item.sumOfPrice-tempPrice
            return item
          }else return item
        }),
        basketTotalPrice:state.basketTotalPrice + newPrice
      };
    default:
      return state;
  }
};

export default basketReducer;
