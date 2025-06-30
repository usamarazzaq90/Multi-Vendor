import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./redux/store";

//For React > v18
const container = document.getElementById("root");
const root = createRoot(container); // Create a root
root.render(
  <Provider store={Store}>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  </Provider>
); // Render your app using the root

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//     <ToastContainer
//       position="top-right"
//       autoClose={2000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="dark"
//     />
//   </Provider>,
//   document.getElementById("root")
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   // <React.StrictMode>
//   <>
//     <App />
//     <ToastContainer
//       position="top-right"
//       autoClose={2000}
//       hideProgressBar={false}
//       newestOnTop={false}
//       closeOnClick
//       rtl={false}
//       pauseOnFocusLoss
//       draggable
//       pauseOnHover
//       theme="dark"
//     />
//   </>
//   // </React.StrictMode>
// );

reportWebVitals();
