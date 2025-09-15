import { useState } from "react";

const LoginButton = () => {
  const [loginBtnName, setLoginBtnName] = useState(true);

  return (
    <button
      className="login"
      onClick={() => {
        setLoginBtnName(!loginBtnName)
      }}
    >
      {loginBtnName ? "Login" : "Logout"}
    </button>
  )
};

export default LoginButton;