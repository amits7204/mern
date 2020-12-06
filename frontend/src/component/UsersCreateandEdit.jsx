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
      // border: "1px solid  #e8f5e9",
      // borderRadius: 6,
      backgroundColor: "#a5d6a7",
      borderRadius: 6,
    },
  },
  btn: {
    border: "1px solid #263238",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 12,
    color: "#263238",
  },
  card: {
    backgroundColor: "#a5d6a7",
    borderRadius: 6,
    padding: 15,
    width: 500,
    margin: "auto",
    marginTop: 40,
  },
}));

export default function UsersCreateandEdit(state) {
  const classes = useStyles();
  console.log("Props: ", state);
  const dispatch = useDispatch();
  const history = useHistory();
  const { isAdd, isUpdate, isFailed } = useSelector((state) => state.app);

  useEffect(() => {
    if (isAdd) {
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
      history.goBack();
    }
  };

  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    console.log("DATA Fun: ", data);
    const { fname, group, city, email, avatar, gender } = data;
    console.log("fname:", data);
    dispatch(postUsersData({ fname, group, city, email, avatar, gender }));
  };
  return (
    <>
      <div className={classes.card}>
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
            required={true}
            name="fname"
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.fname
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Group"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="group"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.group
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="city"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="city"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.city
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Email"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="email"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.email
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Avatar"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            name="avatar"
            required={true}
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.avatar
                : ""
            }
            inputRef={register}
          />
          <TextField
            label="Gender"
            id="outlined-size-small"
            variant="outlined"
            size="small"
            required={true}
            name="gender"
            defaultValue={
              state.location.state !== undefined
                ? state.location.state.gender
                : ""
            }
            inputRef={register}
          />
          <br />
          {isFailed ? (
            <p>{""}</p>
          ) : (
            <p style={{ color: "red" }}>Something is wrong</p>
          )}
          <Button type="submit" variant="outlined" className={classes.btn}>
            {state.location.state !== undefined ? "Update" : "Add"}
          </Button>
        </form>
      </div>
    </>
  );
}
