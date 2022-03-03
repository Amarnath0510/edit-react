import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

export function EditUser({}) {
  
  const { id } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(`https://616b1eb916e7120017fa1233.mockapi.io/users/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((ur) => setUser(ur));
  }, []);

  return user ? <UpdatedUser user={user} /> : "";
}

// const user = users[id];
// console.log(id, user);

function UpdatedUser({ user }) {
  const [name, setName] = useState(user.name);
  const [profession, setProfession] = useState(user.profession);
  const [avatar, setAvatar] = useState(user.avatar);
  const [place, setPlace] = useState(user.place);
  const [quotes, setQuotes] = useState(user.quotes);
  const history = useHistory();

  const editUser = () => {
    const updatedUser = {
      name,
      profession,
      avatar,
      place,
      quotes,
    };
    console.log(updatedUser);
    // }
    //   const copyUserList = [...users];
    //   copyUserList[id] = updatedUser;
    //   setUsers(copyUserList);
    //   history.push("/users");

    fetch(`https://616b1eb916e7120017fa1233.mockapi.io/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => history.push("/users"));
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
