import axios from "axios";
import jwtDecode from "jwt-decode";

import {
	SET_USER,
	SET_ERRORS,
	CLEAR_ERRORS,
	LOADING_UI,
	SET_UNAUTHENTICATED,
	LOADING_USER,
	STOP_LOADING_UI,
} from "../types";

let userID;

export const register_user = (user_data, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let firebase_data = {
			email: user_data.email,
			password: user_data.password,
		};
		let results = await axios.post("/signup", firebase_data);
		userID = results.data?.userID;
		setAuthorizationHeader(results.data.token);
		await dispatch(create_advsior_profile(user_data, history));
	} catch (error) {
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data?.error,
		});
		console.log(error);
	}
};

const create_advsior_profile = (user_data, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		const user = {
			name: user_data.name,
			status: user_data.status,
			rating: user_data.rating,
			uid: userID,
		};
		let results = await axios.post("/advisor_profile", user);
		dispatch({
			type: SET_USER,
			payload: results.data,
		});
		dispatch({
			type: CLEAR_ERRORS,
		});
		history.push("/");
	} catch (error) {
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data,
		});
		console.log(error);
	}
};

export const login = (user, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let results = await axios.post("/login", user);
		userID = results.data.userID;
		setAuthorizationHeader(results.data.token);
		await dispatch(getUserData(results.data.token));
		history.push("/");
	} catch (error) {
		console.log(error.response?.data, error);
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data,
		});
	}
};

export const getUserData = (token) => async (dispatch) => {
	let uid = jwtDecode(token).user_id;
	try {
		let result = await axios.get(`/advisor_profile/${uid}`);
		dispatch({
			type: SET_USER,
			payload: result,
		});
		dispatch({ type: CLEAR_ERRORS });
	} catch (error) {
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data,
		});
		console.log(error);
	}
};

export const logoutUser = () => (dispatch) => {
	localStorage.removeItem("AdvsiorPlusToken");
	delete axios.defaults.headers.common["Authorization"];
	dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = (token) => {
	const advsiorToken = `Bearer ${token}`;
	localStorage.setItem("AdvsiorPlusToken", advsiorToken);
	axios.defaults.headers.common["Authorization"] = advsiorToken;
};
