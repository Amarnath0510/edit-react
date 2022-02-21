import React from "react";
import "./App.css";
// import Users from "./users.js";
// import AddUser from "./addusers.js";
import { useState } from "react";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import { SettingsSystemDaydreamRounded } from "@mui/icons-material";
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
        "https://visaguideinfo.com/wp-content/uploads/2020/04/automobile-engineer.jpg",
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

  return (
    <div className="App">
    <AddUser users={users} setUsers={setUsers}/>   
    <UserList users={users} />
    </div>
  );
}

function AddUser({users,setUsers}){
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [avatar, setAvatar] = useState("");
  const [place, setPlace] = useState("");
  const [quotes, setQuotes] = useState("");
 
  const addUser = () => {
    console.log("AddingUsers...", name, profession, avatar, place, quotes);
    const newUser = {
      name,
      profession,
      avatar,
      place,
      quotes,
    };
    console.log(newUser);
    setUsers([...users, newUser]);
  };

  return(
    <div className="add-user">
      <TextField 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter a name"
      
      variant="standard" />

      
        <TextField
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          placeholder="Enter a profession"
          variant="standard" 
        />
        <TextField
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Paste a avatar"
          variant="standard"
        />
        <TextField
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          placeholder="Enter a place"
          variant="standard"
        />
        <TextField
          value={quotes}
          onChange={(e) => setQuotes(e.target.value)}
          placeholder="Enter a quotes"
          variant="standard"
        />
        
        <Button variant="outlined" onClick={addUser}>AddUser</Button>
      </div>

  )
}




function UserList({users}){
  return(
    <section className="section-container">
    {users.map(({name,profession,avatar,place,quotes})=>(
      <Users name={name} profession={profession} avatar={avatar} place={place} quotes={quotes}/>
    ))}
    </section>
  );
}



function Users({name,profession,avatar,place,quotes,index}){
  
    return (
      <div className="users">
     
          <Card className="users-list-container" key={index} variant="outlined">
            <div className="details -container">
              <img className="img-container" src={avatar} alt={name} />
              <h2 className="name-container">{name}</h2>
            <h4 className="profession-container">{profession}</h4>
              <p className="place-container">{place}</p>
              <p className="quotes-container">{quotes}</p>
              <EditIcon className="edit-container" />
              <DeleteIcon className="delete-container"/>
            </div>
          </Card>
        
      </div>
    );
    
        }
    
  
 

export default App;
