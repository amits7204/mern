import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button, IconButton, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  deleteUsersData,
  updateUsersData,
} from "../redux/actionCreator";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";
import { blue } from "@material-ui/core/colors";
import CustomeNavbar from "./CustomeNavbar";

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    width: 275,
    borderRadius: 8,
    position: "relative",
    boxShadow:
      "-4px -4px 3px 0px rgba(88, 88, 88, 0.425), 3px 4px 3px 0px rgba(88, 88, 88, 0.425)",
    //  "3px 4px 3px 0px rgba(88, 88, 88, 0.425)"
  },
  addButton: {
    /* Center vertically and horizontally */
    position: "absolute",
    top: " 50%",
    left: "50%",
    margin: "-25px 0 0 -25px",
  },
  container: {
    display: "inline-flex",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 20,
  },
  avtarImg: {
    borderRadius: "50%",
    height: 80,
    width: 80,
    border: "2.5px solid #d1c4e9",
    padding: 2,
    marginTop: "8%",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 0,
    marginTop: "4%",
    color: "#e8f5e9",
  },
  cityName: {
    color: "grey",
    fontWeight: "bold",
    margin: 0,
  },
  spanText: {
    color: "grey",
    fontWeight: "bold",
    marginRight: "8%",
  },
  contact: {
    margin: 20,
    fontWeight: "bold",
    fontSize: 10,
    color: "#e8f5e9",
  },
  title: {
    margin: 20,
    fontWeight: "bold",
    fontSize: 14,
    color: "#e8f5e9",
  },
  boxContainer: {
    borderRadius: 16,
    background: "#ef9a9a",
    textAlign: "center",
    padding: 4,
    color: "#e8f5e9",
    height: "auto",
    fontWeight: "bold",
    fontSize: 10,
    margin: 14,
    width: 40,
  },
  deleteBtn: {
    background: "#81c784",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 12,
    color: "#263238",
  },
  editBtn: {
    border: "1px solid #d4e157",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 12,
    color: "#d4e157",
  },
});
export default function Users() {
  const classes = useStyle();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.app.student);
  console.log("SELECTOR: ", selector[selector.length - 1]);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUsersData());
    console.log("USEEFFECT");
  }, []);

  const handleOnSubmit = () => {
    history.push("/modifie");
  };

  const handleDeleteButton = (id) => {
    console.log("USER ID: ", id);
    dispatch(deleteUsersData(id));
  };

  const handleEditButton = (id, fname, group, city, email, avatar, gender) => {
    history.push({
      pathname: `/modifie/${id}`,
      state: {
        id: id,
        fname: fname,
        group: group,
        city: city,
        email: email,
        avatar: avatar,
        gender: gender,
      },
    });
  };

  return (
    <div className={classes.container}>
      {/* <CustomeNavbar /> */}
      <Grid className={classes.root} spacing={2} sm={3} lg={2} md={3}>
        <IconButton className={classes.addButton}>
          <AddIcon htmlColor="#d1c4e9" onClick={handleOnSubmit} />
        </IconButton>
      </Grid>
      {selector.length > 0 ? (
        selector.map((item) => {
          return (
            <Grid
              className={classes.root}
              md={3}
              spacing={2}
              sm={3}
              lg={2}
              key={item.id}
            >
              <Box className={classes.boxContainer}>{item.group}</Box>
              <img src={item.avatar} alt="avtar" className={classes.avtarImg} />
              <p className={classes.userName}>{item.fname}</p>
              <p className={classes.cityName}>
                <small>{item.city}</small>
              </p>
              <Typography noWrap className={classes.contact}>
                <span className={classes.spanText}>Email:</span>
                {item.email}
              </Typography>
              <div className={classes.container}>
                <Button
                  variant="outlined"
                  className={classes.editBtn}
                  onClick={() =>
                    handleEditButton(
                      item.id,
                      item.fname,
                      item.group,
                      item.city,
                      item.email,
                      item.avatar,
                      item.gender
                    )
                  }
                >
                  Edit
                </Button>
                <Button
                  variant="contained"
                  className={classes.deleteBtn}
                  onClick={() => handleDeleteButton(item.id)}
                >
                  Delete
                </Button>
              </div>
            </Grid>
          );
        })
      ) : (
        <Grid className={classes.root}>
          <IconButton className={classes.addButton}>
            <AddIcon onClick={handleOnSubmit} />
          </IconButton>
        </Grid>
      )}
    </div>
  );
}
