import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
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
  const handleOnSubmit = (data) => {
    console.log("DATA: ", data);
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
          ref={register}
        />
        <br />
        <TextField
          label="Group"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="group"
          ref={register}
        />
        <br />
        <TextField
          label="city"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="city"
          ref={register}
        />
        <br />
        <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="email"
          ref={register}
        />
        <br />
        <TextField
          label="Avatar"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="avatar"
          ref={register}
        />
        <br />
        <TextField
          label="Gender"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          name="gender"
          ref={register}
        />
        <br />
        <Button type="submit" variant="outlined" color="secondary">
          Submit
        </Button>
      </form>
    </>
  );
}
