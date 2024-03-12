import { CART, UPDATE, DELETE, ADD } from "./actionType";

const actionReducer = (state = [],action )=>{
    switch(action.type){
        case CART:
            return 0;
        case UPDATE:
            return 0;
        case DELETE:
            return 0;
        case ADD:
            return 0;
        default:
            return state;
    }
};

export default actionReducer;