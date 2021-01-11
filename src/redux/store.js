import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import data_reducer from "./reducers/data_reducer";
import UIReducer from "./reducers/ui_reducer";
import userReducer from "./reducers/user_reducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
	user: userReducer,
	ui: UIReducer,
	data: data_reducer,
});

const store = createStore(
	reducers,
	initialState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
