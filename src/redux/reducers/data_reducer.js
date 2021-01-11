import { SET_POSTS, SET_COMMENTS, SET_ADVISORS, SET_POST } from "../types";

const initialState = {
	posts: [],
	advsiors: [],
	comments: [],
	post: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_POSTS:
			return {
				...state,
				posts: action.payload.posts,
			};
		case SET_POST:
			return {
				...state,
				post: action.payload,
			};
		case SET_COMMENTS:
			return {
				...state,
				cooments: action.payload.comments,
			};
		case SET_ADVISORS:
			return {
				...state,
				advsiors: action.payload.advsiors,
			};
		default:
			return state;
	}
}
