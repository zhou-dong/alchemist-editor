import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./App.css";
import Pages from "./pages";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#009933"
        }
    }
})

const App = () => (
    <MuiThemeProvider theme={theme}>
        <Pages />
    </MuiThemeProvider>
);

export default App;
