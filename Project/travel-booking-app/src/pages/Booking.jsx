import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import useBookingSubmit from "../hooks/useBookingSubmit";
import { useBookingContext } from "../context/BookingContext";

const bookingSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  travelDate: Yup.string().required("Travel date is required")
});

const Booking = () => {
  const { selectedPackage } = useBookingContext();
  const { submitting, error, submitBooking } = useBookingSubmit();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    packageName: selectedPackage ? selectedPackage.name : ""
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <h2 className="mb-3">Booking Form</h2>

        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={bookingSchema}
          onSubmit={(values, { resetForm }) => submitBooking(values, resetForm)}
        >
          <Form className="card p-3 shadow-sm">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <Field name="name" className="form-control" />
              <div className="text-danger small">
                <ErrorMessage name="name" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <Field name="email" type="email" className="form-control" />
              <div className="text-danger small">
                <ErrorMessage name="email" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <Field name="phone" className="form-control" />
              <div className="text-danger small">
                <ErrorMessage name="phone" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Travel Date</label>
              <Field name="travelDate" type="date" className="form-control" />
              <div className="text-danger small">
                <ErrorMessage name="travelDate" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Selected Package</label>
              <Field
                name="packageName"
                className="form-control"
                disabled={!!selectedPackage}
              />
              {!selectedPackage && (
                <div className="form-text">
                  You can pre-select a package from the Packages page.
                </div>
              )}
            </div>

            {error && <div className="alert alert-danger">{error}</div>}

            <button
              type="submit"
              className="btn btn-success"
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Confirm Booking"}
            </button>
          </Form>
        </Formik>
      </div>

      <div className="col-md-5">
        <h3 className="mb-3">Summary</h3>
        {selectedPackage ? (
          <div className="card p-3 shadow-sm">
            <h5>{selectedPackage.name}</h5>
            <p>{selectedPackage.description}</p>
            <p>Price: ₹{selectedPackage.price}</p>
            <p>Rating:  {selectedPackage.rating}</p>
          </div>
        ) : (
          <p>No package selected yet.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;

