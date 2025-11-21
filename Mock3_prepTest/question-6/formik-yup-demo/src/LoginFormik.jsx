import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function LoginFormik() {
  
 
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
      
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema,

    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      alert(`Login Successful!\nEmail: ${values.email}`);
    },
  });

  return (
    <div style={{
      width: "320px",
      margin: "50px auto",
      padding: "25px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      fontFamily: "Arial"
    }}>
      <h2 style={{ textAlign: "center" }}> Login</h2>

      <form onSubmit={formik.handleSubmit}>

        {/* Email Input */}
        <div style={{ marginBottom: "12px" }}>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: "100%", padding: "8px" }}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: "red", fontSize: "14px" }}>{formik.errors.email}</p>
          )}
        </div>

        {/* Password Input */}
        <div style={{ marginBottom: "12px" }}>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            style={{ width: "100%", padding: "8px" }}
          />
          {formik.touched.password && formik.errors.password && (
            <p style={{ color: "red", fontSize: "14px" }}>{formik.errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "black",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
            border: "none",
          }}>
          Login
        </button>

      </form>
    </div>
  );
}

export default LoginFormik;
