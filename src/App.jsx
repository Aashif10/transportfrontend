import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Success from "./Components/Success";
import NotFound from "./Components/NotFound";
  import { ToastContainer } from "react-toastify";
import Blogs from "./Components/Blogs";
import Bike from "./Components/Bike";
import CarRelocation from "./Components/CarRelocation";
import MoversAndPackers from "./Components/MoversAndPackers";
import Single from "./Components/Single";
import About from "./Components/About";
import Services from "./Components/Services";
import Reservation from "./Components/Reservation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/success" element={<Success></Success>} />
        <Route path="/*" element={<NotFound></NotFound>} />
        <Route path="/contact" element={<Reservation></Reservation>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/single" element={<Single></Single>}></Route>
        <Route path="/mover" element={<MoversAndPackers></MoversAndPackers>}></Route>
        <Route path="/carRelocation" element={<CarRelocation></CarRelocation>}></Route>
        <Route path="/bike" element={<Bike></Bike>}></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
      </Routes>
      <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={true}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
    </BrowserRouter>
  );
};

export default App;
