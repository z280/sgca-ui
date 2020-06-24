import React from "react";

interface Props {}

const LoginForm = (props: Props) => {
  let formField = "appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white";
  return (
    <form>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="text" className={formField} />
      <label htmlFor="password">Password</label>
      <input id="password" className={formField} type="text" />
    </form>
  );
};

export default LoginForm;
