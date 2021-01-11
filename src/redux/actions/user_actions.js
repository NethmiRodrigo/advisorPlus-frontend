import axios from "axios";
import jwtDecode from "jwt-decode";

import {
	SET_USER,
	SET_ERRORS,
	CLEAR_ERRORS,
	LOADING_UI,
	SET_UNAUTHENTICATED,
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
		setAuthorizationHeader(results.data.token);
		user_data.uid = results.data?.userID;
		if (user_data.type === "advisor") {
			setUserType("advisor");
			await dispatch(create_advsior_profile(user_data, history));
		} else if (user_data.type === "user") {
			setUserType("user");
			await dispatch(create_user_profile(user_data, history));
		}
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
			uid: user_data.uid,
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

export const create_user_profile = (user, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		const user_profile = {
			user_id: user.uid,
			name: user.fullname,
			content: "",
			dateOfBirth: user.dob,
			gender: user.gender,
			status: "active",
		};
		let results = await axios.post("/user_sql", user_profile);
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
			payload: error?.response?.data,
		});
	}
};

export const login = (user, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let results = await axios.post("/login", user);
		setAuthorizationHeader(results.data.token);
		if (results.data?.roles?.includes("user")) {
			await dispatch(getUserDetails(results.data.token));
			setUserType("user");
		} else {
			await dispatch(getUserDetails(results.data.token));
			setUserType("advisor");
		}
		dispatch({
			type: STOP_LOADING_UI,
		});
		history.push("/");
	} catch (error) {
		console.log(error.response?.data, error);
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data,
		});
	}
};

export const getUserDetails = (token) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	let uid = jwtDecode(token).user_id;
	try {
		let result = await axios.get(`/user_sql/${uid}`);
		dispatch({
			type: SET_USER,
			payload: result.data,
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

export const getAdvsiorDetails = (token) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	let uid = jwtDecode(token).user_id;
	try {
		let result = await axios.get(`/advisor_profile/${uid}`);
		dispatch({
			type: SET_USER,
			payload: result.data,
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
	localStorage.removeItem("AdvisorPlusUser");
	delete axios.defaults.headers.common["Authorization"];
	dispatch({ type: SET_UNAUTHENTICATED });
};

const setAuthorizationHeader = (token) => {
	const advsiorToken = `Bearer ${token}`;
	localStorage.setItem("AdvsiorPlusToken", advsiorToken);
	axios.defaults.headers.common["Authorization"] = advsiorToken;
};

const setUserType = (type) => {
	let encodedType = btoa(type);
	localStorage.setItem("AdvsiorPlusUser", encodedType);
};
