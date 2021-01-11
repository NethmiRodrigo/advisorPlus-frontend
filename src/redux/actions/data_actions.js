import axios from "axios";
import {
	LOADING_UI,
	SET_COMMENTS,
	SET_ERRORS,
	SET_POST,
	SET_POSTS,
	STOP_LOADING_UI,
} from "../types";

export const getAllPosts = () => async (dispatch) => {
	dispatch({
		type: LOADING_UI,
	});
	try {
		let results = await axios.get("/post");
		dispatch({
			type: SET_POSTS,
			payload: {
				posts: [results.data],
			},
		});
		dispatch({
			type: STOP_LOADING_UI,
		});
	} catch (error) {
		dispatch({
			type: SET_ERRORS,
			payload: error?.response?.data,
		});
		console.error(error);
	}
};

export const getPost = (id) => async (dispatch) => {
	dispatch({
		type: LOADING_UI,
	});
	try {
		let results = await axios.get(`/post/${id}`);
		dispatch({
			type: SET_POST,
			payload: { post: results.data },
		});
		dispatch({
			type: STOP_LOADING_UI,
		});
	} catch (error) {
		dispatch({
			type: SET_ERRORS,
		});
		console.log(error);
	}
};

export const createPost = (post, history) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let results = await axios.post("/post", post);
		await dispatch(getAllPosts());
	} catch (error) {
		console.log(error);
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data,
		});
	}
};

export const getAllCommentsOfAPost = (postId) => async (dispatch) => {
	dispatch({ type: LOADING_UI });
	try {
		let results = await axios.get(`/comment/${postId}`);
		dispatch({
			type: SET_COMMENTS,
			payload: {
				comments: results?.data,
			},
		});
	} catch (error) {
		console.log(error);
		dispatch({
			type: SET_ERRORS,
			payload: error.response?.data,
		});
	}
};
