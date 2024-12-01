import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Success from "./Components/Success";
import NotFound from "./Components/NotFound";
  import { ToastContainer } from "react-toastify";
import Reservation from "./pages/Reservation";
import Services from "./pages/Services";
import About from "./pages/About";
import Single from "./pages/Single";
import MoversAndPackers from "./pages/MoversAndPackers";
import CarRelocation from "./pages/CarRelocation";
import Bike from "./pages/Bike";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/success" element={<Success></Success>} />
        <Route path="/*" element={<NotFound></NotFound>} />
        <Route path="/reservation" element={<Reservation></Reservation>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/single" element={<Single></Single>}></Route>
        <Route path="/mover" element={<MoversAndPackers></MoversAndPackers>}></Route>
        <Route path="/carRelocation" element={<CarRelocation></CarRelocation>}></Route>
        <Route path="/bike" element={<Bike></Bike>}></Route>

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
