import React from "react";
import { useState,useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function AddUser() {
  const history=useHistory();
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [avatar, setAvatar] = useState("");
  const [place, setPlace] = useState("");
  const [quotes, setQuotes] = useState("");



  useEffect(()=>{
    console.log("User form is updated",{
      name,profession,avatar,place,quotes,
    });
  },[]);
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
    fetch(`https://616b1eb916e7120017fa1233.mockapi.io/users`,{
      method:"POST",
      body:JSON.stringify(newUser),
      headers:{
        "Content-type":"application/json",
      },
      }).then(()=>history.push("/users"))

    
   
  };

  return (
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
        variant="standard" />
      <TextField
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="Paste a avatar"
        variant="standard" />
      <TextField
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Enter a place"
        variant="standard" />
      <TextField
        value={quotes}
        onChange={(e) => setQuotes(e.target.value)}
        placeholder="Enter a quotes"
        variant="standard" />

      <Button variant="outlined" onClick={addUser}>
        AddUser
      </Button>
    </div>
  );
}

fetch("https://616b1eb916e7120017fa1233.mockapi.io/users")
.then((data)=>data.json())
.then((urs)=>console.log(urs));
