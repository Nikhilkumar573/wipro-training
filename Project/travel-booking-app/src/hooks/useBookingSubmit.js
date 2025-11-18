import { useState } from "react";
import { useBookingContext } from "../context/BookingContext";

export default function useBookingSubmit() {
  const { addBooking } = useBookingContext();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const submitBooking = async (values, resetForm) => {
    try {
      setSubmitting(true);
      setError("");

      // Simulate API call delay
      await new Promise((res) => setTimeout(res, 800));

      addBooking({
        ...values,
        createdAt: new Date().toISOString()
      });

      resetForm();
      alert("Booking submitted successfully!");
    } catch (e) {
      console.error(e);
      setError("Failed to submit booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return { submitting, error, submitBooking };
}
