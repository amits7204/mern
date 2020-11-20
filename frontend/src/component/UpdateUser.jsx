import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateUsersData } from "../redux/actionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function UpdateUser(state) {
  const classes = useStyles();
  console.log("Props: ", state);
  const {
    id,
    fname,
    group,
    city,
    email,
    avatar,
    gender,
  } = state.location.state;
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOnSubmit = (data) => {
    console.log("DATA fun: ", data);
    const { fname, group, city, email, avatar, gender } = data;
    console.log(fname);
    dispatch(
      updateUsersData({ id, fname, group, city, email, avatar, gender })
    );
    history.goBack();
  };
  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit(handleOnSubmit)}>
        <TextField
          label="Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="fname"
          defaultValue={fname}
          inputRef={register}
        />
        <br />
        <TextField
          label="Group"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="group"
          defaultValue={group}
          inputRef={register}
        />
        <br />
        <TextField
          label="city"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="city"
          defaultValue={city}
          inputRef={register}
        />
        <br />
        <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          defaultValue={email}
          name="email"
          inputRef={register}
        />
        <br />
        <TextField
          label="Avatar"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="avatar"
          defaultValue={avatar}
          inputRef={register}
        />
        <br />
        <TextField
          label="Gender"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="gender"
          defaultValue={gender}
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
