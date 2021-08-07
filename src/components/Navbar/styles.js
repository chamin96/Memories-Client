import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  list: {
    width: "75vw",
  },
  appBar: {
    backgroundColor: "#fcfcfc",
    height: "80px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "10px 20px",
  },
  image: {
    marginLeft: "5px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
  },
  userName: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px",
  },
  logout: {
    marginLeft: "10px",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
}));
