import React from "react";
import { ToastContainer } from "react-toastify";

export default function AddToast() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5002}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnHover={true}
    ></ToastContainer>
  );
}