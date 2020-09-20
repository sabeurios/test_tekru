import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import UserReducer from "../reducers/UserReducer"

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  users: UserReducer
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware))
);
export default store;
