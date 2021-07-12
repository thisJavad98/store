import { createStore } from "redux";
import basketReducer from "./basket/basketReducer";

const store = createStore(basketReducer)

export default store