import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { postUsersData } from "../redux/actionCreator";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

export default function AddUser() {
  const classes = useStyles();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOnSubmit = (data) => {
    console.log("DATA Fun: ", data);
    const { fname, group, city, email, avatar } = data;
    console.log(fname);
    dispatch(postUsersData({ fname, group, city, email, avatar }));
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
          inputRef={register}
        />
        <br />
        <TextField
          label="Group"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="group"
          inputRef={register}
        />
        <br />
        <TextField
          label="city"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="city"
          inputRef={register}
        />
        <br />
        <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
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
          inputRef={register}
        />
        <br />
        <TextField
          label="Gender"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="gender"
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
