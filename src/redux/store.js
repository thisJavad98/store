import { createStore } from "redux";
import basketReducer from "./basket/basketReducer";

const store = createStore(basketReducer,window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_())

export default store