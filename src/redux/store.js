import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";

const middlewareEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(rootReducer, middlewareEnhancer);

export default store;
