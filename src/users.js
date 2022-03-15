import React from "react";
import Card from "@mui/material/Card";


export function Users({
  name,
  profession,
  avatar,
  place,
  quotes,
  id,
  editButton,
  deleteButton,
}) {
  return (
    <div className="users">
      <Card style={{borderRadius:"10px"}}className="users-list-container" variant="outlined">
        <div className="details -container">
          <img className="img-container" src={avatar} alt={name} />
          <h2 className="name-container">{name}</h2>
          <h4 className="profession-container">{profession}</h4>
          <p className="place-container">{place}</p>
          <p className="quotes-container">{quotes}</p>

          {editButton}
          {deleteButton}
        </div>
      </Card>
    </div>
  );
}
