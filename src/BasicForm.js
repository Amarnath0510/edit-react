import { useFormik } from "formik";
import * as yup from 'yup';

const validateForm = (values) => {
  const errors = {};
  console.log("validateForm", values);

//   if (values.email.length < 5) {
//     errors.email = "Please provide a bigger email";
//   }

//   if (values.email.length > 20) {
//     errors.email = "Please provide a shorter email";
//   }

//   if (values.password.length < 8) {
//     errors.password = "Please provide a longer password";
//   }
//   if (values.password.length > 12) {
//     errors.password = "Please provide a shorter password";
//   }
  console.log(errors);
  return errors;
};

const formValidationSchema=yup.object({
    email:yup.string()
    .min(5,"Need a longer email")
    .required("Please provide your email✍🏿"),
    password:yup.string()
    .min(8,"Please provide a bigger password")
    .max(12,"Very big password")
    .required("Please provide your password 🔒")
})
export function BasicForm() {
  const {handleSubmit,values,handleChange,handleBlur,errors,touched} = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema:formValidationSchema,
    // validate: validateForm,
    onSubmit: (values) => {
      console.log("onSubmit", values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        type="email"
        placeholder="Enter your Email"
      />
      {errors.email && touched.email  && errors.email}
      <input
        id="password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
        type="password"
        placeholder="Enter your Password"
      />
      {errors.password &&
        touched.password &&
        errors.password}
      <button type="submit">Submit</button>
    </form>
  );
}
