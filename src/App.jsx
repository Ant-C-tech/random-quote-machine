import "./App.css";
import { Box} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { QuoteBox } from "./components/QuoteBox";

const useStyles = makeStyles(() => ({
  app: {
    width:'100%',
    height: "100%",
    backgroundColor: "white",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Box className={ classes.app}>
        <QuoteBox />
    </Box>
  );
}

export default App;
