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

const deleteUserRequest = (payload) => {
  return { type: DELETE_USER_REQUEST, payload };
};

const deleteUserSuccess = (payload) => {
  return { type: DELETE_USER_SUCCESS, payload };
};

const deleteUserFaulier = (payload) => {
  return { type: DELETE_USER_FAULIER, payload };
};

const updateUserRequest = (payload) => {
  return { type: UPDATE_USER_REQUEST, payload };
};

const updateUserSuccess = (payload) => {
  return { type: UPDATE_USER_SUCCESS, payload };
};

const updateUserFaulier = (payload) => {
  return { type: UPDATE_USER_FAULIER, payload };
};

const getUsersData = (payload) => (dispatch) => {
  console.log("GET PAYLOAD: ", payload.value);
  dispatch(getUserRequest());
  axios({
    url: "http://localhost:8080/users",
    method: "get",
    params: {
      page: payload.value,
      limit: payload.limit,
    },
  })
    .then((res) => res)
    .then((res) => dispatch(getUserSuccess(res.data)))
    .catch((error) => dispatch(getUserFaulier(error)));
};

const postUsersData = (payload) => (dispatch) => {
  console.log("PAYLOAD: ", payload);
  dispatch(postUserRequest());
  axios
    .post("http://localhost:8080/users/add", {
      fname: payload.fname,
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

const deleteUsersData = (id) => (dispatch) => {
  console.log("ID: ", id);
  dispatch(deleteUserRequest());
  axios
    .delete(`http://localhost:8080/api/student/${id}`)
    .then((res) => res.data)
    .then((res) => dispatch(deleteUserSuccess(id)))
    .catch((error) => dispatch(deleteUserFaulier(error)));
};

const updateUsersData = (payload) => (dispatch) => {
  console.log("UPDATE: ", payload);
  dispatch(updateUserRequest());
  axios
    .put(`http://localhost:8080/api/student/update/${payload.id}`, {
      fname: payload.fname,
      group: payload.group,
      city: payload.city,
      email: payload.email,
      avatar: payload.avatar,
      gender: payload.gender,
    })
    .then((res) => res.data)
    .then((res) => dispatch(updateUserSuccess(res)))
    .catch((error) => dispatch(updateUserFaulier(error)));
};

export { getUsersData, postUsersData, deleteUsersData, updateUsersData };
