import React, { useEffect } from "react";

import { useForm } from "../../Hooks/useForm";
import "./effects.css";

export const FormWidthCustomHook = () => {
  const [formValues, handleInputChange, handleSubmit, reset] =
    useForm({
      name: "",
      email: "",
      password: "",
    });

  const { name, email, password } = formValues;

  useEffect(() => {
    console.log("email cambio");
  }, [email]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWidthCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
      <button
        type="button"
        onClick={reset}
        className="btn btn-info"
      >
        reset
      </button>
    </form>
  );
};
