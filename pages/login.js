import React from "react";
import useAuth from "../auth/context";
import { useFormik } from "formik";
import { redirectServerSide } from "../auth/cookies";

export default function Login() {
  const { login } = useAuth();

  const formik = useFormik({
    initialValues: {
      email: "admin@gmail.com",
      password: "secret",
    },
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          placeholder="username"
          onChange={formik.handleChange}
          value={formik.values.email}
          name="email"
        />
        <br />
        <input
          type="text"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          name="password"
        />
        <br />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  redirectServerSide(context);
  return {
    props: {},
  };
};
