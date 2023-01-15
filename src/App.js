import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicRoute from "./route/PublicRoute";
import PrivateRoute from "./route/PrivateRoute";

import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Navbar from "./components/layout/Navbar";
import Cart from "./components/cart/Cart";

import { authCheck } from "./store/auth-action";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  let loggedUser = store.auth.isAuthenticated;

  useEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar loggedUser={loggedUser} />}>
          {/* <Route element={<PublicRoute loggedUser={loggedUser} />}> */}
          <Route path="/" element={<Login />} />
          {/* </Route> */}
          {/* <Route element={<PrivateRoute loggedUser={loggedUser} />}> */}
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Cart" element={<Cart />} />
          {/* </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
