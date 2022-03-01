import React, { useState } from "react";
import { Users } from "./Users";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
export function UserList({ users, setUsers }) {
  const history = useHistory();
  return (
    <section className="section-container">
      {users.map(({ name, profession, avatar, place, quotes }, index) => (
        <Users
          id={index}
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
              onClick={() => {
                console.log("Deleting...", index);
                const deleteIdx = index;
                const remainingUsers = users.filter(
                  (ur, idx) => idx !== deleteIdx
                );
                console.log("Remaining", remainingUsers);
                setUsers(remainingUsers);
              }}
            >
              <DeleteIcon className="delete-container" />
            </IconButton>
          }
        />
      ))}
    </section>
  );
}
