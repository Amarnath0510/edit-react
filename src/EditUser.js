import React, { useEffect } from "react";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import {
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import { formValidationSchema } from "./AddUser";
export function EditUser() {
  
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
  const {handleSubmit,values,handleChange,handleBlur,errors,touched} =
  useFormik({
   initialValues: {
  name: user.name,
  profession:user.profession,
    avatar:user.avatar,
    place:user.place, 
    quotes:user.quotes,
   

   },
   validationSchema:formValidationSchema,
   // validate: validateForm,
   onSubmit: (updatedUser) => {
     console.log("onSubmit", updatedUser);
     editUser(updatedUser);
   },
 });
  // const [name, setName] = useState(user.name);
  // const [profession, setProfession] = useState(user.profession);
  // const [avatar, setAvatar] = useState(user.avatar);
  // const [place, setPlace] = useState(user.place);
  // const [quotes, setQuotes] = useState(user.quotes);
  const history = useHistory();

  const editUser = (updatedUser) => {
    // const updatedUser = {
    //   name,
    //   profession,
    //   avatar,
    //   place,
    //   quotes,
    // };
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
    <form onSubmit={handleSubmit} className="add-user">
    <TextField
      id="name"
      name="name"
      
      value={values.name}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Enter a name"
      error={errors.name && touched.name}
      helperText=  {errors.name && touched.name && errors.name}
      variant="standard" 
      />
   

    <TextField
    id="profession"
      name="profession"
      value={values.profession}
      onChange={handleChange}
      onBlur={handleBlur}
      helperText= {errors.profession && touched.profession && errors.profession}
      error={errors.profession && touched.profession}
      placeholder="Enter a profession"
      variant="standard" />
      
    <TextField
    id="avatar"
    name="avatar"
      value={values.avatar}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Paste a avatar"
      variant="standard"
      helperText= {errors.avatar && touched.avatar && errors.avatar}
      error={errors.avatar && touched.avatar}
      />
     
    <TextField
    id="place"
    name="place"
      value={values.place}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Enter a place"
      variant="standard" 
      helperText= {errors.place && touched.place && errors.place}
      error={errors.place && touched.place}
      
      />
     

    <TextField
    id="quotes"
    name="quotes"
      value={values.quotes}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="Enter a quotes"
      variant="standard" 
      helperText= {errors.quotes && touched.quotes && errors.quotes}
      error={errors.quotes && touched.quotes}
      
      />
     
    <Button color="success" variant="outlined" type="submit">
    Save
    </Button>
  </form>
    // <div className="add-user">
    //   <TextField
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     placeholder="Enter a name"
    //     variant="standard"
    //   />

    //   <TextField
    //     value={profession}
    //     onChange={(e) => setProfession(e.target.value)}
    //     placeholder="Enter a profession"
    //     variant="standard"
    //   />
    //   <TextField
    //     value={avatar}
    //     onChange={(e) => setAvatar(e.target.value)}
    //     placeholder="Paste a avatar"
    //     variant="standard"
    //   />
    //   <TextField
    //     value={place}
    //     onChange={(e) => setPlace(e.target.value)}
    //     placeholder="Enter a place"
    //     variant="standard"
    //   />
    //   <TextField
    //     value={quotes}
    //     onChange={(e) => setQuotes(e.target.value)}
    //     placeholder="Enter a quotes"
    //     variant="standard"
    //   />

    //   <Button variant="outlined" onClick={editUser}>
    //     Save
    //   </Button>
    // </div>
  );
}

// console.log("AddingUsers...", name, profession, avatar, place, quotes);
