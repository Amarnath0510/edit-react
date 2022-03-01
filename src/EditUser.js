import React from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

export function EditUser({ users, setUsers }) {
  const history = useHistory();
  const { id } = useParams();
  const user = users[id];
  console.log(id, user);
  const [name, setName] = useState(user.name);
  const [profession, setProfession] = useState(user.profession);
  const [avatar, setAvatar] = useState(user.avatar);
  const [place, setPlace] = useState(user.place);
  const [quotes, setQuotes] = useState(user.quotes);

  const editUser = () => {
    const updatedUser = {
      name,
      profession,
      avatar,
      place,
      quotes,
    };
    console.log(updatedUser);

    const copyUserList = [...users];
    copyUserList[id] = updatedUser;
    setUsers(copyUserList);
    history.push("/users");
  };

  return (
    <div className="add-user">
      <TextField
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter a name"
        variant="standard"
      />

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

      <Button variant="outlined" onClick={editUser}>
        Save
      </Button>
    </div>
  );
}

// console.log("AddingUsers...", name, profession, avatar, place, quotes);
