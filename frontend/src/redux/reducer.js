import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAULIER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAULIER,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAULIER,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAULIER,
} from "./actionType";

const initState = {
  isLoading: true,
  student: [],
  isUpdate: false,
  isAdd: false,
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
        isAdd: true,
      };
    case POST_USER_FAULIER:
      return {
        ...state,
      };
    case DELETE_USER_REQUEST:
      return {
        ...state,
      };
    case DELETE_USER_SUCCESS:
      console.log("DELETE Success: ", payload);
      const userId = payload.id;
      const newStudents = state.student.filter((item) => item.id !== userId);
      return {
        ...state,
        student: newStudents,
      };
    case DELETE_USER_FAULIER:
      return {
        ...state,
      };
    case UPDATE_USER_REQUEST:
      return {
        ...state,
      };
    case UPDATE_USER_SUCCESS:
      console.log("UPDATE Success: ", payload);
      return {
        ...state,
        isUpdate: true,
      };
    case UPDATE_USER_FAULIER:
      return {
        ...state,
      };
    default:
      return state;
  }
};
