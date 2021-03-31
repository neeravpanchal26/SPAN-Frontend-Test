// Custom imports
import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import Reducer from "../reducers/reducer";

export default function configureStore(preloadedState) {
    return createStore(Reducer, preloadedState, applyMiddleware(thunkMiddleware));
}