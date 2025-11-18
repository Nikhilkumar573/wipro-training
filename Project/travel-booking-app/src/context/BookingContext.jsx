import React, { createContext, useContext, useReducer } from "react";

const BookingContext = createContext();

const initialState = {
  selectedPackage: null,
  bookings: []
};

function bookingReducer(state, action) {
  switch (action.type) {
    case "SET_PACKAGE":
      return { ...state, selectedPackage: action.payload };
    case "ADD_BOOKING":
      return { ...state, bookings: [...state.bookings, action.payload] };
    default:
      return state;
  }
}

export const BookingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const value = {
    selectedPackage: state.selectedPackage,
    bookings: state.bookings,
    setSelectedPackage: (pkg) => dispatch({ type: "SET_PACKAGE", payload: pkg }),
    addBooking: (booking) => dispatch({ type: "ADD_BOOKING", payload: booking })
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};

export const useBookingContext = () => useContext(BookingContext);
