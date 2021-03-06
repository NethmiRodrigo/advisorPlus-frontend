import {
	SET_USER,
	SET_UNAUTHENTICATED,
	SET_AUTHENTICATED,
	LOADING_USER,
} from "../types";

const initialState = {
	authenticated: false,
	data: {},
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_AUTHENTICATED:
			return {
				...state,
				authenticated: true,
			};
		case SET_UNAUTHENTICATED:
			return initialState;
		case SET_USER:
			return {
				authenticated: true,
				data: action.payload,
			};
		default:
			return state;
	}
}
