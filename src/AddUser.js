import React from "react";

import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import * as yup from "yup";
import { useFormik } from "formik";


 export const formValidationSchema=yup.object({
  name:yup.string().required("Why not fill this name?").min(4,"Your name must be longer"),
  profession:yup.string().required("Why not fill this profession?").min(4,"Your profession must be longer"),
  avatar:yup.string().required("Why not fill this avatar Url?").min(4,"Your avatar must be longer"),
  place:yup.string().required("Why not fill this place?").min(3,"Your place must be longer"),
  quotes:yup.string().required("Why not fill this quotes?").min(6,"Your quotesmust be longer"),
  
});
export function AddUser() {
  const history=useHistory();
  const {handleSubmit,values,handleChange,handleBlur,errors,touched} =
   useFormik({
    initialValues: {
   name: "",
   profession:"",
     avatar: "",
     place:"", 
     quotes:"",
    

    },
    validationSchema:formValidationSchema,
    // validate: validateForm,
    onSubmit: (newUser) => {
      console.log("onSubmit", newUser);
      addUser(newUser);
    },
  });
  // const [name, setName] = useState("");
  // const [profession, setProfession] = useState("");
  // const [avatar, setAvatar] = useState("");
  // const [place, setPlace] = useState("");
  // const [quotes, setQuotes] = useState("");



  // useEffect(()=>{
  //   console.log("User form is updated",{
  //     name,profession,avatar,place,quotes,
  //   });
  // },[]);
  const addUser = (newUser) => {
    // console.log("AddingUsers...", name, profession, avatar, place, quotes);
    // const newUser = {
    //   name,
    //   profession,
    //   avatar,
    //   place,
    //   quotes,
    // };
     
    fetch(`https://616b1eb916e7120017fa1233.mockapi.io/users`,{
      method:"POST",
      body:JSON.stringify(newUser),
      headers:{
        "Content-type":"application/json",
      },
      }).then(()=>history.push("/users"))

    
   
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
       
      <Button variant="outlined" type="submit">
        AddUser
      </Button>
    </form>
  );
}

// fetch("https://616b1eb916e7120017fa1233.mockapi.io/users")
// .then((data)=>data.json())
// .then((urs)=>console.log(urs));
