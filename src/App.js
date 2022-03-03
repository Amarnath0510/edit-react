import React, { useReducer } from "react";
import "./App.css";
import { useState,useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { AddUser } from "./AddUser";
import { UserList } from "./UserList";
import { Home } from "./Home";
import { NotFound } from "./NotFound";
import { EditUser } from "./EditUser";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Paper from '@mui/material/Paper';


import { createTheme, ThemeProvider } from "@mui/material/styles";

import Toolbar from "@mui/material/Toolbar";


function App() {
 
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });



useEffect(()=>{
  fetch("https://616b1eb916e7120017fa1233.mockapi.io/users")
  .then((data)=>data.json())
  .then((urs)=>setUsers(urs))
},[]);


  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={3} style={{borderRadius:"0 px",minHeight:"100vh"}} >

 
      <div className="App">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Button
              onClick={() => history.push("/")}
              variant="text"
              color="inherit"
            >
              Home
            </Button>
            <Button
              onClick={() => history.push("/users")}
              variant="text"
              color="inherit"
            >
              Users
            </Button>
            <Button
              onClick={() => history.push("/addusers")}
              variant="text"
              color="inherit"
            >
              Add Users
            </Button>
            <Button
             startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              style={{ marginLeft: "auto" }}
              variant="text"
              color="inherit"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "Dark" : "light"}mode
            </Button>
          </Toolbar>
        </AppBar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users/edit/:id">
            <EditUser   />
          </Route>
          <Route path="/addusers">
            <AddUser  />
          </Route>
          <Route path="/users">
            <UserList  />
          </Route>

          <Route path="**">
            <NotFound />
          </Route>
        </Switch>
      </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
