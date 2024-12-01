import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Success from "./Components/Success";
import NotFound from "./Components/NotFound";
  import { ToastContainer } from "react-toastify";
import Reservation from "./pages/Reservation";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/success" element={<Success></Success>} />
        <Route path="/*" element={<NotFound></NotFound>} />
        <Route path="/reservation" element={<Reservation></Reservation>}></Route>
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
