import { Redirect, Route } from "react-router-dom";
import React from "react";
import decode from "jwt-decode";

export const Authenticate = token => {
  try {
    const res = decode(token);
    if (res.exp > Date.now() / 1000) {
      return { res };
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
const ProtectedRoute = ({ component: Component, ...props }) => {
  const isLoggedIn = Authenticate(localStorage.getItem("token"));
  return (
    <Route
      {...props}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export const details = token => {
  try{
    let res = decode(token);
    return res;
  }catch(error){return false;}

};
export default ProtectedRoute;
