import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import BookActions from "../flux/actions/bookActions";

const AddBookForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      author: "",
      price: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Title is required"),
      author: Yup.string().required("Author is required"),
      price: Yup.number().required("Price is required").positive(),
    }),
    onSubmit: (values, { resetForm }) => {
      BookActions.addBook(values); // dispatch the action
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Add a New Book</h2>

      <input
        name="title"
        placeholder="Book Title"
        onChange={formik.handleChange}
        value={formik.values.title}
      />
      {formik.errors.title && <p>{formik.errors.title}</p>}

      <input
        name="author"
        placeholder="Author"
        onChange={formik.handleChange}
        value={formik.values.author}
      />
      {formik.errors.author && <p>{formik.errors.author}</p>}

      <input
        name="price"
        placeholder="Price"
        onChange={formik.handleChange}
        value={formik.values.price}
      />
      {formik.errors.price && <p>{formik.errors.price}</p>}

      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
