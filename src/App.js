import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/home";
import Rooms from "./components/rooms";
import MeetingAndEvents from "./components/meeting&event";
import Discover from "./components/discover";
import Gallery from "./components/gallery";
import Services from "./components/services";
import ContactUs from "./components/contact";
import Login from "./components/login";
import NotFound from "./components/404";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Routes>
        <Route>
          <Route path="/rooms" index element={<Rooms />} />
          <Route path="/meeting&events" element={<MeetingAndEvents />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
