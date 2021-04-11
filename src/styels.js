import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        backgroundColor: "#e6e8e6",
        borderRadius: 10,
        margin: "20px 0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    heading: {
        color: "#6034b4",
        fontWeight: "lighter",
        textTransform: "lowercase",
    },
    image: {
        marginLeft: "15px",
    },
    [theme.breakpoints.down("sm")]: {
        mainContainer: {
            flexDirection: "column-reverse",
        },
    },
}));
