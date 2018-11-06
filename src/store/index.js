import userReducer from '../reducer/addItems.reducer';
import { combineReducers } from 'redux';
import {createStore} from "redux";
import cartReducer from "../reducer/cart.reducer";
import {composeWithDevTools} from "redux-devtools-extension";


const reducer = combineReducers({
    userReducer,
    cartReducer,
});

export const store = createStore(reducer,composeWithDevTools());

