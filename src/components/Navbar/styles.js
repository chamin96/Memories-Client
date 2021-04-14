import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#e6e8e6",
        borderRadius: 10,
        margin: "20px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 50px",
    },
    heading: {
        color: "#6034b4",
        fontWeight: "lighter",
        textDecoration: "none",
        textTransform: "lowercase",
    },
    image: {
        marginLeft: "15px",
    },
    toolbar: {
        display: "flex",
        justifyContent: "flex-end",
        width: "400px",
    },
    profile: {
        display: "flex",
        justifyContent: "space-between",
        width: "400px",
    },
    userName: {
        display: "flex",
        alignItems: "center",
    },
    brandContainer: {
        display: "flex",
        alignItems: "center",
    },
}));
