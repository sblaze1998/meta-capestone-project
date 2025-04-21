import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../components/NotFound";
import Reservations from "../components/reservation/Reservation";
import Login from "../components/Login";
import Order from "../components/order/Order";
import DishDetail from "../components/DishDetail";
import Cart from "../components/Cart";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orderonline" element={<Order />} />
        <Route path="/orderonline/:id" element={<DishDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
