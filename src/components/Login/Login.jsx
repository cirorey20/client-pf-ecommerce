import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  // const { loginWithRedirect } = useAuth0();
  // console.log(useAuth0);
  return (
    <div>
      {/* <button
        className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#cbd5e1] hover:bg-[#0f172a]"
        onClick={() => loginWithRedirect()}N
      >
        Login
      </button> */}
      <Link to="/login">LOGIN</Link>
    </div>
  );
};

export default Login;
