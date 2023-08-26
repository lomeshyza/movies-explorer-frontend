//HOC
import React from "react";
import Main from "../Main/Main";

const ProtectedRoute = ({element: Component, ...props})=>{
console.log(props.loggedIn)
  return props.loggedIn ? <Component {...props} />: <Main loggedIn={props.loggedIn}/>
}
export default ProtectedRoute;
