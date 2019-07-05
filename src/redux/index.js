import {createStore,applyMiddleware,combineReducers} from "redux"
import thunkMiddleWare from "redux-thunk"
import reducer from "./reducer"
export * from "./actions_type"
export * from "./actions"
export default new createStore(reducer,applyMiddleware(thunkMiddleWare))