import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAULIER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAULIER,
} from "./actionType";

const initState = {
  isLoading: true,
  student: [],
};

export default (state = initState, { type, payload }) => {
  console.log("Reducer: ", payload);
  switch (type) {
    case GET_USER_REQUEST:
      return {
        ...state,
      };
    case GET_USER_SUCCESS:
      console.log("Success: ", payload);
      return {
        ...state,
        isLoading: false,
        student: payload,
      };
    case GET_USER_FAULIER:
      return {
        ...state,
      };
    case POST_USER_REQUEST:
      return {
        ...state,
      };
    case POST_USER_SUCCESS:
      console.log("Post Success: ", payload);
      return {
        ...state,
      };
    case POST_USER_FAULIER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
