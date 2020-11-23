import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Users from "./Users";
import UsersCreateandEdit from "./UsersCreateandEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    margin: 20,
    fontWeight: "bold",
    fontSize: 14,
    color: "#e8f5e9",
  },
  boxItems: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
  linkText: {
    textDecoration: "none",
    color: "#e8f5e9",
  },
  buttonItems: {
    color: "#e8f5e9",
    fontWeight: "bold",
    textTransform: "none",
  },
}));
export default function CustomeNavbar() {
  const classes = useStyles();
  const history = useHistory();
  //   const handleButton = (type) => {
  //     switch (type) {
  //       case "card": {
  //         return history.push("/");
  //       }
  //       case "table": {
  //         return history.push("/table");
  //       }
  //       default: {
  //         return null;
  //       }
  //     }
  //   };
  return (
    <>
      <AppBar color="transparent" position="static">
        <Toolbar>
          <img
            src="https://cdn.svgporn.com/logos/codeschool.svg"
            height="30px"
            width="30px"
          />
          <Typography className={classes.title}>Apache </Typography>
          <Box className={classes.boxItems}>
            <Button className={classes.buttonItems} color="inherit">
              <Link to="/" className={classes.linkText}>
                Card
              </Link>
            </Button>
            <Button className={classes.buttonItems} color="inherit">
              Table
            </Button>
            <Button
              className={classes.buttonItems}
              variant="text"
              color="inherit"
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <UsersCreateandEdit /> */}
    </>
  );
}
