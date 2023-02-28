import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Rooms from "./components/rooms";
import MeetingAndEvents from "./components/meeting&event";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <MeetingAndEvents /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
