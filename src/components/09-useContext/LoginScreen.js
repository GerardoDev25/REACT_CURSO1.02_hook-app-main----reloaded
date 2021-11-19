import React, { useContext } from "react";

import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  const hamdleLogin = () =>
    setUser({
      id: 123,
      name: "Gerardo",
    });

  return (
    <div>
      <h1>Login Screen</h1>
      <hr />

      <button
        className="btn btn-outline-primary"
        onClick={hamdleLogin}
      >
        Login
      </button>
    </div>
  );
};
