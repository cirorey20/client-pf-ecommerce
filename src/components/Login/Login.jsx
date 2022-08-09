import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Login.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button className="login_button" onClick={() => loginWithRedirect()}>
        Login
      </button>
    </div>
  );
};

export default Login;
