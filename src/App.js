import React from "react";
import "./App.css";
import { useState } from "react";
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
// import { height } from "@mui/system";

function App() {
  const INITIAL_USERS = [
    {
      name: "Scarlett",
      avatar:
        "https://www.microsoft.com/insidetrack/blog/uploads/prod/2018/06/IMG_1786.jpg",
      id: "9",
      profession: "Software Engineer",
      place: "New York",
      quotes: "Be silent and achieve",
    },
    {
      name: "Franklin",
      avatar:
        "https://www.pngitem.com/pimgs/m/455-4554869_doctor-with-stethoscope-png-png-download-doctor-avatars.png",

      id: "10",
      profession: "Doctor",
      place: "California",
      quotes:
        "Never lose sight of the face that the most important yard stick to your success is how you treat other people",
    },
    {
      name: "Catherine",
      avatar:
        "https://careerwise.ceric.ca/wp-content/uploads/2020/11/iStock-1226295217.jpg",
      id: "11",
      profession: "Mentor",
      place: "Paris",
      quotes:
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    },
    {
      name: "Sylvester",
      avatar:
        "https://www.simplilearn.com/ice9/free_resources_article_thumb/What-Skills-Do-I-Need-to-Become-a-Data-Scientist.jpg",
      id: "12",
      profession: "Data Scientist",
      place: "Florida",
      quotes:
        "In three words I can sum up everything I've learned about life: it goes on.",
    },
    {
      name: "Benzia",
      avatar:
        "https://www.kindpng.com/picc/m/193-1933797_girl-png-avatars-welcome-air-hostess-png-transparent.png",
      id: "13",
      profession: "Air Hostess",
      place: "London",
      quotes:
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    },
    {
      name: "Williams",
      avatar:
        "https://bentech.com.au/wp-content/uploads/2015/10/dt.common.streams.StreamServer-e1494831911548.jpg",
      id: "14",
      profession: "Chartered Accountant",
      place: "Washington",
      quotes: "If you tell the truth, you don't have to remember anything.",
    },
    {
      name: "Adams",
      avatar:
        "https://media.istockphoto.com/photos/corporate-pilot-using-electronic-tablet-picture-id163221634?k=20&m=163221634&s=612x612&w=0&h=TavPJ_uswmhyw7n4H2Q3LYQxVMn_J31jQu1phUN6SBs=",
      id: "15",
      profession: "Commercial pilot",
      place: "Beijing",
      quotes:
        "A friend is someone who knows all about you and still loves you.",
    },
    {
      name: "Ramsay",
      avatar: "https://static.cordonbleu.edu/Files/MediaFile/70794.jpg",
      id: "16",
      profession: "Executive-chef",
      place: "Mexico",
      quotes:
        "To live is the rarest thing in the world. Most people exist, that is all.",
    },
    {
      name: "Brewson",
      avatar:
        "https://media.istockphoto.com/photos/businessman-signing-electronic-legal-document-on-digital-tablet-picture-id1293402642?b=1&k=20&m=1293402642&s=170667a&w=0&h=u86msOQpUVkGj91eHnav8_YolPjmhBWBoZeq1UXCTU4=",
      id: "17",
      profession: "Legal Advisor",
      place: "Sydney",
      quotes:
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    },
    {
      name: "Hemsworth",
      avatar:
        "https://torontolife.com/wp-content/uploads/2021/05/USED-DSC07686-copy-803x603.jpg",
      id: "18",
      profession: "Entrepreneur",
      place: "Frankfurt",
      quotes:
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    },
    {
      name: "Denverson",
      avatar:
        "https://www.bmwgroup.jobs/content/dam/grpw/websites/bmwgroup_jobs/cn/all-jobfields/engineering/BMW-Careers-engineering-engineer-laptop-car-hm.jpg.grp-transform/small/BMW-Careers-engineering-engineer-laptop-car-hm.jpg",
      id: "19",
      profession: "Automobile Engineer",
      place: "Toronto",
      quotes: "The way to get started is to quit talking and begin doing",
    },
    {
      name: "Jack",
      avatar:
        "https://snowmaster.com.au/wp-content/uploads/2019/11/Own-a-Restaurent.jpg",
      id: "20",
      profession: "Restaurant owner",
      place: "Texas",
      quotes:
        "If life were predictable it would cease to be life, and be without flavor.",
    },
  ];
  const [users, setUsers] = useState(INITIAL_USERS);
  const history = useHistory();
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
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
            <EditUser users={users} setUsers={setUsers} />
          </Route>
          <Route path="/addusers">
            <AddUser users={users} setUsers={setUsers} />
          </Route>
          <Route path="/users">
            <UserList users={users} setUsers={setUsers} />
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
