import { combineReducers } from "redux";
import actionReducer from "./add_to_cart/reducer";

const rootReducer = combineReducers({
    cartedItems: actionReducer,
});

export default rootReducer;