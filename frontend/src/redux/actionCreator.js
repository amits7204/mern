import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAULIER,
  POST_USER_REQUEST,
  POST_USER_SUCCESS,
  POST_USER_FAULIER,
} from "./actionType";
import axios from "axios";

const getUserRequest = (payload) => {
  return { type: GET_USER_REQUEST, payload };
};

const getUserSuccess = (payload) => {
  return { type: GET_USER_SUCCESS, payload };
};

const getUserFaulier = (payload) => {
  return { type: GET_USER_FAULIER, payload };
};

const postUserRequest = (payload) => {
  return { type: POST_USER_REQUEST, payload };
};

const postUserSuccess = (payload) => {
  return { type: POST_USER_SUCCESS, payload };
};

const postUserFaulier = (payload) => {
  return { type: POST_USER_FAULIER, payload };
};

const getUsersData = () => (dispatch) => {
  dispatch(getUserRequest());
  axios
    .get("http://localhost:8080/users")
    .then((res) => res)
    .then((res) => dispatch(getUserSuccess(res.data)))
    .catch((error) => dispatch(getUserFaulier(error)));
};

const postUsersData = (payload) => (dispatch) => {
  console.log("PAYLOAD: ", payload);
  dispatch(postUserRequest());
  axios
    .post("http://localhost:8080/users", {
      full_name: payload.name,
      group: payload.group,
      city: payload.city,
      email: payload.email,
      avatar: payload.avatar,
      gender: payload.gender,
    })
    .then((res) => res)
    .then((res) => dispatch(postUserSuccess(res.data)))
    .catch((error) => dispatch(postUserFaulier(error)));
};
export { getUsersData, postUsersData };
