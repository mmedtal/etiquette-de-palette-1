import { combineReducers, createStore } from "redux"; 
import { headerClickReducer } from "./headerClickReducer";
import { leftAsideControllersReducer } from "./leftAsideControllersReducer";

export const myStore = createStore(combineReducers({headerClickReducer,leftAsideControllersReducer}))