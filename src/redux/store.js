import { combineReducers, createStore } from "redux"; 
import { headerClickReducer } from "./headerClickReducer";
import { leftAsideControllersReducer } from "./leftAsideControllersReducer";
import { generatedZebraCodeReducer } from "./generatedZebraCodeReducer";

export const myStore = createStore(combineReducers({headerClickReducer,leftAsideControllersReducer,generatedZebraCodeReducer}))