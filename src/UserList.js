import React, { useState ,useEffect} from "react";
import { Users } from "./Users";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export function UserList() {
  const[users,setUsers]=useState([]);
  const getUsers=()=>{
    fetch("https://616b1eb916e7120017fa1233.mockapi.io/users")
    .then((data)=>data.json())
    .then((urs)=>setUsers(urs))
  };
  useEffect(getUsers,[]);
const deleteUser =(id)=>{
  fetch(
    `https://616b1eb916e7120017fa1233.mockapi.io/users/${id}`,
    {
      method:"DELETE",
}).then(()=>getUsers());
};

  const history = useHistory();
  return (
    <section className="section-container">
      {users.map(({ name, profession, avatar, place, quotes,id}, index) => (
        <Users
          key={id}
          id={id }
          name={name}
          profession={profession}
          avatar={avatar}
          place={place}
          quotes={quotes}
          editButton={
            <IconButton onClick={() => history.push("/users/edit/" + index)}>
              <EditIcon className="edit-container" />
            </IconButton>
          }
          deleteButton={
            <IconButton
              onClick={() => deleteUser(id)}
               
                // console.log("Deleting...", index);
                // const deleteIdx = index;
                // const remainingUsers = users.filter(
                //   (ur, idx) => idx !== deleteIdx
        //  =>getUsers</section>       // );
        //         // console.log("Remaining", remainingUsers);
        //         // setUsers(remainingUsers);
        //       // }} 
            >
              <DeleteIcon className="delete-container" />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
