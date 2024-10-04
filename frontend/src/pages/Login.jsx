import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import useField from "../hooks/useField";
import useLogin from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const { authLogin } = useContext(AuthContext);
  const username = useField("text");
  const password = useField("password");

  const { login, error } = useLogin("/api/users/login");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const userData = await login({
      username: username.value,
      password: password.value,
    });
    if (userData) {
      authLogin(userData);
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Login</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username:</label>
        <input {...username} />
        <label>Password:</label>
        <input {...password} />
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;

