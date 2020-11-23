import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUsersData, updateUsersData } from "../redux/actionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
      marginTop: 20,
    },
  },
}));

export default function UsersCreateandEdit(state) {
  const classes = useStyles();
  console.log("Props: ", state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAdd, isUpdate } = useSelector((state) => state.app);

  useEffect(() => {
    if (isAdd && state.location.state === undefined) {
      history.goBack();
    }

    if (isUpdate && state.location.state !== undefined) {
      history.goBack();
    }
  });
  const handleOnEditSubmit = (data) => {
    console.log("DATA fun: ", data);
    if (state.location.state !== undefined) {
      const { id } = state.location.state;
      const { fname, group, city, email, avatar, gender } = data;
      console.log(fname);
      dispatch(
        updateUsersData({ id, fname, group, city, email, avatar, gender })
      );
    }
  };

  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    console.log("DATA Fun: ", data);
    const { fname, group, city, email, avatar } = data;
    console.log(fname);
    dispatch(postUsersData({ fname, group, city, email, avatar }));
  };
  return (
    <>
      <form
        className={classes.root}
        onSubmit={
          state.location.state !== undefined
            ? handleSubmit(handleOnEditSubmit)
            : handleSubmit(handleOnSubmit)
        }
      >
        <TextField
          label="Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="fname"
          defaultValue={
            state.location.state !== undefined ? state.location.state.fname : ""
          }
          inputRef={register}
        />
        <br />
        <TextField
          label="Group"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="group"
          defaultValue={
            state.location.state !== undefined ? state.location.state.group : ""
          }
          inputRef={register}
        />
        <br />
        <TextField
          label="city"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="city"
          defaultValue={
            state.location.state !== undefined ? state.location.state.city : ""
          }
          inputRef={register}
        />
        <br />
        <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="email"
          defaultValue={
            state.location.state !== undefined ? state.location.state.email : ""
          }
          inputRef={register}
        />
        <br />
        <TextField
          label="Avatar"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="avatar"
          defaultValue={
            state.location.state !== undefined
              ? state.location.state.avatar
              : ""
          }
          inputRef={register}
        />
        <br />
        <TextField
          label="Gender"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="gender"
          defaultValue={
            state.location.state !== undefined
              ? state.location.state.gender
              : ""
          }
          inputRef={register}
        />
        <br />
        <Button type="submit" variant="outlined" color="secondary">
          Submit
        </Button>
      </form>
    </>
  );
}
