import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Box, Button, IconButton } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersData,
  deleteUsersData,
  updateUsersData,
} from "../redux/actionCreator";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";

const useStyle = makeStyles({
  root: {
    width: 275,
    borderRadius: 6,
    position: "relative",
    boxShadow:
      "-5px -4px 3px 0px rgba(255, 255, 255, 0.425), 3px 4px 3px 0px rgba(88, 88, 88, 0.425)",
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
    justifyContent: "space-around",
    marginBottom: 16,
  },
  avtarImg: {
    borderRadius: "50%",
    height: 80,
    width: 80,
    border: "2.5px solid #5a59a3",
    padding: 2,
    marginTop: "8%",
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
    margin: 0,
    marginTop: "4%",
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
    fontSize: 12,
  },
  boxContainer: {
    borderRadius: 16,
    background: "#960018",
    textAlign: "center",
    padding: 4,
    color: "#ffffff",
    height: "auto",
    fontWeight: "bold",
    fontSize: 10,
    margin: 14,
    width: 40,
  },
  deleteBtn: {
    background: "#960018",
    borderRadius: 4,
    fontWeight: "bold",
    fontSize: 12,
    color: "#ffffff",
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
    history.push("/adduser");
  };

  const handleDeleteButton = (id) => {
    console.log("USER ID: ", id);
    dispatch(deleteUsersData(id));
  };

  const handleEditButton = (id, fname, group, city, email, avatar, gender) => {
    history.push({
      pathname: "/updateuser",
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
      <Card className={classes.root}>
        <IconButton className={classes.addButton}>
          <AddIcon onClick={handleOnSubmit} />
        </IconButton>
      </Card>
      {selector.length > 0 ? (
        selector.map((item) => {
          return (
            <Card className={classes.root} key={item.id}>
              <Box className={classes.boxContainer}>{item.group}</Box>
              <img src={item.avatar} alt="avtar" className={classes.avtarImg} />
              <p className={classes.userName}>{item.name}</p>
              <p className={classes.cityName}>
                <small>{item.city}</small>
              </p>
              <p className={classes.contact}>
                <span className={classes.spanText}>Email:</span>
                {item.email}
              </p>
              <div className={classes.container}>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() =>
                    handleEditButton(
                      item.id,
                      item.name,
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
            </Card>
          );
        })
      ) : (
        <Card className={classes.root}>
          <IconButton className={classes.addButton}>
            <AddIcon onClick={handleOnSubmit} />
          </IconButton>
        </Card>
      )}
    </div>
  );
}
