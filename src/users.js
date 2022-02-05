import React from "react";
import "./users.css";
import Card from "@mui/material/Card";
import EditIcon from "@mui/icons-material/Edit";
function Users() {
  const users = [
    {
      name: "Will Smith",
      avatar:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed663d153104f0007d6f014%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D15%26cropX2%3D1047%26cropY1%3D48%26cropY2%3D1080",
      id: "9",
    },
    {
      name: "Amarnath",
      avatar:
        "https://img.mensxp.com/media/content/2020/Aug/header-Rajinikanth-V-Creations_5f3141b80d89a.jpeg",
      id: "10",
    },
  ];
  return (
    <div className="users">
      {users.map((ur, index) => (
        <Card key={index} variant="outlined">
          <img className="img-container" src={ur.avatar} alt={ur.name} />
          <h2 className="name-container">{ur.name}</h2>
          <EditIcon className="edit-icon-container" />
        </Card>
      ))}
    </div>
  );
}
export default Users;
